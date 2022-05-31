
  import { useForm } from "react-hook-form";
  

  const Search: React.FC<{setCity: (city: string)=>void}> = (props) => {
  
const {register, handleSubmit} = useForm();

const formHandler = (data: any) => {
  props.setCity(data.city);
};


    return (
      <div>
        <form onSubmit={handleSubmit(formHandler)}>
      
        <input {...register("city")} id='city' type="text" />
        <button type="submit">Search</button>
      </form>
      </div>
    );

  };
      
  export default Search;