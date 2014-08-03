$(function(){
  $('.nav').mobilemenu({
    menuOpenIcon: '<span class="mobilemenu--open-icon mobilemenu-theme"><span class="slicknav_icon"><span class="slicknav_icon-bar slicknav_icon-bar--first"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></span>',
    onInit: function(menu, options){
      menu.find('ul').removeClass('nav nav-pills pull-right');
    }
  });
  
  var menu = $.mobilemenu({
    menuOpenObject: $('.demoLink'),
    body: '<div class="some-text"><h5>Some Text</h5><p>Vut scelerisque sed et, mauris adipiscing mauris vut porta lorem non, placerat? Penatibus, vel, porttitor. Lundium, mus urna elit in, integer, elit magna risus, amet. Urna augue rhoncus, sed in, odio in duis lectus turpis. Porta, purus enim ultricies in aliquet etiam! Nisi hac ac ac odio auctor aliquet urna.</p></div>\
    <div class="search input-group"><input type="text" class="form-control" placeholder="Some search" /><div class="input-group-btn"><button type="button" class="btn btn-default">Search</button></div></div>\
    <ul>\
      <li><a href="#">Home</a></li>\
      <li><a href="#">Menu 1</a></li>\
      <li><a href="#">Menu 2</a></li>\
      <li>\
        <a href="https://github.com/sargismarkosyan/MobileMenu">Double click for go by this link, and one click for opening submenu</a>\
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
    </ul>'
  });
});