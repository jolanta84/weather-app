import { useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import { useState, useRef } from "react";
import Typography from "@mui/material/Typography/Typography";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField/TextField";


const Search: React.FC<{ setCity: (city: string) => void }> = (props) => {
  const [inputState, setInputState] = useState<Boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

   
  const inputRef = useRef<null | HTMLInputElement>(null);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (inputRef.current?.value !== " ") {
      setInputState(true);
    } else setInputState(false);
  };

  const formHandler = (data: {[city: string]: any }): void => {
      console.log(data);
    props.setCity(data.city);
  };


  return (
    <form onSubmit={handleSubmit(formHandler)}>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h3">Check the weather</Typography>
        <Grid item xs={12}>
          <TextField
            {...register("city", { required: "Required" })}
            id="city"
            type="text"
            inputRef={inputRef}
            onChange={inputChangeHandler}
            variant="outlined"
            placeholder="enter the city"
            inputProps={{ style: { textAlign: "center" } }}
            helperText={errors.city?.type === "required" ? "Enter city" : ""}
            sx={{ input: { textAlign: "center" } }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" disabled={!inputState}>
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Search;
