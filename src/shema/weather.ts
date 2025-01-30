import z from 'zod'

export const zWeatherResponse = z.object({
  coord: z.object({
    lon: z.number(),
    lat: z.number(),
  }),
  weather: z.array(
    z.object({
      id: z.number(),
      main: z.string(),
      description: z.string(),
      icon: z.string(),
    }),
  ),
  main: z.object({
    temp: z.number(),
    feels_like: z.number(),
    temp_min: z.number(),
    temp_max: z.number(),
    pressure: z.number(),
    humidity: z.number(),
    sea_level: z.number(),
    grnd_level: z.number(),
  }),
  visibility: z.number(),
  wind: z.object({
    speed: z.number(),
    deg: z.number(),
    gust: z.number(),
  }),
  clouds: z.object({
    all: z.number(),
  }),
  rain: z.object({
    '1h': z.number(),
  }).optional(),
})

export type WeatherResponse = z.infer<typeof zWeatherResponse>
