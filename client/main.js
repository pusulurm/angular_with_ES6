import tableDemoModName from './table/demo/__module';
import angular from 'angular';

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ tableDemoModName ], {strictDi: true});
});