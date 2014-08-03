var dxk;

$(function(){
  dxk = $('#menu2').eq(0).mobilemenu({
    menuOpenIcon: '<span class="mobilemenu--open-icon">MENU2</span>',
    body: '<div class="block">\
        <p>Cursus, in proin! Cum pulvinar? Montes velit, adipiscing porta duis pulvinar? Parturient purus ac quis ac augue pulvinar a tortor porttitor cras parturient, habitasse nascetur montes nunc? Odio placerat, et rhoncus, turpis? Porttitor rhoncus arcu, velit! Lorem placerat lorem amet elit vel elit. Enim est parturient rhoncus, massa amet.</p>\
      </div>\
      <div class="search"><input type="text" placeholder="Search" /><input type="submit" value="Search" /></div>\
      <ul class="menu">\
        <li><a href="#">Home</a></li>\
        <li><a href="#">Menu 1</a></li>\
        <li><a href="#">Menu 2</a></li>\
        <li>\
          <a href="#">Menu 3</a>\
          <ul>\
            <li><a href="#">Submenu 1</a></li>\
            <li>\
              <a href="#">Submenu 2</a>\
              <ul>\
                <li><a href="#">SubSubmenu 1</a></li>\
                <li><a href="#">SubSubmenu 2</a></li>\
                <li><a href="#">SubSubmenu 3</a></li>\
              </ul>\
            </li>\
            <li><a href="#">Submenu 3</a></li>\
            <li><a href="#">Submenu 4</a></li>\
          </ul>\
        </li>\
        <li><a href="#">Menu 4</a></li>\
      </ul>'/*,
    onInit: function(menu, options){
      console.log(menu);
      console.log(options);
    },
    onOpen: function(menu, options){
      console.log(menu);
      console.log(options);
    },
    onClose: function(menu, options){
      console.log(menu);
      console.log(options);
    },
    onUlInit: function(ul, index, menu, options){
      console.log(ul);
      console.log(index);
      console.log(menu);
      console.log(options);
    }*/
  });
  
  $('#menu').children('ul').mobilemenu();
});