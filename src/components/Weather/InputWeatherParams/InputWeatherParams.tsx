import type { ReactElement } from 'react'
import { weatherParamsAtom } from '@/stores/weatherAtom'
import { useAtom } from 'jotai'

export default function InputWeatherParams(): ReactElement {
  const [weatherParams, setWeatherParams] = useAtom(weatherParamsAtom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeatherParams({ ...weatherParams, [e.target.name]: e.target.value })
  }

  return (
    <>
      <input type="number" name="lat" onChange={handleChange} />
      <input type="number" name="lon" onChange={handleChange} />
    </>
  )
}
