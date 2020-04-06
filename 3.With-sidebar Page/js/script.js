$(document).ready(function(){
    var order = $('.order')
    var img = $('img')
    order.css('opacity','0')
    var myId = $('#myLV')
    var addcart = $('.addcart')
    img.mouseover(function(e) {

        $(this).next(myId).css({'opacity':'100', 'top':'-40px','position':'relative','transition-duration':'0.1s'});
        addcart.css({'opacity':'100', 'top':'-40px','position':'relative','transition-duration':'0.1s'});
        console.log(addcart)
        // order.css('opacity','100')
        // order.css('top','-40px')
        // order.css('position','relative')
        // order.css('transition-duration','0.2s')

      });
      img.mouseout(function(e){
        
        $(this).next(myId).css({'opacity':'0', 'top':'-30px','position':'relative','transition-duration':'0.1s'});
        $(this).next(addcart).css({'opacity':'0', 'top':'-30px','position':'relative','transition-duration':'0.1s'});
        // order.css('opacity','0')
        // order.css('top','-30px')
        // order.css('position','relative')
        // order.css('transition-duration','0.2s')
      })
})