angular.module('app')
      .controller('mainController', mainController);

function mainController($http, spotifyFactory, iTunesFactory) {
  var vm = this;

  vm.albumsSpotify = [];
  vm.albumsItunes = [];

  vm.search = function(){
    if(!vm.query){
      return;
    }

    getSpotifyData();
    getItunesData();
  }

  function getSpotifyData(){
    spotifyFactory.getData(vm.query)
    .then(function(data, status){
      vm.albumsSpotify = data.data.albums.items.filter(function (item) {
        return item.artists[0].name.toLowerCase() == vm.query.toLowerCase();
      });
      console.log('spotify: ', vm.albumsSpotify);
    });
  }

  function getItunesData(){
    iTunesFactory.search({ query: vm.query}, function(data) {
      vm.albumsItunes = data.results;
    });
    console.log('iTunes: ', vm.albumsItunes);
  }
}
