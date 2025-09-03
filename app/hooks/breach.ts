import {useState, useCallback} from 'react'
import axios from 'axios'


export function useBreach () {
    const [breach, setbreach] = useState();

    const checkBreach = useCallback(async (mail: string) => {
        const response = await axios.get(`https://api.xposedornot.com/v1/breach-analytics?email=${mail}`);
        setbreach(response.data.ExposedBreaches?.breaches_details);
    }, []);

    return { breach, checkBreach };
}