import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const guarantees = [
  { "id": 1, "name": "همه موارد" },
  { "id": 2, "name": "چک صیادی" },
  { "id": 3, "name": "سفته" },
  { "id": 4, "name": "خط 0912" },
  { "id": 5, "name": "برگ سبز خودرو" },
]

export type citiesArrayType = {id : number, name : string}[];

const FilterDropDownGuarantee = () => {

  const cityOptions = guarantees.map((subject: { id: number; name: string }) => ({ id: subject.id, name: subject.name }));
  
  return (
		<Autocomplete
			dir="rtl"
			options={cityOptions}
			getOptionLabel={(option: { id: number; name: string }) => option.name}
			sx={{
				width: '100%',
				backgroundColor: 'var(--inner-box-bg)',
				borderRadius: '10px',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				direction: 'rtl',
				'& .MuiOutlinedInput-root': {
					fontSize: '16px',
					fontFamily: 'Vazir',
					color: 'var(--text-primary)',
					border: 'none',
					outline: 'none'
				},
				'& .MuiOutlinedInput-notchedOutline': { border: 'none' },
				'& .MuiInputLabel-root': { fontSize: '16px', fontFamily: 'Vazir', color: 'var(--text-primary)' },
				'& .MuiAutocomplete-popupIndicator': { color: 'var(--text-primary)' }
			}}
			renderInput={params => (
				<div dir="rtl">
					<TextField
						dir="rtl"
						{...params}
						label="انتخاب ضمانت"
						sx={{
							'& .MuiInputLabel-root': { fontFamily: 'Vazir', fontSize: '16px', color: 'var(--text-primary)' },
							'& input': { textAlign: 'right' }
						}}
					/>
				</div>
			)}
			slotProps={{
				listbox: {
					sx: {
						backgroundColor: 'var(--inner-box-bg)',
						borderRadius: '10px',
						boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
						color: 'var(--text-primary)',
						fontFamily: 'Vazir',
						fontSize: '16px',
						direction: 'rtl',
						'& .MuiAutocomplete-option': {
							'&:hover': { backgroundColor: 'var(--inner-box-hover)' },
							padding: '8px',
							border: 'none',
							outline: 'none',
						}
					}
				}
			}}
		/>
	)
}

export default FilterDropDownGuarantee;