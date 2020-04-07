$(document).ready(function(){
    var order = $('.order')
    var img = $('img')
    var cart = $('.cart')
    order.css('opacity','0')
    var myId = $('#myLV')
    var addcart = $('.addcart')
    var price = $('.price')
    var myLink = $('#myLink')
    img.mouseout(function(e) {
        $(this).next(myId).css({'opacity':'0', 'top':'-30px','position':'relative','transition':'all .4s ease','transform': 'translateY(-10%)'});
        addcart.css({'opacity':'100', 'top':'-18px','position':'relative','transition':'all .4s ease','transform': 'translateX(-100%)','opacity':'0'});
        price.css({'opacity':'100','transition':'all .3s ease','transform': 'translateX(0%)'});

console.log(e)
        // order.css('opacity','100')
        // order.css('top','-40px')
        // order.css('position','relative')
        // order.css('transition-duration','0.2s')

      });
      img.mouseover(function(e){
        $(this).next(myId).css({'opacity':'100', 'top':'-40px','position':'relative','transition':'all .4s ease','transform': 'translateY(-10%)'});

        addcart.css({'opacity':'100','transition':'all .4s ease','transform': 'translateX(-50%)'});
        price.css({ 'transition':'all .3s ease','transform': 'translateX(50%)','opacity':'0'});
        // order.css('opacity','0')
        // order.css('top','-30px')
        // order.css('position','relative')
        // order.css('transition-duration','0.2s')
      })
      var menu1 = $('.menu-item1')
      var menu2 = $('.menu-item2')
      var second = $('.second')
      var three = $('.three')
            menu1.mouseover(function(e){
        second.css({'visibility': 'visible','opacity':'100','transition':'all .3s ease','transform': 'translatey(1%)'});
      })
                  menu1.mouseout(function(e){
        second.css({'visibility': 'hidden','opacity':'0','transition':'all .3s ease','transform': 'translateX(0%)'});
      })
                  menu2.mouseover(function(e){
        three.css({'visibility': 'visible','opacity':'100','transition':'all .3s ease','transform': 'translatey(1%)'});
      })
                  menu2.mouseout(function(e){
        three.css({'visibility': 'hidden','opacity':'0','transition':'all .3s ease','transform': 'translateX(0%)'});
      })
})