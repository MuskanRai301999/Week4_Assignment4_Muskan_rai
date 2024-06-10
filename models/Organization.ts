import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Organization extends Model {
  public id!: string;
  public gstNo!: string;
  public panNo!: string;
  public legalOrganizationName!: string;
  public invoiceTemplateId!: string;
  public shortName!: string;
  public contactName!: string;
  public displayName!: string;
  public email!: string;
  public addressId!: string;
  public phone!: string;
}

Organization.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  gstNo: DataTypes.STRING,
  panNo: DataTypes.STRING,
  legalOrganizationName: DataTypes.STRING,
  invoiceTemplateId: DataTypes.STRING,
  shortName: DataTypes.STRING,
  contactName: DataTypes.STRING,
  displayName: DataTypes.STRING,
  email: DataTypes.STRING,
  addressId: DataTypes.STRING,
  phone: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'Organization',
  tableName: 'organizations',
  timestamps: false,
});

export default Organization;
