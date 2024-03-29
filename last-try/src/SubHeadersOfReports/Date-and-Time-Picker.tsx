// import React, { useState } from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import Stack from '@mui/material/Stack';
// import TextField, { TextFieldProps } from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// const MaterialUIPickers: React.FC = () => {
//   const [value, setValue] = useState<Dayjs | null>(
//     dayjs('2014-08-18T21:11:54')
//   );

//   const handleChange = (newValue: Dayjs | null) => {
//     setValue(newValue);
//   };

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Stack spacing={3}>
//         <DesktopDatePicker
//           label="Date desktop"
//           value={value}
//           onChange={handleChange}
//           renderInput={(params: TextFieldProps) => <TextField {...params} />} {/* Use renderInput instead of inputComponent */}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }

// export default MaterialUIPickers;