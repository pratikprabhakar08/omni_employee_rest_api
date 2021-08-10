import { AxiosResponse } from "axios";
import { Request, Response } from "express";

import { v4 as uuidv4 } from "uuid";
import { EmployeeInstance } from "../model/employee";
import restEmployee from "../controller/restEmployee";

const dotenv = require('dotenv');
dotenv.config();

const regions: any = process.env.REGIONS;

interface CountryDetails {
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

class EmployeeController {
	async create(req: Request, res: Response) {
		let region: string = regions.split(",");
		let arrayToSave: Array<any> = [];

		for (let index = 0; index < req.body.length; index++) {
			let requestDetails: CountryDetails = req.body[index];
			let country: string = requestDetails['country'];
			let countryDetails: AxiosResponse = await restEmployee.getCountryDetails(country);
			let data: any = countryDetails.data;
			requestDetails.id = uuidv4();
			requestDetails.countryFullName = data.name;
			requestDetails.timezones = JSON.stringify(data.timezones);
			requestDetails.languages = JSON.stringify(data.languages);
			requestDetails.currencies = JSON.stringify(data.currencies);
			requestDetails.region = data.region;
			if (region.includes(data.region)) {
				const dob: string = requestDetails.dateOfBirth.replace(new RegExp("/", "g"), "");
				requestDetails.uniqueIdentifier = requestDetails.firstName.toLowerCase()
					+ requestDetails.lastName.toLowerCase()
					+ dob;
			}
			arrayToSave.push(requestDetails);
		}
		try {
			const record = await EmployeeInstance.bulkCreate(arrayToSave);
			return res.json({ record, msg: "Successfully create employee details" });
		} catch (e) {
			return res.json({ msg: "fail to create" + e, status: 500, route: "/create" });
		}

	}
	async readByID(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await EmployeeInstance.findOne({ where: { id } });
			return res.json(record);
		} catch (e) {
			return res.json({ msg: "fail to read", status: 500, route: "/read/:id" });
		}
	}
	async delete(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await EmployeeInstance.findOne({ where: { id } });

			if (!record) {
				return res.json({ msg: "Cannot find the record" });
			}

			const deletedRecord = await record.destroy();
			return res.json({ record: deletedRecord });
		} catch (e) {
			return res.json({
				msg: "fail to read",
				status: 500,
				route: "/delete/:id",
			});
		}
	}
	async findAll(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await EmployeeInstance.findAll();
			return res.json(record);
		} catch (e) {
			return res.json({ msg: "fail to read", status: 500, route: "/all" });
		}
	}
}

export default new EmployeeController();