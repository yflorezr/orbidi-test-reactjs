import Typography from '@mui/material/Typography';
import { SearchPage } from './search/pages/SearchPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h4" component="div" sx={{ p: 2, textAlign: 'center' }}> Encuentra mi lugar cercano </Typography>
      </header>
      <SearchPage />
    </div>
  );
}

export default App;
