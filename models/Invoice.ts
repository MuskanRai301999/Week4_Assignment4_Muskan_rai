import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import {InvoiceLineItem} from './invoiceLineItem';

class Invoice extends Model {
  public id!: string;
  public totalInvoiceValue!: number;
  public sowId!: string;
  public status!: string;
  public invoiceSentOn!: Date;
  public customerId!: string;
  public paymentReceivedOn!: Date;
  public invoiceVersionNumber!: number;
}

Invoice.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  totalInvoiceValue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  sowId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoiceSentOn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentReceivedOn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  invoiceVersionNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Invoice',
  tableName: 'invoices',
  timestamps: false,
});

Invoice.hasMany(InvoiceLineItem, { foreignKey: 'invoiceId', as: 'lineItems' });
InvoiceLineItem.belongsTo(Invoice, { foreignKey: 'invoiceId', as: 'invoice' });

export default Invoice;

