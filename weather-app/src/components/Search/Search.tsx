import { useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField/TextField";

const Search: React.FC<{ setCity: (city: string) => void }> = (props) => {
  
  const { register, handleSubmit } = useForm();

  const formHandler = (data: any) => {
    props.setCity(data.city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formHandler)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField {...register("city")} id="city" type="text" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="outlined">Search</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Search;
