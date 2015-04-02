angular.module('shortly.services', [])

.factory('Links', function ($http, $location) {
  // Your code here
  var addLink = function(){
    $http({
      method: 'POST',
      url: '/api/links',
      data: this.link
    })
    .then(function(res){
      console.log(res.status);
      $location.path('/links');
    })
    .catch(function(err){
      alert(err.status + ': ' + err.statusText);
    });
  };

  var getLinks = function(){
    $http({
      method: 'GET',
      url: '/api/links'
    }).then(function(res){
      this.data.links = res.data;
    }.bind(this));
  };

  return {
    addLink : addLink,
    getLinks : getLinks
  };

})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
