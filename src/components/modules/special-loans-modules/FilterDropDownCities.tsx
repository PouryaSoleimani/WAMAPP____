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

const FilterDropDownCities = () => {

  const cityOptions = cities.map((city: { id: number; name: string }) => ({ id: city.id, name: city.name }));
  
  return (
		<Autocomplete
			dir="rtl"
			options={cityOptions}
			getOptionLabel={(option: { id: number; name: string }) => option.name}
			sx={{
				width: '100%',
				backgroundColor: 'var(--inner-box-bg)',
				borderRadius: '8px',
				margin: '16px 0',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				direction: 'rtl',
				'& .MuiOutlinedInput-root': { padding: '8px', fontSize: '16px', fontFamily: 'Vazir', color: 'var(--text-primary)', border: 'none', outline: 'none' },
				'& .MuiOutlinedInput-notchedOutline': { border: 'none' },
				'& .MuiInputLabel-root': { fontSize: '16px', fontFamily: 'Vazir', color: 'var(--text-primary)' },
				'& .MuiAutocomplete-popupIndicator': { color: 'var(--text-primary)' }
			}}
			renderInput={params => (
				<div dir="rtl">
					<TextField dir="rtl" {...params} label="انتخاب شهر" sx={{ '& .MuiInputLabel-root': { fontFamily: 'Vazir', fontSize: '16px', color: 'var(--text-primary)' }, '& input': { textAlign: 'right' } }} />
				</div>
			)}
			slotProps={{
				listbox: {
					sx: { backgroundColor: 'var(--inner-box-bg)', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: 'var(--text-primary)', fontFamily: 'Vazir', fontSize: '16px', direction: 'rtl', '& .MuiAutocomplete-option': { '&:hover': { backgroundColor: 'var(--inner-box-hover)' }, border: 'none', outline: 'none' } }
				}
			}}
		/>
	)
}

export default FilterDropDownCities