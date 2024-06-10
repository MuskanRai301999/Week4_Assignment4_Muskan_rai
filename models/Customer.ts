import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Client extends Model {
  public id!: string;
  public organizationId!: string;
  public msaValidFrom!: Date;
  public msaValidUpto!: Date;
  public legalName!: string;
  public ndaSignedOn!: Date;
  public shortName!: string;
  public ndaValidFrom!: Date;
  public ndaValidUpto!: Date;
  public addressId!: string;
  public displayName!: string;
  public isNDASigned!: boolean;
  public isMSASigned!: boolean;
  public msaSignedOn!: Date;
}

Client.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  organizationId: DataTypes.STRING,
  msaValidFrom: DataTypes.DATE,
  msaValidUpto: DataTypes.DATE,
  legalName: DataTypes.STRING,
  ndaSignedOn: DataTypes.DATE,
  shortName: DataTypes.STRING,
  ndaValidFrom: DataTypes.DATE,
  ndaValidUpto: DataTypes.DATE,
  addressId: DataTypes.STRING,
  displayName: DataTypes.STRING,
  isNDASigned: DataTypes.BOOLEAN,
  isMSASigned: DataTypes.BOOLEAN,
  msaSignedOn: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'Client',
  tableName: 'clients',
  timestamps: false,
});

export default Client;
