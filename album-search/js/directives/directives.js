angular.module('app')
.directive('switcher', function(){
  return{
    restrict: 'E',
    templateUrl:'templates/switcher.html',
  }
});

angular.module('app')
.directive('albumSpotify', function(){
  return{
    restrict: 'E',
    templateUrl:'templates/album-spotify.html',
  }
});

angular.module('app')
.directive('albumItunes', function(){
  return{
    restrict: 'E',
    templateUrl:'templates/album-itunes.html',
  }
});
