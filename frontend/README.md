# Frontend - Country Information App

This is the frontend part of the Country Information App. It allows users to input a country name and retrieve information about that country using the backend API.

## Getting Started

### Prerequisites

- Node.js installed
- npm (Node Package Manager) installed

### Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/DylanL0ng/RestCountries-React.git
  ```

2. Navigate to the frontend directory:
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

## Usage
Start the frontend:
  ```bash
  npm start
  ```

The application will be available at `http://localhost:3000`.

## Folder Structure
/frontend
|-- /src
|   |-- /components
|       |-- CountryCard.css
|       |-- CountryCard.js
|       |-- Searchbar.css
|       |-- Searchbar.js
|   |-- App.js
|   |-- App.css
|   |-- ...

**`/src/components`**: Contains React components for the application.
**`App.js`**: Main component that handles user input, fetches data from the backend, and displays results.
**`App.css`**: Styles for the main component.

## Components

### `CountryCard.js`
- Displays information about a country in a card format such as:
  - **Country Name**
  - **Region**
  - **Capital**
  - **Population**

### `Searchbar.js`
- Accepts user input for a country name and triggers the data retrieval process.

