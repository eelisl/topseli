# Electricity Price Tracker & Sauna Time Recommender

An application that fetches hourly electricity prices, recommends the best time for a sauna session, and tracks electricity usage. It consists of a NodeJS backend and a React frontend.

## Backend Features

1. **Scheduled Data Fetching**:
   - Fetches electricity prices from a public API every day at 15:00 and stores the data in a PostgreSQL database.

2. **API Endpoints**:
   - `GET /prices/today`: Retrieve today's hourly electricity prices.
   - `GET /prices/tomorrow`: Retrieve tomorrow's hourly electricity prices.
   - `GET /sauna-recommendation`: Suggest the best time to go to the sauna based on electricity prices. On weekends, the timeframe is 14-19, and on weekdays, it is 17-19.
   - `POST /usage`: Add a new datapoint for the amount of electricity used at a specific time.
   - `GET /usage/costs`: Retrieve all datapoints with electricity usage and its cost.
   - `PUT /usage/:id`: Edit a specific electricity usage datapoint.
   - `DELETE /usage/:id`: Delete a specific electricity usage datapoint.

## Frontend Features

1. **Electricity Price Visualization**:
   - Display today's electricity prices as a line chart.
   - Display tomorrow's electricity prices as a line chart.
   - Switch views between today and tomorrow.

2. **Sauna Time Recommendation**:
   - Show the best time to go to the sauna today and tomorrow based on electricity prices and specified timeframes.

3. **User Interactions**:
   - Allow the user to input the amount of electricity used and the timeframe it was used.
   - Display electricity usage as a list of cards showing the amount used, the timeframe, and the cost.
   - Provide the option to delete specific electricity usage datapoints.

## Setup & Installation

### Backend

1. Navigate to the backend directory.
2. Install the required packages:
   ```bash
   npm install
   ```
3. Configure the PostgreSQL connection in config.js.
4. Run the backend server:
    ```bash
    npm start
    ```
### Frontend

1. Navigate to the frontend directory.
2. Install the required packages:
   ```bash
   npm install
   ```
3. Update the backend API endpoint in config.js.
4. Run the frontend server:
    ```bash
    npm start
    ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.