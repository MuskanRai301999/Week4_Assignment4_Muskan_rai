import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import  Invoice  from './Invoice';

interface InvoiceLineItemAttributes {
  id: string;
  invoiceId: string;
  orderNo: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

interface InvoiceLineItemCreationAttributes
  extends Optional<InvoiceLineItemAttributes, 'id'> {}

export class InvoiceLineItem
  extends Model<InvoiceLineItemAttributes, InvoiceLineItemCreationAttributes>
  implements InvoiceLineItemAttributes
{
  public id!: string;
  public invoiceId!: string;
  public orderNo!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

InvoiceLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    invoiceId: {
      type: DataTypes.STRING,
      references: {
        model: Invoice,
        key: 'id',
      },
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
  },
  {
    sequelize,
    modelName: 'InvoiceLineItem',
    tableName: 'invoice_line_items',
  }
);

Invoice.hasMany(InvoiceLineItem, {
  sourceKey: 'id',
  foreignKey: 'invoiceId',
  as: 'lineItems',
});

InvoiceLineItem.belongsTo(Invoice, {
  foreignKey: 'invoiceId',
  as: 'invoice',
});
