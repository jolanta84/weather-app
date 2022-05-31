import { useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import { useState, useRef } from "react";

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

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (inputRef.current?.value !== " ") {
      setInputState(true);
    } else setInputState(false);
  };

  const formHandler = (data: any): void => {
    props.setCity(data.city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(formHandler)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              {...register("city", { required: "Required" })}
              id="city"
              type="text"
              inputRef={inputRef}
              onChange={inputChangeHandler}
              variant="outlined"
              label="city"
              inputProps={{ style: { textAlign: "center" } }}
              helperText={
                errors.city?.type === "required"
                  ? "Enter city"
                  : ""
              }
            />
            
          </Grid>
          <Grid item xs={12}>
            <Button type="submit"            
           variant="contained"
           disabled={!inputState}
           >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Search;
