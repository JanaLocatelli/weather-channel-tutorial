import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TextInput from './TextInput';

interface WeatherCondition {
    dayhour?: string,
    temp: {
        c: number,
        f?: number
    },
    precip?: string,
    humidity?: string,
    wind?: {
        km: number,
        mile: number
    },
    iconURL?: string,
    comment?: string
}

interface WeatherData {
    currentConditions: WeatherCondition,
  }

const AppBody = () => {
    const [weather, setWeather] = useState("Show Text Here");
    const [inputText, setInputText] = useState("Initial");

    const fetchWeatherData = (city: string) => {
        fetch(`https://weatherdbi.herokuapp.com/data/weather/${encodeURIComponent(city)}`).then((resp) => resp.json()).then((jsonResponse:WeatherData) => setWeather(jsonResponse.currentConditions.temp.f!.toString()));
    }

    return (
        <React.Fragment>
            <TextInput buttonText='Search' onClick={(text) => fetchWeatherData(text)} />
            <Box margin={1}>
                <Typography>{weather}</Typography>
            </Box>
        </React.Fragment>
    )
}

export default AppBody;