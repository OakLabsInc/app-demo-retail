app.factory('dataService', function() {
      this.getData = function(store){
        let data = {
            filsons: {
              logo:"images/filsons-products/logo-filsons.png",
              items: [
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
                        "images/filsons-products/20105728_DkCrmGrn_main_01.png",
                        "images/filsons-products/20105728_DkCrmGrn_alt_01.png",
                        "images/filsons-products/20105728_DkCrmGrn_alt_02.png"
                      ],
                      "swatch": "images/filsons-products/20105728_DkCrmGreen_swatch.jpg",
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
                      "images/filsons-products/11010788_TpeBrnBlk_main_01.png",
                      "images/filsons-products/11010788_TpeBrnBlk_alt_01.png",
                      "images/filsons-products/11010788_TpeBrnBlk_alt_02.png"
                    ],
                    "sizes": [
                      "XS",
                      "S",
                      "M",
                      "3XL"
                    ],
                    "swatch": "images/filsons-products/20105728_DkCrmGreen_swatch.jpg"
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
                        "images/filsons-products/20114898_HeathrBlk_main_01.png",
                        "images/filsons-products/20114898_HeathrBlk_alt_01.png",
                        "images/filsons-products/20114898_HeathrBlk_alt_02.png"
                    ],
                    "sizes": [
                      "XS",
                      "S",
                      "M",
                      "3XL"
                    ],
                    "swatch": "images/filsons-products/20114898_HeathrBlk_swatch.jpg"
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
                        "images/filsons-products/11010689_BlkCharChk_main_01.png",
                        "images/filsons-products/11010689_BlkCharChk_alt_01.png",
                        "images/filsons-products/11010689_BlkCharChk_alt_02.png"
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
                  "name": "Scout Shirt",
                  "description": {
                    "title":"",
                    "text":"An ideal blend of comfort and durability, constructed from our lightest-weight cotton twill, the Filson Scout Shirt ideal for year-round use. Features a limited edition pattern of deer against a forested background. Pleated shoulders provide a full range of motion."
                  },
                  "sku": "20174078",
                  "price": 115,
                  "sale": 69.90,
                  "discount": 39,
                  "quantity": 1,
                  "type":
                    {
                      "name":"Brown",
                      "images": [
                          "images/filsons-products/20174078_Brown_main_01.png",
                          "images/filsons-products/20174078_Brown_alt_01.pngg",
                          "images/filsons-products/20174078_Brown_alt_02.png"
                      ],
                      "sizes": [
                        "XS",
                        "S"
                      ],
                      "swatch":"images/filsons-products/20174078_Brown_swatch.jpg"
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
                          "images/filsons-products/11010689_BlkGrnNavy_main_01.png",
                          "images/filsons-products/11010689_BlkGrnNavy_alt_01.png",
                          "images/filsons-products/11010689_BlkGrnNavy_alt_02.png"
                      ],
                      "sizes": [
                        "L-LONG",
                        "XL-LONG",
                        "2XL-LONG"
                      ],
                      "swatch":"images/filsons-products/11010689_BlkGrnNavy_swatch.jpg"
                    }
                },
                {
                  "name": "Wildwood Shirt",
                  "description": {
                    "title":"",
                    "text":"Ideal for work and everyday wear, our Wildwood Shirt is made of a breathable, pre-washed cotton twill for comfort and durability. A pleated back provides a full range of motion through the shoulders. Button front with button-adjustable cuffs for a custom fit. Two chest pockets hold pencils, tools, phones or other accessories."
                  },
                  "sku": "11010760",
                  "price": 98,
                  "sale": 59.90,
                  "discount": 39,
                  "quantity": 1,
                  "type":
                    {
                      "name":"Gray/Charcoal",
                      "images": [
                          "images/filsons-products/11010760_GrayChrcl_main_01.png",
                          "images/filsons-products/11010760_GrayChrcl_alt_01.png",
                          "images/filsons-products/11010760_GrayChrcl_alt_02.png"
                      ],
                      "sizes": [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "2XL",
                        "3XL"
                      ],
                      "swatch":"images/filsons-products/11010760_GrayChrcl_swatch.jpg"
                    }
                },
                {
                  "name": "Rustic Oxford Shirt",
                  "description": {
                    "title":"",
                    "text":"Ideal for work and everyday wear, our Wildwood Shirt is made of a breathable, pre-washed cotton twill for comfort and durability. A pleated back provides a full range of motion through the shoulders. Button front with button-adjustable cuffs for a custom fit. Two chest pockets hold pencils, tools, phones or other accessories."
                  },
                  "sku": "11010760",
                  "price": 98,
                  "sale": 59.90,
                  "discount": 39,
                  "quantity": 1,
                  "type":
                    {
                      "name":"Black/Heather Gray Plaid",
                      "images": [
                          "images/filsons-products/20019387_BlkHthrGry_main_01.png",
                          "images/filsons-products/20019387_BlkHthrGry_alt_01.png",
                          "images/filsons-products/20019387_BlkHthrGry_alt_02.png"
                      ],
                      "sizes": [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "2XL",
                        "3XL"
                      ],
                      "swatch":"images/filsons-products/20019387_BlkHthrGry_swatch.jpg"
                    }
                }
              ]
            },
            strand: {
              logo:"images/strand-products/logo-strand.png",
              items: [
                {
                  "name": "Classic Fit Light Heathered Shirt",
                  "description": {
                    "title": "",
                    "text": "The Classic Fit Light Heathered Shirt makes a perfect heavy overshirt in cool temps, or a mid-layer in wet or cold weather. The heavy cotton twill is brushed for added comfort and warmth. Outfitted with side-seam handwarmer pockets and military-grade melamine buttons."
                  },
                  "sku": "20105728",
                  "price": 165,
                  "sale": 59,
                  "discount": 64,
                  "quantity": 1,
                  "type": { 
                      "name": "Blue",
                      "images":[
                        "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Blue_shirt.jpg",
                        "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Blue_swatch.jpg",
                        "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Blue_zoom.jpg"
                      ],
                      "swatch": "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Blue_swatch.jpg",
                      "sizes": [
                        "XS"
                      ] 
                      }
                },
                {
                  "name": "Classic Fit Light Heathered Shirt",
                  "description": {
                    "title": "",
                    "text": "Our heavyweight Classic Fit Light Heathered Shirt uses the same 100% virgin Mackinaw Wool that’s found on many of our jackets. It’s breathable, warm and naturally rain-repellent. A flannel lining in the body provides the softness of a shirt while adding even more insulation. The button front is easy to use while wearing gloves, and a pleated back allows a full range of motion. "
                  },
                  "sku": "11010788",
                  "price": 325,
                  "sale": 209.9,
                  "discount": 35,
                  "quantity": 1,
                  "type": { 
                    "name": "Green",
                    "images":[
                      "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Green_Shirt.jpg",
                      "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Green_swatch.jpg",
                      "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Green_zoom.jpg"
                    ],
                    "sizes": [
                      "XS",
                      "S",
                      "M",
                      "3XL"
                    ],
                    "swatch": "images/strand-products/1_Classic_Fit_Light_Heathered_Shirt_Green_swatch.jpg"
                  }
                },
                {
                  "name": "Classic Fit Original Collar Shirt",
                  "description": {
                    "title": "",
                    "text": "The Classic Fit Original Collar Shirt is constructed from 100% wool, worsted and tightly-woven for a structured, smooth fabric that’s extremely durable and effective at repelling wind and rain. Wool can absorb up to 30% of its weight in water without feeling damp or clammy—while continuing to insulate. Western cut and styling—curved front and back yokes, faux-horn snaps for the front closure, chest pockets and cuffs. "
                  },
                  "sku": "20114898",
                  "price": 225,
                  "sale": 124,
                  "discount": 44,
                  "quantity": 1,
                  "type": {
                    "name": "Taupe/Brown/Black Plaid",
                    "images": [
                        "images/strand-products/2_Classic_Fit_Original_Collar_Shirt_blue_shirt.jpg",
                        "images/strand-products/2_Classic_Fit_Original_Collar_Shirt_blue_swatch.jpg",
                        "images/strand-products/2_Classic_Fit_Original_Collar_Shirt_blue_zoom.jpg"
                    ],
                    "sizes": [
                      "XS",
                      "S",
                      "M",
                      "3XL"
                    ],
                    "swatch": "images/filsons-products/20114898_HeathrBlk_swatch.jpg"
                  }
                },
                {
                  "name": "Classic Fit Silk Stripe Shirt",
                  "description": {
                    "title":"",
                    "text":"Our Classic Fit Silk Stripe Shirt is made with a breathable midweight cotton and has a soft brushed interior. The pleated back provides a full range of motion through the shoulders. Button-down front with button-adjustable cuffs."
                  },
                  "sku": "11010689",
                  "price": 145,
                  "sale": 93.9,
                  "discount": 35,
                  "quantity": 1,
                  "type": {
                    "name":"Black/Charcoal Buffalo Check",
                    "images": [
                        "images/strand-products/4_Classic_Fit_Silk_Stripe_Shirt_maroon_shirt.jpg",
                        "images/strand-products/4_Classic_Fit_Silk_Stripe_Shirt_maroon_swatch.jpg",
                        "images/strand-products/4_Classic_Fit_Silk_Stripe_Shirt_maroon_zoom.jpg"
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
                    "swatch":"images/strand-products/4_Classic_Fit_Silk_Stripe_Shirt_maroon_swatch.jpg"
                  }
                },
                {
                  "name": "Classic Fit Thick Mesh Shirt",
                  "description": {
                    "title":"",
                    "text":"An ideal blend of comfort and durability, constructed from our lightest-weight cotton twill, the Classic Fit Thick Mesh Shirt ideal for year-round use. Features a limited edition pattern of deer against a forested background. Pleated shoulders provide a full range of motion."
                  },
                  "sku": "20174078",
                  "price": 115,
                  "sale": 69.90,
                  "discount": 39,
                  "quantity": 1,
                  "type":
                    {
                      "name":"Brown",
                      "images": [
                          "images/strand-products/5_Classic_Fit_Thick_Mesh_Shirt_grey_shirt.jpg",
                          "images/strand-products/5_Classic_Fit_Thick_Mesh_Shirt_grey_swatch.jpg",
                          "images/strand-products/5_Classic_Fit_Thick_Mesh_Shirt_grey_zoom.jpg"
                      ],
                      "sizes": [
                        "XS",
                        "S"
                      ],
                      "swatch":"images/filsons-products/20174078_Brown_swatch.jpg"
                    }
                },
                {
                  "name": "Slim Fit Pocket Shirt Maroon Shirt",
                  "description": {
                    "title":"",
                    "text":"Our Slim Fit Pocket Shirt Maroon Shirt is made with a breathable midweight cotton and has a soft brushed interior. The pleated back provides a full range of motion through the shoulders. Button-down front with button-adjustable cuffs."
                  },
                  "sku": "11010689",
                  "price": 145,
                  "sale": 93.9,
                  "discount": 35,
                  "quantity": 1,
                  "type":
                    {
                      "name":"Maroon",
                      "images": [
                          "images/strand-products/6_Slim_Fit_Pocket_Shirt_Maroon_shirt.jpg",
                          "images/strand-products/6_Slim_Fit_Pocket_Shirt_Maroon_zoom.jpg",
                          "images/strand-products/6_Slim_Fit_Pocket_Shirt_Maroon_swatch.jpg"
                      ],
                      "sizes": [
                        "L-LONG",
                        "XL-LONG",
                        "2XL-LONG"
                      ],
                      "swatch":"images/filsons-products/11010689_BlkGrnNavy_swatch.jpg"
                    }
                },
                {
                  "name": "Slim Fit Pocket Shirt Turquise",
                  "description": {
                    "title":"",
                    "text":"Ideal for work and everyday wear, our Slim Fit Pocket Shirt Turquise is made of a breathable, pre-washed cotton twill for comfort and durability. A pleated back provides a full range of motion through the shoulders. Button front with button-adjustable cuffs for a custom fit. Two chest pockets hold pencils, tools, phones or other accessories."
                  },
                  "sku": "11010760",
                  "price": 98,
                  "sale": 59.90,
                  "discount": 39,
                  "quantity": 1,
                  "type":
                    {
                      "name":"Turquise",
                      "images": [
                          "images/strand-products/6_Slim_Fit_Pocket_Shirt_Turquise_shirt.jpg",
                          "images/strand-products/6_Slim_Fit_Pocket_Shirt_Turquise_zoom.jpg",
                          "images/strand-products/6_Slim_Fit_Pocket_Shirt_Turquise_swatch.jpg"
                      ],
                      "sizes": [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "2XL",
                        "3XL"
                      ],
                      "swatch":"images/filsons-products/11010760_GrayChrcl_swatch.jpg"
                    }
                },
                {
                  "name": "Classic Fit Heathered Red Shirt",
                  "description": {
                    "title":"",
                    "text":"Ideal for work and everyday wear, our Wildwood Shirt is made of a breathable, pre-washed cotton twill for comfort and durability. A pleated back provides a full range of motion through the shoulders. Button front with button-adjustable cuffs for a custom fit. Two chest pockets hold pencils, tools, phones or other accessories."
                  },
                  "sku": "11010760",
                  "price": 98,
                  "sale": 59.90,
                  "discount": 39,
                  "quantity": 1,
                  "type":
                    {
                      "name":"Red",
                      "images": [
                          "images/strand-products/7_Classic_Fit_Heathered_Shirt_Red_shirt.jpg",
                          "images/strand-products/7_Classic_Fit_Heathered_Shirt_Red_zoom.jpg",
                          "images/strand-products/7_Classic_Fit_Heathered_Shirt_Red_swatch.jpg"
                      ],
                      "sizes": [
                        "XS",
                        "S",
                        "M",
                        "L",
                        "2XL",
                        "3XL"
                      ],
                      "swatch":"images/filsons-products/20019387_BlkHthrGry_swatch.jpg"
                    }
                }
              ]
            }
        }
        return data[store]
    }

    return this
  });