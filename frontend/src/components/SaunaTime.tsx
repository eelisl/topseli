import axios from 'axios';
import React, { useEffect } from 'react';
import { BACKEND_URL } from '../utils';

interface SaunaTimeProps {
    chosenChart: "Tänään" | "Huomenna";
}

const SaunaTime = ({ chosenChart }: SaunaTimeProps) => {

    const [saunaTime, setSaunaTime] = React.useState<string>('');
    const [weekDay, setWeekDay] = React.useState<string>('');

    const saunaTimeMemoized = React.useMemo(() => {
        const hours = new Date(saunaTime).getUTCHours();

        return hours + ':00';
    }, [saunaTime])

    const weekDayMemoized = React.useMemo(() => {
        return weekDay;
    }, [weekDay])


    useEffect(() => {
        const fetchSaunaTime = async () => {
            try {
                const date = chosenChart === 'Tänään' ? new Date() : new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                const response = await axios.get(BACKEND_URL + `/api/sauna/best-time?date=${date}`);
                return response.data;
            } catch (error) {
                console.log(error);
            }
        }

        fetchSaunaTime().then(data => {
            if (data.bestTime !== saunaTime) {
                setSaunaTime(data.bestTime);
            }
            if (data.weekDay !== weekDay) {
                setWeekDay(data.weekDay);
            }
        }).catch(error => {
            console.log(error);
        })
    }, [chosenChart])

    return (
        <div>
            <h1>SaunaTime</h1>
            <p>Paras aika saunoa {chosenChart.toLowerCase()} ({weekDayMemoized}na) on {saunaTimeMemoized}!</p>
        </div>
    )
}

export default SaunaTime;