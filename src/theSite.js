const siteCreator = (theAssignedTeam) => {

    function engineerHtml(data) {
        htmlData = []
        for (let i = 0; i < data.length; i++) {
            htmlData.push(`<div class="col container-md bg-secondary">
        <section>Name:${data[i].name}</section>
        <section>Job Title:Engineer</section>
        <section>id:${data[i].id}</section>
        <section>email:${data[i].email}</section>
        <section>Github account: ${data[i].githubUser}</section>
      </div>`)
            
        }
        return htmlData.join("")
    };
    function internHtml(data) {
        htmlData = []
        for (let i = 0; i < data.length; i++) {
            htmlData.push(`<div class="col container-md bg-secondary">
        <section>Name:${data[i].name}</section>
        <section>Job Title:Intern</section>
        <section>id:${data[i].id}</section>
        <section>email:${data[i].email}</section>
        <section>School: ${data[i].school}</section>
      </div>`)
            
        }
        return htmlData.join("")
    }
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </head>
    <body>
        <nav class="container-xl p-3 mb-2 bg-info text-dark text-center fs-2">Employee Team Generator</nav>
        <div class="container-lg">
            <div class="row">
              <div class="col container-md bg-primary">
                <section >Name:${theAssignedTeam[0].name}</section>
                <section>Job Title:Manager</section>
                <section>Id:${theAssignedTeam[0].id}</section>
                <section>email:${theAssignedTeam[0].email}</section>
                <section>Office Number:${theAssignedTeam[0].officeNumber}</section>
              </div>
             ${engineerHtml(theAssignedTeam.filter(emp => emp.getRole()==="Engineer"))}
             ${internHtml(theAssignedTeam.filter(emp => emp.getRole()==="Intern"))}
            </div>
          </div>
    
          <footer>THIS IS THE FOOTER</footer>
    
    </body>
    </html>`
}
module.exports = siteCreator