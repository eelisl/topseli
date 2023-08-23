# Töpseli - Electricity Price Tracker & Sauna Time Recommender

An application that fetches hourly electricity prices, recommends the best time for a sauna session, and tracks electricity usage. It consists of a NodeJS backend and a React frontend.

## Backend Features

1. **Scheduled Data Fetching**:
   - Fetches electricity prices from a public API every day at 15:00 and stores the data in a PostgreSQL database.

2. **API Endpoints**:
   - `GET /prices`: Retrieve all electricity prices.
   - `GET /prices/today`: Retrieve today's hourly electricity prices. **WIP**
   - `GET /prices/tomorrow`: Retrieve tomorrow's hourly electricity prices. **WIP**
   - `GET /sauna/best-time`: Suggest the best time to go to the sauna based on electricity prices. On weekends, the timeframe is 14-19, and on weekdays, it is 17-19.
   - `POST /usage`: Add a new datapoint for the amount of electricity used at a specific time. **WIP**
   - `GET /usage/costs`: Retrieve all datapoints with electricity usage and its cost. **WIP**
   - `PUT /usage/:id`: Edit a specific electricity usage datapoint. **WIP**
   - `DELETE /usage/:id`: Delete a specific electricity usage datapoint. **WIP**

3. **Prisma ORM**:
   - Uses Prisma ORM to interact with the PostgreSQL database.
   - Uses Prisma Migrate to manage database migrations.

4. **PostgreSQL Database**:
   - Uses a PostgreSQL database to store electricity prices and electricity usage data.

4. **Limitations**
    - API is NOT production ready. It is currentyl only meant for localhost usage and testing purposes.
    - API does not have any authentication or authorization.
    - API does not have any input validation.
## Frontend Features

1. **Electricity Price Visualization**:
   - Display today's electricity prices as a line chart.
   - Display tomorrow's electricity prices as a line chart.
   - Switch views between today and tomorrow.

2. **Sauna Time Recommendation**:
   - Show the best time to go to the sauna today and tomorrow based on electricity prices and specified timeframes.

3. **User Interactions (WIP)**:
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
3. Go to `/backend/db` directory and add DB_USER, DB_PASS, and DB_NAME environment variables to a .env file.
4. Add DATABASE_URL in the same .env file, which should be as follows: `postgresql://<DB_USER>:<DB_PASS>@localhost:5432/<DB_NAME>`
5. Start the PostgreSQL container:
    ```bash
    docker-compose up -d
    ```
6. Run the migrations:
   ```bash
   npx prisma migrate deploy
   ```
7. Generate Prisma Client:
    ```bash
    npx prisma generate
    ```
8. Build the backend:
    ```bash
    npm run build
    ```
9. Create new user in the database:
    ```bash
    npm run createuser
    ```
10. Run the backend server:
    ```bash
    npm start
    ```

**NOTE:** For more in-depth instructions on setting up the PostgreSQL database, please refer to the README.md file in the `/backend/db` directory.
### Frontend

1. Navigate to the frontend directory.
2. Install the required packages:
   ```bash
   npm install
   ```
3. Run the frontend server:
    ```bash
    npm start
    ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.