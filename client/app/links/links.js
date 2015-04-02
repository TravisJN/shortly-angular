angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  angular.extend($scope, Links);
  $scope.data = {};
  $scope.getLinks();
})
.directive('myShortLink', function() {
  return {
    // template: "<div class='info'> \
    //   <div class='visits'><span class='count'>{{link.visits}}</span>Visits</div> \
    //   <div class='title'>{{link.title}}</div> \
    //   <div class='original'>{{link.url}}</div> \
    //   <a href='/api/links/{{link.code}}'>{{link.base_url}}/{{link.code}}</a> \
    // </div>"
    template: "<p>5</p>"
  };
});