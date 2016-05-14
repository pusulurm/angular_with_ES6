class ConfigHelper{
    constructor(defaults){
        this.tableDefaults = defaults;
    }
    validateConfig(config){
        let error=null;
        if(!config){
            error = "table config can't be empty";
        }
        else if(!config.query || typeof(config.query) !== 'function'){
            error = "query method for table data is missing";
        }
        return error;
    }
    determineConfig(config){
        config.enablePaging = config.pagination != null ? config.pagination : this.tableDefaults.pagination;
        config.className = config.className != null ? config.className : this.tableDefaults.className;
        config.id = config.id != null ? config.className : this.tableDefaults.id;
        if(config.enablePaging){
            let params = {};
            params.pageSize = config.pageSize != null ? config.pageSize : this.tableDefaults.pageSize;  
            params.currentPage = 1;
            config.params = params;
        }        
    }
    determinePagingConfig(config){
        let pagingConfig = {};
        pagingConfig.enabled = config.enablePaging; 
        pagingConfig.pageiSize = config.params.pageSize;  
        pagingConfig.currentPage = config.params.currentPage;
        pagingConfig.totalPages = Math.floor(config.totalRecs/pagingConfig.pageiSize) + (config.data.length%pagingConfig.pageiSize > 0 ? 1 : 0);
        config.pagingConfig = pagingConfig;
    }
}

ConfigHelper.$inject = ['tbl.defaults'];

export default ConfigHelper;