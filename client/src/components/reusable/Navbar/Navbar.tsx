import React from 'react'
import {useState, useEffect} from 'react'

//MUI imports
import SearchIcon from '@mui/icons-material/Search';
import { Toolbar, TextField, InputAdornment } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import './Navbar.scss'


function Navbar() {
  return (
    <section className='body-container'>
        <nav className='nav'>
          <div className='nav-left'>
            <Stack 
              spacing={2} 
              direction="row"
              className='nav-left-stack'
              >
                  <a className='logo links' href="/">Logo</a>
                  <a href='/' className='links'>Home</a>
                  <a href='/challenge' className='links'>Reading Challenge</a>
                  <a href='/community' className='links'>Community</a>
            </Stack>
          </div>
          <div className='nav-right'>
              <Stack spacing={2} direction="row" className='nav-right-stack'>
                <Toolbar className='search-toolbar'>
                  <TextField
                      className='search-container'
                      variant="outlined"
                      id="input-with-icon-textfield"
                      // onChange={handleOnSearch}
                      label="Look for a book!"
                      // value={query}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                </Toolbar>
                <span className='username'>mikolaszko</span>
                <Avatar>H</Avatar>
              </Stack>
            </div>
        </nav>

    </section>
  )
}

export default Navbar