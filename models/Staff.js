import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js';

class Staff extends Model {}

Staff.init({
  matricule: { type: DataTypes.STRING, allowNull: false, primaryKey: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  userName: { type: DataTypes.STRING, allowNull: false, unique: true },
  roles: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  job: { type: DataTypes.STRING, allowNull: false }
}, {
  sequelize,
  modelName: 'Staff',
  tableName: 'staff',
  timestamps: false
});

export default Staff;