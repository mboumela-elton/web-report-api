import { Sequelize } from 'sequelize';

class Database {
  constructor() {
    this.sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: 'web-report-api.db',
      logging: false
    });
  }

  getInstance() {
    return this.sequelize;
  }
}

const database = new Database();
export default database.getInstance();