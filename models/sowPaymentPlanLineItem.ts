import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../config/database';
import SOWPaymentPlan  from './SOWPaymentPlan';
import SOW  from './SOW';

interface SOWPaymentPlanLineItemAttributes {
  id: string;
  sowPaymentPlanId: string;
  sowId: string;
  orderId: string;
  particular: string;
  rate: number;
  unit: number;
  total: number;
}

interface SOWPaymentPlanLineItemCreationAttributes
  extends Optional<SOWPaymentPlanLineItemAttributes, 'id'> {}

export class SOWPaymentPlanLineItem
  extends Model<SOWPaymentPlanLineItemAttributes, SOWPaymentPlanLineItemCreationAttributes>
  implements SOWPaymentPlanLineItemAttributes
{
  public id!: string;
  public sowPaymentPlanId!: string;
  public sowId!: string;
  public orderId!: string;
  public particular!: string;
  public rate!: number;
  public unit!: number;
  public total!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SOWPaymentPlanLineItem.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    sowPaymentPlanId: {
      type: DataTypes.STRING,
      references: {
        model: SOWPaymentPlan,
        key: 'id',
      },
      allowNull: false,
    },
    sowId: {
      type: DataTypes.STRING,
      references: {
        model: SOW,
        key: 'id',
      },
      allowNull: false,
    },
    orderId: {
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
    modelName: 'SOWPaymentPlanLineItem',
    tableName: 'sow_payment_plan_line_items',
  }
);

SOWPaymentPlan.hasMany(SOWPaymentPlanLineItem, {
  sourceKey: 'id',
  foreignKey: 'sowPaymentPlanId',
  as: 'lineItems',
});

SOWPaymentPlanLineItem.belongsTo(SOWPaymentPlan, {
  foreignKey: 'sowPaymentPlanId',
  as: 'paymentPlan',
});

SOW.hasMany(SOWPaymentPlanLineItem, {
  sourceKey: 'id',
  foreignKey: 'sowId',
  as: 'sowLineItems',
});

SOWPaymentPlanLineItem.belongsTo(SOW, {
  foreignKey: 'sowId',
  as: 'sow',
});
