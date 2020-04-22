app.controller('appController', function ($document, $element, $log, $sce, $timeout, $scope, $http, $window, $mdDialog, oak, _, env, dataService, epson) {
    // ripples
    $scope.untapped = true
    $scope.cursor = {
      x: 0, y: 0
    }
    $scope.showCursor = false
    $scope.shouldReload = false
    $scope.cursorTimeout = 10000

  
    $scope.env = {}
    $scope.showQrcode = false

    
    var cursorPromises = []
    var timer
   
 
    // main window touches. this will log all tapped items, and also add the UI ripple of the tapped area
    $scope.ripples = []
    $scope.timer = null
    $scope.mouseMoved = function ({ pageX: x, pageY: y }) {
      // dont show cursor if the settings has `false` or 0 as the cursorTimeout
      if ($scope.cursorTimeout) {
        resetCursorTimer()
        $scope.cursor = { x, y }
      }
    }
    var clearCursorPromises = function () {
      cursorPromises.forEach(function (timeout) {
        $timeout.cancel(timeout)
      })
      cursorPromises = []
    }
    var resetCursorTimer = function () {
      clearCursorPromises()
      $scope.showCursor = true
      timer = $timeout(function () {
        $scope.showCursor = false
      }, $scope.cursorTimeout)
      cursorPromises.push(timer)
    }
  
    $scope.$on('$destroy', function () {
      clearCursorPromises()
    })
  
    $scope.tapped = function ({ pageX, pageY }) {

      let id = Date.now().toString()
      $scope.showCursor = false
      $scope.ripples.push({
        x: pageX, y: pageY, id
      })
      $timeout(function () {
        _.remove($scope.ripples, { id })
      }, 500)
  
      if ($scope.untapped) {
        $scope.untapped = false
      }
    }
      
    $scope.data = dataService.getDemoData()
    $scope.selectedTypeIndex = 0
    $scope.selectedItem = $scope.data.items[0]
    
    $scope.demoOrder = {}
    $scope.cart = []

    $scope.makeOrder = function(reset){
      $scope.demoOrder = {}
      angular.element(document.getElementsByClassName("modifier-item")).removeClass('selected')
      angular.element(document.getElementsByClassName("demo-item")).removeClass('selected')
      $mdDialog.cancel()
    }

    // $scope.changeOrder = function(data, e) {

    //       $scope.demoOrder = data
    //       console.log("Order: ", angular.toJson($scope.demoOrder))
    //       angular.element(document.getElementsByClassName("modifier-item")).removeClass('selected')
    //       angular.element(document.getElementsByClassName("demo-item")).removeClass('selected')
    //       angular.element(e.srcElement).addClass('selected')
    //       $scope.setOrderTotal()
        

    // }

    $scope.toggleModifier = function(mod,e) {
        if($scope.demoOrder.modifiers.indexOf(mod) < 0){
            $scope.demoOrder.modifiers.push(mod)
            angular.element(e.srcElement).addClass('selected')
        } else {
            $scope.demoOrder.modifiers.splice($scope.demoOrder.modifiers.indexOf(mod),1)
            angular.element(e.srcElement).removeClass('selected')
        }
        $scope.setOrderTotal()
        console.log(angular.element(e.srcElement)[0].classList)
        console.log("demoOrder", angular.toJson($scope.demoOrder))
    }

    $scope.hasModifier = function(mod) {
        if($scope.demoOrder.hasOwnProperty('modifiers') && $scope.demoOrder.modifiers.indexOf(mod) >= 0 ){
            return true
        }
        return false
    }

    $scope.setOrderTotal = function() {
      let sizeTotal = $scope.demoOrder.price
      let modifiersTotal = _($scope.demoOrder.modifiers).sumBy("price")
      $scope.dataTotal = sizeTotal + modifiersTotal
    }
    
    $scope.addToCart = function(itemToAdd, ev) {
      if(itemToAdd.size) {

        let index = $scope.cart.indexOf(itemToAdd)
        // $scope.cart.push(itemToAdd)
        if($scope.cart.indexOf(itemToAdd) < 0) {
          $scope.cart.push(itemToAdd)
        }
        //  else {
        //   if(index >= 0) {
        //     $scope.cart[index].quantity++
        //   }
        // }
        $scope.updateCartTotals()
        $mdDialog.hide()
      }
    }
    $scope.removeFromCart = function(orderToRemove, ev) {
      $scope.cart.splice($scope.cart.indexOf(orderToRemove),1)
      $scope.updateCartTotals()
      // $mdDialog.hide()
    }

    $scope.updateCartTotals = function(){
      $scope.cart.subtotal = _($scope.cart).sumBy('sale')
      $scope.cart.tax = $scope.cart.subtotal * .086
      $scope.cart.total = _($scope.cart).sumBy('sale') + $scope.cart.tax
    }

    $scope.continueShopping = function() {
      $scope.selectedTypeIndex = 0
      $mdDialog.hide()
    }

    $scope.finishShopping = function() {
      $scope.cart = []
      $mdDialog.hide()
    }

    $scope.viewCart = function(ev){
      
      var cartView = $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        contentElement: '#cartViewDialog',
        parent: window.angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        fullscreen: false
      })
    }
    $scope.showItemDetails = function(item, ev){
      $scope.selectedItem = item
      var cartDetails = $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        contentElement: '#cartDetailDialog',
        parent: window.angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        fullscreen: false
      })
    }

    $scope.showPrompt = function(id, ev) {
      var showPrompt = $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        contentElement: `#${id}`,
        parent: window.angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false,
        fullscreen: false
      })
    }

    $scope.checkout = function(id,ev) {
      $mdDialog.hide()
      $scope.showPrompt(id,ev)
      console.log($scope.cart)
      $timeout(function(){
        $mdDialog.hide()
        $scope.showPrompt('showApproved',ev)
      },4000)
    }
    $scope.printReceipt = function(){
      $scope.updateCartTotals()
      console.log("Cart: ", $scope.cart)
      $http({
        method: 'POST',
        url: 'http://localhost:9001/print-receipt',
        data: {
                'cart': $scope.cart,
                'env': $scope.env,
                'subtotal': $scope.cart.subtotal,
                'tax': $scope.cart.tax,
                'total': $scope.cart.total
              }
      }).then(function successCallback (success) {
        console.log(success)
    
      }, function errorCallback (error) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      })
    }
    
    $scope.idleTimeout = function(ev) {
      
      $window.onload = $scope.resetTimer;
      $window.ontouchstart = $scope.resetTimer; // catches touchscreen swipes as well 
      $window.onclick = $scope.resetTimer;      // catches touchpad clicks as well
      $window.onkeypress = $scope.resetTimer;   
      $window.addEventListener('scroll', $scope.resetTimer, true); // improved; see comments
      
    }
    
    $scope.timedOut = function(){
      oak.reload()
    }
    
    $scope.resetTimer = function() {
      clearTimeout($scope.timer);
      $scope.timer = setTimeout($scope.timedOut, 120000);  // time is in milliseconds
    }
    
    $scope.initApp = function () {
      oak.ready()
      oak.on('env-sent',function(obj){
        $scope.env = obj
        $timeout(function(){
          if(obj.hasOwnProperty("HAS_QRCODE") && obj.HAS_QRCODE === 'true'){
            $scope.showQrcode = true
          } else {
            $scope.showQrcode = false
          }
          // console.log("HAS_QRCODE: ",$scope.showQrcode)
        })
      })
    }
    
    $scope.initApp()

  })