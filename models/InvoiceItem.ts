import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class InvoiceLineItem extends Model {
  public id!: string;
  public invoiceId!: string;
  public orderNo!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;
}

InvoiceLineItem.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  invoiceId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  particular: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  unit: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'InvoiceLineItem',
  tableName: 'invoice_line_items',
  timestamps: false,
});

export default InvoiceLineItem;
