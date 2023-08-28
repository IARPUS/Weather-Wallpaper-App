import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import PropTypes from 'prop-types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const weatherNames = [
  'Clear sky',
  'Partly cloudy',
  'Cloudy',
  'Rain',
  'Snow',
  'Fog',
  'Thunderstorm',
];

function getStyles(name: string, weatherName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      weatherName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const WeatherSelection = ({ weatherList, setFormData }) => {
  const theme = useTheme();
  const [weatherName, setweatherName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof weatherName>) => {
    const { target: { value }, } = event;
    setweatherName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
    setFormData((prevData) => ({
      ...prevData,
      weatherList: typeof value === 'string' ? value.split(',') : value
    }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="multiple-weather-chip">Select</InputLabel>
        <Select
          labelId="multiple-weather-chip"
          id="multiple-chip"
          multiple
          value={weatherName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {weatherNames.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, weatherName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
WeatherSelection.propTypes = {
  weatherList: PropTypes.array,
  setFormData: PropTypes.func
};
export default WeatherSelection;
