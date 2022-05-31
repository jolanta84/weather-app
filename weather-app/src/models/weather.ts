// export interface Weather {
//   id?: number;
//   main: string;
//   description: string;
//   icon: string;
// }

export interface Weather {
    id: number | undefined;
    main: string | undefined;
    description: string | undefined;
    icon: string | undefined;
  }
  
 
  export const weatherDefault = {
    id: undefined,
    main: undefined,
    description: undefined,
    icon: undefined,
  };
  
