import { useState } from "react";
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { City } from "../../types/city";
import citiImage from '../../assets/city.png';

interface ResultProps {
  onCityClick: (city: City) => void;
  results?: City[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  margin: theme.spacing(3),
}));

export const Results = ({ onCityClick, results = [] }: ResultProps) => {

  const Row = ({ index, style }: ListChildComponentProps) => {
    const city: City = results[index];

    return (
      <ListItemButton
        data-testid={selectedIndex === index ? "selected-city" : undefined}
        style={style}
        selected={selectedIndex === index}
        onClick={(event) => handleListItemClick(index, city)}
      >
        <ListItemText primary={city.name} />
      </ListItemButton>
    );
  };

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    index: number,
    city: City
  ) => {
    onCityClick(city);
    setSelectedIndex(index);
  };

  return (
    <Item>
      {results.length === 0 && <Typography variant="body1">No results</Typography>}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <FixedSizeList
              height={400}
              width="100%"
              itemSize={46}
              itemCount={results.length}
            >
              {Row}
            </FixedSizeList>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={citiImage} alt="Descripción de la imagen" style={{ width: '400px', height: 'auto' }} />
        </Grid>
      </Grid>
    </Item>
  );
}
