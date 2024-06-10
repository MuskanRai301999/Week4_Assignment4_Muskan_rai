import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class SOW extends Model {
  public id!: string;
  public invoiceEmailAddresses!: string[];
  public customerId!: string;
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validityPeriod!: { validFrom: Date; validUpto: Date };
  public totalValue!: number;
  public currency!: string;
}

SOW.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  invoiceEmailAddresses: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  customerId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerPONumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerSONumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  validityPeriod: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  totalValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SOW',
  tableName: 'sows',
  timestamps: false,
});

export default SOW;
