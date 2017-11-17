(function () {

    "use strict";

    angular.module('app')
        .factory('gasherService', [gasherService]);

    function gasherService() {
        console.log('gasherService');

        var assessment = {
            issues: [],
            environmentType: 1,
            rooms: []
        }

        return {
            assessment: assessment
        };
    }

})();
