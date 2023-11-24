# RestCountries App

Welcome to the RestCountries App, a web application that enables users to input a country name and retrieve detailed information about that specific country. The project is neatly organised into backend and frontend components.
## Project Structure

```plaintext
/RestCountries-React
|-- /backend
|   |-- ... (Refer to backend README.md for details)
|
|-- /frontend
|   |-- ... (Refer to frontend README.md for details)
|
|-- README.md
|-- .gitignore
```


## Demo

Explore the [live demo](https://rest-countries-react-eta.vercel.app/)  to see the RestCountries App in action.
# Setup Guide
## Backend - RestCountries App

The backend, built with Node.js and Express, serves as an API to fetch country information from the [REST Countries API](https://restcountries.com/) .
### Getting Started
#### Prerequisites
- Node.js installed
- npm (Node Package Manager) installed
#### Installation 
1. Clone the repository:

```bash
git clone https://github.com/DylanL0ng/RestCountries-React.git
``` 
2. Move into the backend folder:

```bash
cd backend
``` 
3. Install dependencies:

```bash
npm install
``` 
4. Create a .env file in the root directory and add your environment variables:

```env
EXPRESS_PORT=3000
```



Adjust the EXPRESS_PORT value according to your preference.
### Usage

Start the server:

```bash
npm start
```



The API will be available at [http://localhost:3000/countries/:country](http://localhost:3000/countries/:country) , where :country is the name of the country you want information about.

Example:

```bash
curl http://localhost:3000/countries/usa
```


#### API Endpoint 
- **Path** : `/countries/:country` 
- **Method** : GET 
- **Parameters** :
- :country (string) - the name of the country to fetch information about. 
- **Response** :
- 200 OK: Returns information about the specified country in JSON format.
- 500 Internal Server Error: If there is an issue with the request or fetching data.
## Frontend - RestCountries App

The frontend allows users to input a country name and retrieve information from the backend API.
### Getting Started
#### Prerequisites
- Node.js installed
- npm (Node Package Manager) installed
#### Installation 
1. Clone the repository:

```bash
git clone https://github.com/DylanL0ng/RestCountries-React.git
``` 
2. Move into the frontend folder:

```bash
cd frontend
``` 
3. Install dependencies:

```bash
npm install
``` 
4. Create a .env file in the root directory of the frontend:

```bash
REACT_APP_EXPRESS_IP=localhost
REACT_APP_EXPRESS_PORT=3030
```



Adjust the values according to your backend server configuration.
### Usage

Start the frontend:

```bash
npm start
```



The application will be available at `http://localhost:3000`.
## Components
### `CountryCard.js` 
- Displays information about a country in a card format, including:
- Country Name
- Region
- Capital
- Population
### `Searchbar.js`
- Accepts user input for a country name and triggers the data retrieval process.

Feel free to explore, contribute, and enhance the RestCountries App!
