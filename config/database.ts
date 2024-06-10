import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'postgres', '54321', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;
