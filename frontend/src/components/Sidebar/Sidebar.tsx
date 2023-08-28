import PropTypes from 'prop-types';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import WallpaperCard from '../WallpaperCard/WallpaperCard';
import Utilitybar from './Utilitybar/Utilitybar';
const Sidebar = ({ barWidth, tabList, setIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  //on double click, handler should pull data from files to have the form updated to previous values
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number,
  ) => {
    setSelectedIndex(index);
    setIndex(index);
  };
  return (

    <Drawer sx={{
      width: barWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
      },
    }}
      variant="permanent" anchor="left">
      <Utilitybar></Utilitybar>
      <List component="nav">
        {tabList.map((card, index) => (
          <ListItem sx={{ mt: '1' }} key={card.title} disablePadding>
            <ListItemButton disableRipple
              selected={selectedIndex === index}
              onDoubleClick={(event) => handleListItemClick(event, index)}
            >
              <WallpaperCard cardWidth={barWidth} title={card.title} description={card.description} wallpaperExampleImage={card.wallpaperExampleImage} initialChecked={card.checked}></WallpaperCard>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
Sidebar.propTypes = {
  barWidth: PropTypes.number,
  tabList: PropTypes.array,
  setIndex: PropTypes.func,
};
export default Sidebar;
