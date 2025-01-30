import type { WeatherResponse } from '../shema/weather'
import type { WeatherParams } from '../types/weather'
import { atom } from 'jotai'
import { zWeatherResponse } from '../shema/weather'

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

async function fetchWeather({ lat, lon }: WeatherParams): Promise<WeatherResponse | undefined> {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  const result = await fetch(url)
    .then(res => res.json())
    .catch(err => console.error(err))

  if (!result) {
    return undefined
  }

  try {
    const response = zWeatherResponse.safeParse(result)
    if (response.success === true) {
      return response.data
    }
    return undefined
  }
  catch (err) {
    console.error(err)
    return undefined
  }
}

export const weatherParamsAtom = atom<WeatherParams>({
  lat: 35,
  lon: 147,
})

export const weatherAtom = atom(async (get) => {
  const weatherParams = get(weatherParamsAtom)
  return await fetchWeather(weatherParams)
})
