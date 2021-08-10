import request from "supertest";
import app from "../src/app";
import { EmployeeInstance } from "../src/api/model/employee";

describe("test create route", () => {
	const employee = {
		"firstName": "Lisa",
		"lastName": "Testora",
		"dateOfBirth": "11/07/1984",
		"jobTitle": "CTO",
		"company": "Test co",
		"country": "GBR",
		"id": "893665cb-a1ba-4596-9f51-889b2df02859",
		"countryFullName": "United Kingdom of Great Britain and Northern Ireland",
		"timezones": "[\"UTC-08:00\",\"UTC-05:00\",\"UTC-04:00\",\"UTC-03:00\",\"UTC-02:00\",\"UTC\",\"UTC+01:00\",\"UTC+02:00\",\"UTC+06:00\"]",
		"languages": "[{\"iso639_1\":\"en\",\"iso639_2\":\"eng\",\"name\":\"English\",\"nativeName\":\"English\"}]",
		"currencies": "[{\"code\":\"GBP\",\"name\":\"British pound\",\"symbol\":\"£\"}]",
		"region": "Europe",
		"uniqueIdentifier": "lisatestora11071984",
		"createdAt": "2021-08-10T16:38:02.690Z",
		"updatedAt": "2021-08-10T16:38:02.690Z"
	};

	test("Should have key record and msg when created", async () => {
		const mockCreateEmployee = jest.fn((): any => employee);
		jest
			.spyOn(EmployeeInstance, "create")
			.mockImplementation(() => mockCreateEmployee());

		const res = await request(app).post("/api/v1/create").send(employee);

		expect(mockCreateEmployee).toHaveBeenCalledTimes(0);
		expect(res.body).toHaveProperty("msg");
		expect(res.body).toHaveProperty("record");
	});

	test("Should handle exception", async () => {
		const mockCreateEmployee = jest.fn((): any => {
			throw "error";
		});
		jest
			.spyOn(EmployeeInstance, "create")
			.mockImplementation(() => mockCreateEmployee());

		const res = await request(app).post("/api/v1/create").send(employee);

		expect(mockCreateEmployee).toHaveBeenCalledTimes(0);
	});
});
