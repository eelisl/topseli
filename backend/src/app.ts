import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.json());

// app.use('/api', routes);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
