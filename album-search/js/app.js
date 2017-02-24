angular.module('app',['ngResource']).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://itunes.apple.com/**'
    ]);
});
