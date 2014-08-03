# MobileMenu

MobileMenu is a tiny very customizable jquery plugin for turn any block or menu to look-alike on-canvas menus with submenus.
You can find demo [here](http://sargismarkosyan.github.io/MobileMenu/).

## Installation

Just include the script on your html files.

```html
<script src="path/to/jquery.mobilemenu.min.js" type="text/javascript"></script>
<link href="path/to/jquery.mobilemenu.css" type="text/css" rel="stylesheet" />
```

## Usage
After including the script on your html, write this code somewhere on your javascript file.

```javascript
$('.menu').mobilemenu();
```

By default it will add below code before `$('.menu')` element and copy that element into other block wich will open after click below span element
```html
<span class="mobilemenu--open-icon mobilemenu-theme"></span>
```

## Options

MobileMenu have some options:

* `menu: false` menu block, it can be used if you want attach block to an existing menu object
* `menuOpenIcon: false` menu opener element html code
* `menuOpenObject: false` element witch mast be clicked for menu opening, if this parameter is set no need for menuOpenIcon
* `body: ''` menu inner html, by default it will get content of selector element
* `onInit: false` callback after menu is initialized
* `onOpen: false` callback after menu opening
* `onClose: false` callback after menu closing
* `onUlInit: false` plugin recursively check each ul inside block and do some modifications for it, you can add callback for do some changes
* `theme: 'mobilemenu-theme'` this class will be attached in menu block and by default menuOpenIcon item

```javascript
var menu = $('.menu').mobilemenu({
  menuOpenIcon: '<span class="mobilemenu--open-icon">Click to open menu</span>',
  body: '<p>some body</p>',
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
  }
});

menu.openMenu();
```
MobileMenu return object with functions:


* `menu` this is menu object
* `menuInner` menu inside content object
* `openMenu` opening menu
* `closeMenu` closing menu
* `updateMenu` this will update ul elements, its needs to be called after menuInner modifications
