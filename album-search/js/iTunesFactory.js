angular.module('app')
      .factory('iTunesFactory', iTunesFactory);

function iTunesFactory($resource){
    return $resource('https://itunes.apple.com/search?entity=album&term=:query', {query: '@query'}, {
    search: {
      method: 'JSONP',
      params: {
        limit: 20,
        callback: function(){}
      }
    }
  });
}
