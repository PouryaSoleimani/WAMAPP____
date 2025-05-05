import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const cities = [
  { "id": 1, "name": "تهران" },
  { "id": 2, "name": "شیراز" },
  { "id": 3, "name": "اصفهان" },
  { "id": 4, "name": "مشهد" },
  { "id": 5, "name": "تبریز" },
  { "id": 6, "name": "کرمان" },
  { "id": 7, "name": "یزد" },
  { "id": 8, "name": "قم" },
  { "id": 9, "name": "کرج" },
  { "id": 10, "name": "اهواز" }
]

export type citiesArrayType = {id : number, name : string}[];

const FilterDropDown = () => {

  const cityOptions = cities.map((city: { id: number; name: string }) => ({ id: city.id, name: city.name }));
  
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