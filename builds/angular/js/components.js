(function(angular) {
    'use strict';
    
    App.component('logo', {
        templateUrl: 'components/logo.html'
    });

    App.component('asideMenu', {
        templateUrl: 'components/asideMenu.html',
        bindings: {
            sideMenus: '='
        }
    });

    App.component('headerMenu', {
        templateUrl: 'components/headerMenu.html',
        bindings: {
            headerMenus: '='
        }
    });

    App.component('subHeader', {
        templateUrl: 'components/subHeader.html',
        bindings: {
            menus: '='
        }
    });

  })(window.angular);