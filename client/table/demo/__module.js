import angular from 'angular';
import tableMod from '../__module';
import tableDemoController from './demoController';
import tableDataProvider from './tableDataProvider';

var tabelDemoModName = "table.demo";
angular.module(tabelDemoModName,[tableMod])
        .service('table.demo.dataProvider', tableDataProvider)    
        .controller('tableDemoController',tableDemoController);  

export default tabelDemoModName;