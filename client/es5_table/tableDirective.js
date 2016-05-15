
var tableMod = angular.module("tableModule", [])
    .constant('tbl.defaults', {
        className : "myTable",
        id : 'myTable',
        pagination : true,
        pageSize : 5
    })
    .factory('tbl.configHelper',[ 'tbl.defaults', function(tableDefaults){
       var validateConfig = function(config){
            let error=null;
            if(!config){
                error = "table config can't be empty";
            }
            else if(!config.query || typeof(config.query) !== 'function'){
                error = "query method for table data is missing";
            }
            return error;
        }
        var determineConfig = function(config){
            config.enablePaging = config.pagination != null ? config.pagination : tableDefaults.pagination;
            config.className = config.className != null ? config.className : tableDefaults.className;
            config.id = config.id != null ? config.className : tableDefaults.id;
            if(config.enablePaging){
                let params = {};
                params.pageSize = config.pageSize != null ? config.pageSize : tableDefaults.pageSize;  
                params.currentPage = 1;
                config.params = params;
            }        
        }
        var determinePagingConfig = function(config){
            let pagingConfig = {};
            pagingConfig.enabled = config.enablePaging; 
            pagingConfig.pageiSize = config.params.pageSize;  
            pagingConfig.currentPage = config.params.currentPage;
            pagingConfig.totalPages = Math.floor(config.totalRecs/pagingConfig.pageiSize) + (config.data.length%pagingConfig.pageiSize > 0 ? 1 : 0);
            config.pagingConfig = pagingConfig;
        }
        return {
            validateConfig : validateConfig,
            determineConfig : determineConfig,
            determinePagingConfig : determinePagingConfig
        }
    }])
    .directive('myTable',['tbl.configHelper',function(configHelper){
        return{
            scope : {
                config : '='
            },
            restrict : 'E',
            replace :true,
            templateUrl : 'templates/table.html',
            link : function(scope, el, Attr){
                function loadTableData(config){
                    config.query(config.params).then((tblData)=>{
                        config.data = tblData.result;
                        config.totalRecs = tblData.totalRecs;
                        configHelper.determinePagingConfig(config);
                        scope.$apply();
                    });
                }                
                scope.tableConfig = angular.copy(scope.config);
                scope.tableConfig.showNextPage = function() {
                    scope.tableConfig.params.currentPage++;
                    loadTableData(scope.tableConfig);
                }        
                scope.tableConfig.showPrevPage = function() {
                    scope.tableConfig.params.currentPage--;
                    loadTableData(scope.tableConfig);
                }
                let error = configHelper.validateConfig(scope.tableConfig);
                if(error) console.error(error);
                configHelper.determineConfig(scope.tableConfig);
                el.addClass(scope.tableConfig.className);
                el.attr('id', scope.tableConfig.id);
                loadTableData(scope.tableConfig);
            }
        }
    }])
    .directive('pagination', [ function(){
        return  {
            restrict : 'E',
            replace : true,
            templateUrl : "templates/pagination.html"
        }
    }]);