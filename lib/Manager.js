const EmployeeClass = require("./class");

class Manager extends EmployeeClass
{
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber= officeNumber;
    }
    getOffice(){
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}


module.exports = Manager;
