class Pagination{
    constructor(){
        this.restrict = "E";
        this.replace= true;
        this.templateUrl = "client/table/templates/pagination.html"; 
    }
    static PaginationFactory(){
        Pagination.instance = new Pagination();
        return Pagination.instance;
    }
}

export default Pagination;