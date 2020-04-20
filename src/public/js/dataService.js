app.factory('dataService', function() {
  
      this.getDemoData = function(){
        return {
          "items": [
            {
              "name": "Deer Island Jac-Shirt",
              "description": {
                "title": "",
                "text": "The Deer Island Jac-Shirt makes a perfect heavy overshirt in cool temps, or a mid-layer in wet or cold weather. The heavy cotton twill is brushed for added comfort and warmth. Outfitted with side-seam handwarmer pockets and military-grade melamine buttons."
              },
              "sku": "20105728",
              "price": 165,
              "sale": 59,
              "discount": 64,
              "quantity": 1,
              "type": { 
                  "name": "Dark Cream/Green",
                  "images":[
                    "20105728_DkCrmGrn_main_01.png",
                    "20105728_DkCrmGrn_alt_01.png",
                    "20105728_DkCrmGrn_alt_02.png"
                  ],
                  "swatch": "20105728_DkCrmGreen_swatch.jpg",
                  "sizes": [
                    "XS"
                  ] 
                  }
            },
            {
              "name": "Mackinaw Jac-Shirt",
              "description": {
                "title": "",
                "text": "Our heavyweight Mackinaw Jac-Shirt uses the same 100% virgin Mackinaw Wool that’s found on many of our jackets. It’s breathable, warm and naturally rain-repellent. A flannel lining in the body provides the softness of a shirt while adding even more insulation. The button front is easy to use while wearing gloves, and a pleated back allows a full range of motion. "
              },
              "sku": "11010788",
              "price": 325,
              "sale": 209.9,
              "discount": 35,
              "quantity": 1,
              "type": { 
                "name": "Taupe/Brown/Black Plaid",
                "images":[
                  "11010788_TpeBrnBlk_main_01.png",
                  "11010788_TpeBrnBlk_alt_01.png",
                  "11010788_TpeBrnBlk_alt_02.png"
                ],
                "sizes": [
                  "XS",
                  "S",
                  "M",
                  "3XL"
                ],
                "swatch": "20105728_DkCrmGreen_swatch.jpg"
              }
            },
            {
              "name": "Worted Wool Western Shirt",
              "description": {
                "title": "",
                "text": "The Filson Worsted Wool Shirt is constructed from 100% wool, worsted and tightly-woven for a structured, smooth fabric that’s extremely durable and effective at repelling wind and rain. Wool can absorb up to 30% of its weight in water without feeling damp or clammy—while continuing to insulate. Western cut and styling—curved front and back yokes, faux-horn snaps for the front closure, chest pockets and cuffs. "
              },
              "sku": "20114898",
              "price": 225,
              "sale": 124,
              "discount": 44,
              "quantity": 1,
              "type": {
                "name": "Taupe/Brown/Black Plaid",
                "images": [
                    "20114898_HeathrBlk_main_01.png",
                    "20114898_HeathrBlk_alt_01.png",
                    "20114898_HeathrBlk_alt_02.png"
                ],
                "sizes": [
                  "XS",
                  "S",
                  "M",
                  "3XL"
                ],
                "swatch": "20114898_HeathrBlk_swatch.jpg"
              }
            },
            {
              "name": "Vintage Flannel Work Shirt",
              "description": {
                "title":"",
                "text":"Our Vintage Flannel Work Shirt is made with a breathable midweight cotton and has a soft brushed interior. The pleated back provides a full range of motion through the shoulders. Button-down front with button-adjustable cuffs."
              },
              "sku": "11010689",
              "price": 145,
              "sale": 93.9,
              "discount": 35,
              "quantity": 1,
              "type": {
                "name":"Black/Charcoal Buffalo Check",
                "images": [
                    "11010689_BlkCharChk_main_01.png",
                    "11010689_BlkCharChk_alt_01.png",
                    "11010689_BlkCharChk_alt_02.png"
                ],
                "sizes": [
                  "XS",
                  "S",
                  "M",
                  "L",
                  "XL",
                  "3XL",
                  "M-LONG",
                  "L-LONG",
                  "XL-LONG",
                  "2XL-LONG"
                ],
                "swatch":"11010689_BlkCharChk_swatch.jpg"
              }
            },
            {
              "name": "Vintage Flannel Work Shirt",
              "description": {
                "title":"",
                "text":"Our Vintage Flannel Work Shirt is made with a breathable midweight cotton and has a soft brushed interior. The pleated back provides a full range of motion through the shoulders. Button-down front with button-adjustable cuffs."
              },
              "sku": "11010689",
              "price": 145,
              "sale": 93.9,
              "discount": 35,
              "quantity": 1,
              "type":
                {
                  "name":"Black/Green/Navy Plaid",
                  "images": [
                      "11010689_BlkGrnNavy_main_01.png",
                      "11010689_BlkGrnNavy_alt_01.png",
                      "11010689_BlkGrnNavy_alt_02.png"
                  ],
                  "sizes": [
                    "L-LONG",
                    "XL-LONG",
                    "2XL-LONG"
                  ],
                  "swatch":"11010689_BlkGrnNavy_swatch.jpg"
                }
            }
          ]
        }
    }

    return this
  });