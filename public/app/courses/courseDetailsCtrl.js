app.controller('CourseDetailsCtrl', function ($scope, $routeParams, CourseResource) {
    $scope.course = CourseResource.get({id: $routeParams.id});
});