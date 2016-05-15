angular.module('table.demo', ['tableModule'])
    .controller('tableDemoController',['table.demo.dataProvider','$scope', function(dataProvider, $scope){
        $scope.config = dataProvider.getConfig();
    }])
    .factory('table.demo.dataProvider', function(){
        var getConfig = function(){
            var data = [
                                        {
                                            id : 1,
                                            name : "Murali",
                                            city : "Hyderabad",
                                            job : "Engineer",
                                            data : "Some thing"
                                        },
                                        {
                                            id : 2,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 3,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 4,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 5,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 6,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 7,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 8,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 9,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 10,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 11,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 12,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 13,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 14,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 15,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 16,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 17,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 18,
                                            name : "Andrew",
                                            city : "Singapore",
                                            job : "Architect",
                                            data : "thing"
                                        },
                                        {
                                            id : 19,
                                            name : "Peters",
                                            city : "Chicago",
                                            job : "CA",
                                            data : "nothing"
                                        },
                                        {
                                            id : 20,
                                            name : "Jag",
                                            city : "Noida",
                                            job : "Banker",
                                            data : "everything"
                                        }];
            let config = {};
            config.dataColumns = [
                                    {displayValue : "Id No", field : "id"},
                                    {displayValue : "Name", field : "name"},
                                    {displayValue : "City from", field : "city"},
                                    {displayValue : "Profession", field : "job"}
                                ];
            config.query = function(params){
                let result = [],
                    totalRecs = 0;
                    
                if(params){
                    totalRecs = data.length;
                    result = data.slice((params.currentPage - 1) * params.pageSize , ((params.currentPage - 1) * params.pageSize) + params.pageSize);
                }
                let promise = new Promise(function(resolve, reject){                       
                            resolve({
                                result : result,
                                totalRecs : totalRecs
                            });                       
                });        
                return promise;
            }
            return config;
        }
        return{
            getConfig : getConfig
        }
    })