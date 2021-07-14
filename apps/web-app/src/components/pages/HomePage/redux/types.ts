export interface IWheatherCityResponse {
  coord: {
    lon: number;
    lat: number;
  };
  wheather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grdn_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  rain: {
    '1h': number;
    '3h': number;
  };
  snow: {
    '1h': number;
    '3h': number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface IWheatherCity {
  id: number;
  name: string;
  country: string;
  status: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  indicators: Array<{
    title: string;
    value: string;
  }>;
  lastUpdate: number;
}
