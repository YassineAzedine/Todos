const db = require("../config/db");

class Task {
  constructor(title, description) {
    this.title = title;

    this.description = description;

  }

  save() {
    let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();

    let createdAtDate = `${yyyy}-${mm}-${dd}`;

    let sql = `
    INSERT INTO tasks(
      title,
      description,
      created_at
    )
    VALUES(
      '${this.title}',
      '${this.description}',
      '${createdAtDate}'
    )
    `;

    const newtask=  db.execute(sql);
    return  newtask;
  }

  static findAll() {
    let sql = "SELECT * FROM tasks;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM tasks WHERE id = ${id};`;

    return db.execute(sql);
  }
  static gettaskbyPro(id){

    try{
    let sql = `SELECT * FROM tasks WHERE project_id = ${id};`;

      return db.execute(sql);
    }catch{
 
    }
  }
}


module.exports = Task;
