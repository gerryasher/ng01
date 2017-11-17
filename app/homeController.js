(function () {

    // helps in JavaScipt error catching
    "use strict";

    angular.module('app')
        .controller('homeController', ['$http', '$log', 'dataService', 'gasherService', homeController]);

    function homeController($http, $log, dataService, gasherService) {
        var vm = this;

        vm.pageTitle = "Yippy";
        console.log('okay');

        
        dataService.getAllIssues()
            .then(getDataSuccess, null, getDataNotification)
            .catch(getDataError);

        function getDataSuccess(data) {
            vm.people = data;
        }

        function getDataError(reason) {
            $log.error(reason);
        }

        function getDataNotification(notification) {
            $log.info(notification);
        }
        
    }

})();