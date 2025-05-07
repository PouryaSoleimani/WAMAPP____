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

export type subjectsArrayType = {id : number, name : string}[];

const FilterDropDownSubjects = () => {

  const subjectOptions = subjects.map((subject: { id: number; name: string }) => ({ id: subject.id, name: subject.name }));
  
  return (
		<Autocomplete
			dir="rtl"
			options={subjectOptions}
			getOptionLabel={(option: { id: number; name: string }) => option.name}
			sx={{
				width: '100%',
				backgroundColor: 'var(--inner-box-bg)',
				borderRadius: '8px',
				margin: '16px 0',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				direction: 'rtl',
				'& .MuiOutlinedInput-root': {
					padding: '8px',
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
						label="انتخاب موضوع"
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
							outline: 'none'
						}
					}
				}
			}}
		/>
	)
}

export default FilterDropDownSubjects