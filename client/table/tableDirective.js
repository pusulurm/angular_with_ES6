var ConfigHelper = new WeakMap();

class table{
    constructor(configHelper){
        ConfigHelper.set(this, configHelper);
        this.scope = {
            config : '='
        };
        this.restrict = "E";
        this.replace = true;
        this.templateUrl = 'client/table/templates/table.html';
    }    
    link(scope, el, Attr){
        function loadTableData(config){
            config.query(config.params).then((tblData)=>{
                config.data = tblData.result;
                config.totalRecs = tblData.totalRecs;
                ConfigHelper.get(table.instance).determinePagingConfig(config);
                scope.$apply();
            });            
            
        }
        let self = this;
        scope.tableConfig = Object.assign({}, scope.config);
        scope.tableConfig.showNextPage = ()=> {
            scope.tableConfig.params.currentPage++;
            loadTableData(scope.tableConfig);
        }        
        scope.tableConfig.showPrevPage = ()=> {
            scope.tableConfig.params.currentPage--;
            loadTableData(scope.tableConfig);
        }
        let error = ConfigHelper.get(table.instance).validateConfig(scope.tableConfig);
        if(error) console.error(error);
        ConfigHelper.get(table.instance).determineConfig(scope.tableConfig);
        el.addClass(scope.tableConfig.className);
        el.attr('id', scope.tableConfig.id);
        loadTableData(scope.tableConfig);
    }
    static tableFactory(configHelper){
        table.instance = new table(configHelper);
        return table.instance;
    }
}
table.tableFactory.$inject = ['tbl.configHelper'];
export default table;