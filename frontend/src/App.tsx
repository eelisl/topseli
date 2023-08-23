import axios from 'axios';
import React, { useEffect } from 'react';
import Chart from './components/Chart';
import SaunaTime from './components/SaunaTime';
import TimePicker from './components/TimePicker';
import './styles/index.scss';
import { BACKEND_URL } from './utils';

export interface HourlyPrice {
    id: number;
    datetime: string;
    hour?: number;
    year?: number;
    price: number;
    rank: number;
}

interface PricesByDate {
    today: HourlyPrice[];
    tomorrow: HourlyPrice[];
}

const App: React.FC = () => {

    const [hourlyPrices, setHourlyPrices] = React.useState<PricesByDate>({
        today: [],
        tomorrow: [],
    });

    const todayPricesMemoized = React.useMemo(() => {
        return hourlyPrices.today;
    }, [hourlyPrices.today])

    const tomorrowPricesMemoized = React.useMemo(() => {
        return hourlyPrices.tomorrow;
    }, [hourlyPrices.tomorrow])

    const maxPrice = React.useMemo(() => {
        const todayMax = Math.max(...todayPricesMemoized.map(hp => hp.price));
        const tomorrowMax = Math.max(...tomorrowPricesMemoized.map(hp => hp.price));
        return Math.max(todayMax, tomorrowMax);
    }, [todayPricesMemoized, tomorrowPricesMemoized])

    const [chosenChart, setChosenChart] = React.useState<"Tänään" | "Huomenna">('Tänään');

    useEffect(() => {
        const fetchHourlyPrices = async () => {
            const response = await axios.get(BACKEND_URL + '/api/prices/');
            return response.data;
        }

        fetchHourlyPrices().then(data => {

            const todayPrices: HourlyPrice[] = []
            const tomorrowPrices: HourlyPrice[] = []

            data.map((hourlyPrice: any) => {
                const date = new Date(hourlyPrice.datetime);
                const today = new Date();

                if (date.getDate() === today.getDate()) {
                    todayPrices.push({
                        id: hourlyPrice.id,
                        datetime: date.getDate() + '.' + (date.getMonth() + 1) + '.',
                        hour: date.getHours(),
                        year: date.getFullYear(),
                        price: hourlyPrice.price * 100,
                        rank: hourlyPrice.rank
                    })
                } else {
                    tomorrowPrices.push({
                        id: hourlyPrice.id,
                        datetime: date.getDate() + '.' + (date.getMonth() + 1) + '.',
                        hour: date.getHours(),
                        year: date.getFullYear(),
                        price: hourlyPrice.price * 100,
                        rank: hourlyPrice.rank
                    })
                }

            })

            setHourlyPrices({
                today: todayPrices,
                tomorrow: tomorrowPrices
            })

        }).catch(error => {
            console.log(error);
        });
    }, []);

    const handleChosenChart = (option: "Tänään" | "Huomenna") => {
        setChosenChart(option);
    }

    return (
        <div>
            <h1>Töpseli</h1>
            <p>Katso sähkötietoja ja paras aika saunoa!</p>
            <TimePicker tomorrowDisabled={hourlyPrices.tomorrow?.length <= 0} handleChange={handleChosenChart} />
            {chosenChart === 'Tänään'
                ? <Chart hourlyPrices={todayPricesMemoized} maxPrice={maxPrice} />
                : <Chart hourlyPrices={tomorrowPricesMemoized} maxPrice={maxPrice} />}
            <SaunaTime chosenChart={chosenChart} />
        </div>
    );
};

export default App;
