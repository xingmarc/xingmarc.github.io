'use strict';

angular.module('HahaX')
.constant('WIKI_API_URL','https://en.wikipedia.org/w/api.php?action=query&indexpageids=&generator=allcategories&gacprefix=animals&continue=');

angular.module('HahaX')	
.factory('wikiAPI', wikiAPI);
function wikiAPI($http, $resource, WIKI_API_URL) {

	return $resource(WIKI_API_URL, {},
	{
	    get: { method:'GET' },
	});

}