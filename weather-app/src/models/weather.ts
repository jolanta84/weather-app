export interface Weather {
    id?: number;
    main: string;
    description: string;
    icon: string;
    
}

export interface Temperature {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_max: number;
    temp_min: number;
  }
