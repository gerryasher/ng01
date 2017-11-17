(function () {

    // helps in JavaScipt error catching
    "use strict";

    angular.module('app')
        .factory('dataService', ['$q', '$http', dataService]);

    function dataService($q, $http) {

        function getAllIssues() {
            return $http({
                    method: 'GET',
                    url: 'https://jsonplaceholder.typicode.com/posts',
                    cache: true
                })
                .then(sendResponseData)
                .catch(sendGetDataError);
        }

        function sendResponseData(response) {
            return response.data;
        }

        function sendGetDataError(response) {
            return $q.reject('Error retrieving data. (HTTP status: ' + response.status + ')');
        }

        return {
            getAllIssues: getAllIssues
        };
    }

})();