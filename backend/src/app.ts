import cors from 'cors';
import express from 'express';
import { cronFetchPrices } from './helpers/cronJob';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your client's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
cronFetchPrices();
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
