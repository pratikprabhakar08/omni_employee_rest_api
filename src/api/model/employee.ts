import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';

interface EmployeeAttributes {
	id: string;
	timezones: string;
	currencies: string;
	languages: string;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	jobTitle: string;
	company: string;
	country: string;
	region: string;
	countryFullName: string;
	uniqueIdentifier: string;
}

export class EmployeeInstance extends Model<EmployeeAttributes> {}

EmployeeInstance.init(
	{
		id: {
			type: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: true,
		},
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dateOfBirth: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		jobTitle: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		company: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		country: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		region: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		countryFullName: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		currencies: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		languages: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		timezones: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		uniqueIdentifier: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		sequelize: db,
		tableName: 'employeeDetails',
	}
);