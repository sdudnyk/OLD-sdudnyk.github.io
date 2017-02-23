angular.module('app')
      .factory('iTunesFactory', iTunesFactory);

// function iTunesFactory($http){
//   service = {};
//
//   service.getData = function(query){
//     // var url = 'https://itunes.apple.com/search?';
//     var url = 'https://itunes.apple.com/search?term='+format(query)+'&entity=album'+'callback={ alert("123")}';
//
//     return $http.get(url);
//   }
//
//   function format(string){
//       return string.replace(' ', '+');
//   }
//
//   return service;
// }

function iTunesFactory($resource, $sce){
  return $resource( 'https://itunes.apple.com/search?entity=album&term=:query',{query: '@query'}, {
    search: {
      method: 'JSONP',
      params: {
        limit: 10,
        callback: 'JSON_CALLBACK'
      }
    }
  });
}
