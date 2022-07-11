import React from 'react'
import {useAppDispatch, useAppSelector} from '../../../app/hooks'
import { incremented, amountAdded } from '../../../features/counter/counterSlice'

//MUI imports

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

function ReadingChallenge() {

    const currentDay= new Date()
    const currentYear= currentDay.getFullYear()

    const count = useAppSelector((state) => state.counter.value);
    
    const dispatch = useAppDispatch();

    function handleClick(){
        dispatch(amountAdded(3))
    }

  return (
    <section className='reading-challenge-section'>
        <h2>{currentYear} Reading challenge</h2>
        <img src="http://placekitten.com/150/240" alt="a book cover" />
        <Box sx={{ width: '10%' }}>
            <LinearProgress variant="determinate" value='50' />
        </Box>
        <p>
            <button onClick={handleClick}>
                count is: {count}
            </button>
        </p>
    </section>
  )
}

export default ReadingChallenge