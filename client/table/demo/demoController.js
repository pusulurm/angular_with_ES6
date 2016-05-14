class tableDemoCtrl{
    constructor(dataProvider){
         var self = this;
         self.config = dataProvider.getConfig();
    }
}
tableDemoCtrl.$inject = ['table.demo.dataProvider'];
export default tableDemoCtrl;