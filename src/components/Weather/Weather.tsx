import type { ReactElement } from 'react'
import { weatherAtom } from '@/stores/weatherAtom'
import { useAtomValue } from 'jotai'
import InputWeatherParams from './InputWeatherParams/InputWeatherParams'

export default function Weather(): ReactElement {
  const weather = useAtomValue(weatherAtom)

  return (
    <>
      <h1>Weather</h1>
      <InputWeatherParams />
      <p>{weather?.weather[0].main}</p>
    </>
  )
}
