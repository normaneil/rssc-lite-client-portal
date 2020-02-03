App.directive('test', function(){
  return {
    templateUrl: 'components/test.html'
  }
});

App.directive('headerMenu', ()=> {
  return {
    templateUrl: 'components/headerMenu.html'
  }
});

App.directive('asideMenu', ()=> {
  return {
    templateUrl: 'components/asideMenu.html'
  }
});