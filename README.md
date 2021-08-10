# omni_employee_rest_api

For this task you are given a list of employees. 
The output of the task is an endpoint which returns the same list of employees but with the relevant country specific information added to each employee.

[Rest countries](https://restcountries.eu/) ****is a free API which you can use to retrieve details for a country.

The country specific information we would like to be present on an employee is:

- Full name of country
- Currency used in the country
- Language/s of the country
- Timezone/s for the country

We would also like employees in Asia and Europe regions to have an additional identifier which takes the form of `{firstName}{lastName}{dateOfBirth}`. 
So for Joe Bloggs born 19/07/1990 this would be `joebloggs19071990`. Please bear in mind that the regions which require this may change in the future. 

# Endpoints:

1) /api/v1/create: To create the employee details with all the country details
2) /api/v1/all: To fetch all the employee details saved in the DB
3) /api/v1/delete/{id}: To delete an employee with their 'id'

Technologies Used:
1) Node, Express, Typescript has been used to create this application.
2) I have also used the SQLite as DB (persistence layer) for the application.
3) Testing is done using Jest.

# How the approach has been taken:
1) From the problem statement, a employee details needs to have the country specific information, which can be fetched from an existing API.
2) I have used 'https://restcountries.eu/rest/v2/alpha/{code}' endpoint to fetch the country specific information based on the country code from the request.
As this gives us all the information which we need like: currencies, languages, timezones, full name of country, etc.
3) I have taken the region "Asia/Europe" from the environment variables. This needs to be present while running the application. This can be changed based on the requirements
as it is mentioned that the region might change.

# Sample .env file:
PORT=9000

REGIONS=Asia,Europe

# How to run the application:
App: npm run dev

Test: npm run test
