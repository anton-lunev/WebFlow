app.factory('auth', function ($http, $q, identity) {
    return {
        login: function (user) {
            var deferred = $q.defer();

            $http.post('/login', user).success(function (response) {
                if (response.success) {
                    identity.currentUser = response.user;
                    deferred.resolve(true);
                    console.log(response);
                } else {
                    deferred.resolve(false);
                }
            });

            return deferred.promise;
        },
        logout: function () {
            var deferred = $q.defer();

            $http.post('/logout').success(function (response) {
                identity.currentUser = undefined;
                deferred.resolve();
            });

            return deferred.promise;
        }
    }
});