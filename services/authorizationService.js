class Authorization {
  constructor(db) {
    this.db = db;
  }

  async createUser(name, email, password, callback) {
    await this.db.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, password],
      callback
    );
  }

  async findUser(email, password, callback) {
    await this.db.query(
      "SELECT email FROM users WHERE password = ? and email = ?",
      [password, email],
      callback
    );
  }

  async getList(callback) {
    await this.db.query(
      "SELECT id, name, email, registr_date, last_seen_date, status FROM users",
      callback
    );
  }
}
module.exports = Authorization;
