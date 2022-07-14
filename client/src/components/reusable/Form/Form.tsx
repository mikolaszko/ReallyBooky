import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';

import { addBook } from '../../../actions/books';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

export const Form = ({ currentId, setCurrentId }: any) => {
  const [bookData, setBookData] = useState({});
  // const post = useAppSelector((state) => (currentId ? state.bookGoal.find()));
  const dispatch = useAppDispatch();
};
