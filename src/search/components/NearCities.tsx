import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export const NearCities = ({ results }: any) => {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', m: 2 }}>
      <Typography variant="h6" component="div" sx={{ bgcolor: 'background.paper', p: 2 }}>
        Ciudades cercanas a la que seleccionaste
      </Typography>
      <Paper elevation={3}>
        <List>
          {results.map((city: any, index: string) => (
            <ListItem key={index}>
              <ListItemText primary={city.name} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
}