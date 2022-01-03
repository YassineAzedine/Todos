const db = require("../config/db");

class Project {
  constructor(title, body) {
    this.title = title;
    console.log("🚀 ~ file: project.js ~ line 6 ~ project ~ constructor ~ title", title)
    this.body = body;
    console.log("🚀 ~ file: project.js ~ line 7 ~ project ~ constructor ~ body", body)
  }

  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO projects(
      title,
      body,
      created_at
    )
    VALUES(
      '${this.title}',
      '${this.body}',
      '${createdAtDate}'
    )
    `;

    const newproject=  db.execute(sql);
  
    return  newproject;
  }

  static findAll() {
    let sql = "SELECT * FROM projects;";

    return db.execute(sql);
  } 

  static findById(id) {
    let sql = `SELECT * FROM projects WHERE id = ${id};`;

    return db.execute(sql);
  }
}


module.exports = Project;
