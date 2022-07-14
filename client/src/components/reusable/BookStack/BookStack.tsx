import React from 'react';
import Stack from '@mui/material/Stack';
import BookCard from './BookCard/Book';

function BookStack() {
  return (
    <div>
      <Stack direction='row' spacing={2}>
        <BookCard />
        <BookCard />
        <BookCard />
      </Stack>
    </div>
  );
}

export default BookStack;
