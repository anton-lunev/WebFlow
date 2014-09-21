app.controller('MainCtrl', function ($scope) {
    $scope.courses = [
        {name: 'JS for designers', featured: true, published: new Date('10/5/2014')},
        {name: '3 Simple Tips for Using UI-Router', featured: true, published: new Date('5/15/2014')},
        {name: 'The Many Ways To Use ngClass', featured: true, published: new Date('4/2/2014')},
        {name: 'Animating Angular Apps: ngShow and ngHide', featured: true, published: new Date('12/3/2014')},
        {name: 'Using GruntJS in a MEAN Stack Application', featured: true, published: new Date('6/14/2014')},
        {name: 'Declaring AngularJS Modules For Minification', featured: true, published: new Date('11/15/2014')},
        {name: 'AngularJS Multi-Step Form Using UI Router', featured: false, published: new Date('10/5/2014')},
        {name: 'Building Dynamic Angular Forms with ngRepeat and ngForm', featured: false, published: new Date('11/16/2014')},
        {name: 'ExpressJS 4.0: New Features and Upgrading from 3.0', featured: false, published: new Date('1/4/2014')},
        {name: 'AngularJS Routing Using UI-Router', featured: false, published: new Date('11/1/2014')},
        {name: 'Handling Checkboxes and Radio Buttons in Angular Forms', featured: false, published: new Date('9/9/2014')},
        {name: 'How To Use ngShow and ngHide', featured: true, published: new Date('12/12/2014')},
        {name: 'Pretty URLs in AngularJS: Removing the #', featured: true, published: new Date('12/7/2014')}
    ]
});