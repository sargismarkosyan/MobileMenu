$.fn.mobilemenu = function(userOptions){
  var menuCallObject = this;
  var menu;
  var menuInner;
  var menuInnerUl;
  
  var options = {
    menu: false,
    menuOpenIcon: false,
    menuOpenObject: false,
    body: '',
    onInit: false,
    onOpen: false,
    onClose: false,
    onUlInit: false,
    theme: 'mobilemenu-theme'
  };
  
  //Mearging defoult options with userOptions
  $.extend(true, options, userOptions);
  
  //This will create mobilemenu object if it needed
  var initMenu = function(){
    var body = options.body;
    if(!body){
      if(menuCallObject.prop('tagName') == 'UL'){
        body = $('<div>').append(menuCallObject.clone()).html();
      } else {
        body = '';
      }
    }
    return $('<div class="mobilemenu '+options.theme+'"><div class="mobilemenu--inner">'+body+'</div></div>').prependTo(document.body);
  };
  
  //This will open menu
  var bodyOverflowYDefoultValue = $(document.body).css('overflow-y');
  var openMenu = function(){
    menu.addClass('js-mobilemenu--opened');
    bodyOverflowYDefoultValue = $(document.body).css('overflow-y');
    $(document.body).css('overflow-y', 'hidden');
    updateHeight();
  
    if(options.onOpen)
      options.onOpen(menu, options);
  };
  
  //This will close menu
  var closeMenu = function(){
    menu.removeClass('js-mobilemenu--opened');
    $(document.body).css('overflow-y', bodyOverflowYDefoultValue);
  
    if(options.onClose)
      options.onClose(menu, options);
  };
  
  //This will add overflow-y: scroll if needed
  var updateHeight = function(){
    if(menu.height() < menuInner.height()){
      menu.css('overflow-y', 'scroll');
    } else {
      menu.css('overflow-y', 'visible');
    }
  };
   
  //If mobile open object is not defined, create it and attach open function
  if(!options.menuOpenIcon)
    options.menuOpenIcon = '<span class="mobilemenu--open-icon '+options.theme+'"></span>';
  if(!options.menuOpenObject)
    options.menuOpenObject = $(options.menuOpenIcon).insertBefore(menuCallObject);
  options.menuOpenObject.click(openMenu);
  
  //If menu is not defined create it
  if(options.menu){
    menu = options.menu;
  } else {
    menu = initMenu();
  }
  
  menuInner = menu.children().eq(0);
  menuInnerUl = menuInner.children('ul');
  
  //Attache close function
  menu.bind('touchstart mousedown', function(){
    if(!menuInner.is(':hover')){
      menu.addClass('js-mobilemenu--animate-out');
      setTimeout(function(){
        menu.removeClass('js-mobilemenu--animate-out');
        closeMenu();
      }, 300);
    }
  });
  
  //Attache close function after sliding
  /*var touchstartX = 0;
  menu.bind('touchstart', function(e){
    touchstartX = e.originalEvent.touches[0].pageX;
  }).bind('touchend', function(e){
    var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
    if(touchstartX - touch.pageX > window.innerWidth/3){
      menu.addClass('js-mobilemenu--animate-out');
      setTimeout(function(){
        menu.removeClass('js-mobilemenu--animate-out');
        closeMenu();
      }, 300);
    }
  });*/
  
  //Add ul functions
  function updateUlLis(ul, index){
    $(ul).children('li').children('ul').each(function(subIndex){
      var li = $(this).parent();
      li.addClass('js-mobilemenu--li-with-child');
      
      var lastClick = 0;
      li.children('a, span').click(function(e){
        if(li.hasClass('js-mobilemenu--li-active')){
          li.removeClass('js-mobilemenu--li-active');
        } else {
          li.addClass('js-mobilemenu--li-active');
        }
        
        if(options.theme == 'mobilemenu-theme'){
          setTimeout(function(){
            updateHeight();
          }, 300);
        } else {
          updateHeight();
        }
        
        if((new Date().getTime()) - lastClick < 500)
          return true;
          
        lastClick = new Date().getTime();
        
        return false;
      });
      
      updateUlLis(this, subIndex);
    });
    
    if(options.onUlInit)
      options.onUlInit(ul, index, menu, options);
  }
  
  menuInnerUl.each(function(index){
    updateUlLis(this, index);
  });
  
  if(options.onInit)
    options.onInit(menu, options);
};

$.mobilemenu = function(options){
  $(document.body).children().eq(0).mobilemenu(options);
};