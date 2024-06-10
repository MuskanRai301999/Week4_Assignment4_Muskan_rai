import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class SOWPaymentPlan extends Model {
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;
}

SOWPaymentPlan.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  sowId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plannedInvoiceDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  totalActualAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'SOWPaymentPlan',
  tableName: 'sow_payment_plans',
  timestamps: false,
});

export default SOWPaymentPlan;
