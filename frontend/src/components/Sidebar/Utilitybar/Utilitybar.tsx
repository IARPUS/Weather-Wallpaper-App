import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
const Utilitybar = () => {
  return (
    <>
      <Box sx={{ padding: 2, paddingBottom: 0 }}>
        <Fab size="small" color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box >
    </>
  );
}

export default Utilitybar;