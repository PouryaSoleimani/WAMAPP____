import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const companies = [
  { "id": 21, "name": "بلوبانک" },
  { "id": 22, "name": "ویپاد" },
  { "id": 23, "name": "تارا" },
  { "id": 24, "name": "دیجی پی" },
  { "id": 25, "name": "اسنپ پی" },
]

export type citiesArrayType = {id : number, name : string}[];

const FilterDropDownCompany = () => {

  const companyOptions = companies.map((company: { id: number; name: string }) => ({ id: company.id, name: company.name }));
  
  return (
        <Autocomplete
            dir="rtl"
            options={companyOptions}
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
                    <TextField dir="rtl" {...params} label="انتخاب شرکت" sx={{ '& .MuiInputLabel-root': { fontFamily: 'Vazir', fontSize: '16px', color: 'var(--text-primary)' }, '& input': { textAlign: 'right' } }} />
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

export default FilterDropDownCompany