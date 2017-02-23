angular.module('app')
      .factory('spotifyFactory', spotifyFactory);

function spotifyFactory($http){
  service = {};

  service.getData = function(query){
    var url = 'https://api.spotify.com/v1/search?q='+format(query)+'&type=album';

    return $http.get(url);
  }

  function format(string){
      return string.replace(' ', '+');
  }

  return service;
}
