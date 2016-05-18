import tableCss from 'mainCss!css'
import table from './tableDirective';
import angular from 'angular';
import configHelper from './configHelper';
import tableDefaults from './tableDefaults';
import tablePagination from './paginationDirective';
import templatesModName from './templates/__module';

let tableModName = "components.table";

angular.module(tableModName,[templatesModName])
        .constant('tbl.defaults',tableDefaults)
        .service('tbl.configHelper',configHelper)
        .directive('pagination', tablePagination.PaginationFactory)
        .directive('myTable',table.tableFactory);

export default tableModName;