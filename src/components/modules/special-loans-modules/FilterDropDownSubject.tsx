import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const subjects = [
  { "id": 1, "name": "تحصیلی" },
  { "id": 2, "name": "دوم" },
  { "id": 3, "name": "سوم" },
  { "id": 4, "name": "چهارم" },
  { "id": 5, "name": "پنجم" },
  { "id": 6, "name": "ششم" },
]

export type citiesArrayType = {id : number, name : string}[];

const FilterDropDownSubjects = () => {

  const cityOptions = subjects.map((subject: { id: number; name: string }) => ({ id: subject.id, name: subject.name }));
  
  return (

    <Autocomplete
      dir='rtl'
      options={cityOptions}
      getOptionLabel={(option: { id: number; name: string }) => option.name}
      sx={{
        width: '100%',
        backgroundColor: 'var(--inner-box-bg)',
        borderRadius: '8px',
        margin: '16px 0',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        direction: 'rtl', 
        '& .MuiOutlinedInput-root': { padding: '8px', fontSize: '14px', fontFamily: 'Vazir', color: 'var(--text-primary)', border: 'none', outline: 'none', },
        '& .MuiOutlinedInput-notchedOutline': { border: 'none', },
        '& .MuiInputLabel-root': { fontSize: '14px', fontFamily: 'Vazir', color: 'var(--text-secondary)', },
        '& .MuiAutocomplete-popupIndicator': { color: 'var(--text-primary)', },
      }}
      renderInput={(params) => (
        <div dir='rtl'>
          <TextField dir='rtl' {...params} label="انتخاب موضوع" sx={{ '& .MuiInputLabel-root': { fontFamily: 'Vazir', fontSize: '14px', color: 'var(--text-secondary)', }, '& input': { textAlign: 'right', }, }} />
        </div>
      )}
    />

  )
}

export default FilterDropDownSubjects