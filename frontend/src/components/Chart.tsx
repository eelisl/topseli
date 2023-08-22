import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { HourlyPrice } from '../App';

interface ChartProps {
    hourlyPrices: HourlyPrice[];
    maxPrice: number;
}

const Chart = ({ hourlyPrices, maxPrice }: ChartProps) => {
    const hours = hourlyPrices.map(hp => hp.hour);
    const prices = hourlyPrices.map(hp => hp.price)
    const hourNow = new Date().getHours();

    React.useEffect(() => {
        document.querySelector('.chart-wrapper')?.scrollTo({
            left: (hourNow - 1) * 100,
            behavior: 'smooth'
        });
    }, [hourNow])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        layout: {
            padding: {
                top: 10,
                right: 30,
                bottom: 10,
                left: 0
            }
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: Math.ceil(maxPrice + 10),
                title: {
                    display: document.body.clientWidth > 600 ? true : false,
                    text: 'Hinta (snt/KWh)'
                },
            },
            y1: {
                beginAtZero: true,
                position: 'right' as any,
                max: Math.ceil(maxPrice + 10),
                title: {
                    display: document.body.clientWidth > 600 ? true : false,
                    text: 'Hinta (snt/KWh)'
                },
            },
            x: {
                grid: {
                    display: false,
                },
            }
        },
    };

    const data = {
        labels: hours,
        datasets: [
            {
                label: 'Hourly Price',
                data: prices,
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                fill: false,
            },
        ],
    };



    // Inside your component's return statement:
    return (
        <div className="chart-wrapper">
            <div className="chart-container">

                <Line data={data} options={options} />
            </div>
        </div>
    )
}

export default Chart;