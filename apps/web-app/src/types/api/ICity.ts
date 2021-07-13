export interface ICity {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  dt: number;
  wind: {
    speed: number;
    deg: number;
  };
  sys: {
    country: string;
  };
  rain: null;
  snow: null;
  clouds: {
    all: number;
  };
  wheather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
}
