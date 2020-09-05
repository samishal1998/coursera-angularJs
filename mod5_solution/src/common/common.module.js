(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://samishal1998-resturant.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();