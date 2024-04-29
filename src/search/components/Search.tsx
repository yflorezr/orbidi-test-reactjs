import React from 'react';
import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Paper from '@mui/material/Paper';
import TextField from "@mui/material/TextField";

interface SearchProps {
  callback: (term: string) => void;
  minChars?: number;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: theme.palette.text.secondary,
  margin: theme.spacing(3),
}));

export const Search = ({ callback, minChars = 1 }: SearchProps) => {

  const onSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    if (term.length >= minChars) {
      callback(term);
    }
  }

  return (
    <Item>
      <Typography variant="h6" className="search-title">Search for a city</Typography>
      <TextField
        id="search-input"
        inputProps={{
          'data-testid': 'search-input'
        }}
        className="text-input"
        type="text"
        placeholder="Search by city name"
        onChange={onSearchType}
      />
    </Item>
  );
}
