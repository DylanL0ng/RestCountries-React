# RestCountries App

This is a simple web application that allows users to input a country name and retrieve information about that country. The project is divided into frontend and backend components.

## Project Structure

```plaintext
/ReactCountries-React
|-- /backend
|   |-- ... (see backend README.md for details)
|
|-- /frontend
|   |-- ... (see frontend README.md for details)
|
|-- README.md
|-- .gitignore
```

## Demo

Check out the [live demo](https://rest-countries-react-eta.vercel.app/) to see the RestCountries App in action.


# Setup Guide

## Backend - RestCountries App

This is a Node.js and Express application that serves as an API to fetch information about countries using the [REST Countries API](https://restcountries.com/).

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

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

## Usage
Start the server:
```bash
npm start
```

The API will be available at http://localhost:3000/countries/:country where :country is the name of the country you want to retrieve information about.

Example:
```bash
curl http://localhost:3000/countries/usa
```

## API Endpoint
  `/countries/:country`
- **Method**: GET
- **Parameters**:
  - :country (string) - the name of the country to fetch information about.
- **Response**:
  - 200 OK: Returns information about the specified country in JSON format.
  - 500 Internal Server Error: If there is an issue with the request or fetching data.
