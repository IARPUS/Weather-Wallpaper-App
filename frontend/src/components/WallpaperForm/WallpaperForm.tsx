import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import MuiInput from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import WeatherSelection from './WeatherSelection/WeatherSelection';
import FileUploadZone from './FileUploadZone/FileUploadZone';
import { FilePondFile } from 'filepond';
import PropTypes from 'prop-types';
import './WallpaperForm.css'
const Input = styled(MuiInput)`
  width: 42px;
`;
const marks = [
  {
    value: 0,
    label: '0°',
  },
  {
    value: 10
  },
  {
    value: 20,
    label: '20°',
  },
  {
    value: 30
  },
  {
    value: 40,
    label: '40°',
  },
  {
    value: 50
  },
  {
    value: 60,
    label: '60°',
  },
  {
    value: 70
  },
  {
    value: 80,
    label: '80°',
  },
  {
    value: 90
  },
  {
    value: 100,
    label: '100°F',
  },
  {
    value: 110,
  }
];
interface CardData {
  name: string;
  weatherList: string[],
  checked: boolean,
  tempRange: number[],
}
const WallpaperForm = ({ currentCard }) => {
  const [formData, setFormData] = useState<CardData>({
    name: currentCard.title,
    weatherList: currentCard.weatherList,
    checked: currentCard.initialChecked,
    tempRange: [currentCard.minTemp, currentCard.maxTemp],
  })
  const [filesUploaded, setFilesUploaded] = useState<FilePondFile[]>([]);
  const [checked, setChecked] = useState([true, formData.checked]);
  const [temperature, setTemperature] = useState<number[]>([formData.tempRange[0], formData.tempRange[1]]);
  const handleChange = (property: keyof CardData, value: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };
  const handleOverallTempChange = (event: Event, newValue: number | number[]) => {
    setTemperature(newValue as number[]);
    setFormData((prevData) => ({
      ...prevData,
      tempRange: newValue as number[],
    }));
  };
  const handleMinTempChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [Number(event.target.value), temperature[1]];
    setTemperature(newValues);
    setFormData((prevData) => ({
      ...prevData,
      temperature: newValues,
    }));
  };
  const handleMaxTempChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [temperature[0], Number(event.target.value)];
    setTemperature(newValues);
    setFormData((prevData) => ({
      ...prevData,
      temperature: newValues,
    }));
  };
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
    setFormData((prevData) => ({
      ...prevData,
      checked: event.target.checked,
    }));
  };

  return (<>
    <button onClick={() => {
      console.log(formData);
      console.log(temperature);
    }}>Checker</button>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiTextField-root': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {/*Inputs for title*/}
      <Box sx={{ mx: 'auto', width: '90%' }}>
        <Typography variant="h6" >Name Group</Typography>
        <TextField
          required
          style={{ width: '100%' }}
          id="outlined-required"
          label="Required"
          defaultValue="My Group"
        />
      </Box>
      {/*Inputs for temperature & Weather*/}
      <Box sx={{ display: 'flex', height: 'max-content', width: '100%', mt: 3 }}>
        <Box>
          <Typography variant="h6" >Set Temperature Range</Typography>
          <Stack sx={{ mt: 2, height: 300 }} spacing={1} direction="row">
            <Slider
              min={0}
              max={110}
              orientation="vertical"
              getAriaLabel={() => 'Temperature range'}
              value={temperature}
              onChange={handleOverallTempChange}
              marks={marks}
              valueLabelDisplay="auto"
            />
          </Stack>
          <FormControlLabel
            label="Set temp automatically"
            control={<Checkbox checked={checked[1]} onChange={handleCheck} />}
            sx={{ mt: 3 }}
          />
        </Box>
        <Box sx={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', alignContent: 'flex-end' }}>
          <Input
            value={temperature[1]}
            size="small"
            onChange={handleMaxTempChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 110,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          <Input
            sx={{ mt: 25 }}
            value={temperature[0]}
            size="small"
            onChange={handleMinTempChange}
            inputProps={{
              step: 10,
              min: 0,
              max: 110,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Box>
        <Box sx={{ ml: 20 }}>
          <Typography variant="h6" >Select Weather Group</Typography>
          <WeatherSelection weatherList={formData.weatherList} setFormData={setFormData}></WeatherSelection>
        </Box>
      </Box>

      {/*Inputs for file upload*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ mt: 5 }} variant="h6" >Set Wallpapers</Typography>
        <Box sx={{ mt: 5, display: 'flex', alignItems: 'center' }}>
          <FileUploadZone filesUploaded={filesUploaded} setFilesUploaded={setFilesUploaded}></FileUploadZone>
        </Box>
      </Box>
    </Box >
  </>
  );
}

WallpaperForm.propTypes = {
  currentCard: PropTypes.object
};
export default WallpaperForm;