import angular from 'angular';

let templatesModName = "table.templates";
angular.module('table.templates', []);
angular.module('table.templates').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('client/table/templates/pagination.html',
    "\r" +
    "\n" +
    "<div class='pagination' ng-if='tableConfig.pagingConfig.enabled'>\r" +
    "\n" +
    "    <table class=\"pull-right\">\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <img class=\"img_enabled\" ng-click=\"tableConfig.showPrevPage()\" ng-if='tableConfig.pagingConfig.currentPage > 1' src='./client/table/assets/images/Previous.png' />\r" +
    "\n" +
    "                <img class=\"img_disabled\" ng-if='tableConfig.pagingConfig.currentPage === 1' src='./client/table/assets/images/disabled_Prev.png' />\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "            <td><div>Page {{tableConfig.pagingConfig.currentPage}} of {{tableConfig.pagingConfig.totalPages}}</div></td>\r" +
    "\n" +
    "            <td>\r" +
    "\n" +
    "                <img class=\"img_enabled\" ng-click=\"tableConfig.showNextPage()\" src='./client/table/assets/images/next.jpg' ng-if='tableConfig.pagingConfig.currentPage < tableConfig.pagingConfig.totalPages' />\r" +
    "\n" +
    "                <img class=\"img_disabled\" src='./client/table/assets/images/disabled_Next.png' ng-if='tableConfig.pagingConfig.currentPage === tableConfig.pagingConfig.totalPages' />\r" +
    "\n" +
    "            </td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('client/table/templates/table.html',
    "<div>\r" +
    "\n" +
    "    <table class=\"maintable\">\r" +
    "\n" +
    "        <thead>\r" +
    "\n" +
    "            <tr>\r" +
    "\n" +
    "                <th ng-repeat=\"colName in tableConfig.dataColumns\">{{colName.displayValue}}</th>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </thead>\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "            <tr ng-repeat=\"row in tableConfig.data\">\r" +
    "\n" +
    "                <td ng-repeat=\"dataField in tableConfig.dataColumns\">{{row[dataField.field]}}\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>    \r" +
    "\n" +
    "    <pagination pagingConfig=\"tableConfig.pagingConfig\"></pagination>\r" +
    "\n" +
    "</div>"
  );

}]);

export default templatesModName;