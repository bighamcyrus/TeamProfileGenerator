const EmployeeClass = require("./class");

class Engineer extends EmployeeClass
{
    constructor(name, id, email, githubUser){
        super(name, id, email);

        this.githubUser= githubUser;
    }
    GitHubUser(){
        return this.GitHubUser;
    }
    getRole(){
        return "Engineer";
    }
}



module.exports = Engineer;