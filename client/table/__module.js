import tableCss from './templates/table.css!css'
import table from './tableDirective';
import angular from 'angular';
import configHelper from './configHelper';
import tableDefaults from './tableDefaults';
import tablePagination from './paginationDirective';

let tableModName = "components.table";

angular.module(tableModName,[])
        .constant('tbl.defaults',tableDefaults)
        .service('tbl.configHelper',configHelper)
        .directive('pagination', tablePagination.PaginationFactory)
        .directive('myTable',table.tableFactory);

export default tableModName;