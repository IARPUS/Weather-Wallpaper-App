import PropTypes from 'prop-types';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const cardHeight = window.innerHeight * .15;

const WallpaperCard = ({ cardWidth, title, description, wallpaperExampleImage, initialChecked, handleToggle }) => {
  const [checked, setChecked] = useState(initialChecked);
  const handleSwitchChange = () => {
    setChecked(!checked);
  };
  return (
    <Card sx={{
      width: cardWidth, height: cardHeight, display: 'flex', flexDirection: 'row'
    }}
      variant="outlined"
      style={{ backgroundImage: wallpaperExampleImage }}>
      <CardContent sx={{ display: 'flex', width: '80%', height: '100%', flexDirection: 'column' }}>
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="body1" sx={{
          overflow: 'hidden', width: '100%', height: '70%'
        }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignContent: 'flex-end' }}>
        <Switch
          checked={checked}
          onChange={handleSwitchChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </CardActions>
    </Card >
  );
};
WallpaperCard.propTypes = {
  cardWidth: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  wallpaperExampleImage: PropTypes.string,
  checked: PropTypes.bool,
  handleToggle: PropTypes.func
};
export default WallpaperCard;