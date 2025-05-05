import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import db from './db/db.json'; 

export type citiesArrayType = [{id : number, name : string}];

const FilterDropDown = () => {

  const cityOptions: citiesArrayType = db.cities.map((city: { id: number; name: string }) => ({ id: city.id, name: city.name }));
  
  return (
    <Autocomplete
      disablePortal
      options={cityOptions}
      getOptionLabel={(option : {id : number , name: string}) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="شهر" />}
    />
  )
}

export default FilterDropDown