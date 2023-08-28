import { useState } from 'react'
import { Box } from '@mui/material'
import WallpaperCard from './components/WallpaperCard/WallpaperCard'
import Sidebar from './components/Sidebar/Sidebar'
import WallpaperForm from './components/WallpaperForm/WallpaperForm'
import './App.css'
const drawerWidth = window.innerWidth * .25;
//on startup, data should be pulled from files to update what the weatherList should be
const weatherList = [
  {
    title: "Winter",
    description: "A super super long description that has  that has random words that repeat A s random words that repeat A super super long description that has random words that repeat A super super  that has random words that repeat A s long description that has random words that repeat A super super long description that has random words that repeat",
    wallpaperExampleImage: "image.jpeg",
    initialChecked: true,
    maxTemp: 90,
    minTemp: 60,
  },
  {
    title: "Summer",
    description: "Wallpapers for the summery vibes",
    wallpaperExampleImage: "image.jpeg",
    initialChecked: false,
    maxTemp: 90,
    minTemp: 60,
  },
  {
    title: "Fall",
    description: "Wallpapers for the fally vibes",
    wallpaperExampleImage: "image.jpeg",
    initialChecked: true,
    maxTemp: 90,
    minTemp: 60,
  },

]
function App() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box>
          <Sidebar setIndex={setIndex} barWidth={drawerWidth} tabList={weatherList}></Sidebar>
        </Box>
        <Box sx={{ mt: 5, display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <WallpaperForm currentCard={weatherList[index]}></WallpaperForm>
        </Box>
      </Box >
    </>
  )
}

export default App
