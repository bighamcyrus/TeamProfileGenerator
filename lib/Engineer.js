const Employee = require("./Employee");

class Engineer extends Employee
{
    constructor(name, id, email, githubUser){
        super(name, id, email);

        this.GitHubUser= githubUser;
    }
    getGithub(){
        return this.GitHubUser;
    }
    getRole(){
        return "Engineer";
    }
}



module.exports = Engineer;