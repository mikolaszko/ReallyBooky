import React from 'react'

//MUI imports

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

function ReadingChallenge() {

    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((oldProgress) => {
            
            const diff = Math.random() * 0;
            return Math.min(oldProgress + diff, 100);
        });
        }, 500);

        return () => {
        clearInterval(timer);
        };
    }, []);

    const currentDay= new Date()
    const currentYear= currentDay.getFullYear()

    

  return (
    <section className='reading-challenge-section'>
        <h2>{currentYear} Reading challenge</h2>
        <img src="http://placekitten.com/150/240" alt="a book cover" />
        <Box sx={{ width: '10%' }}>
            <LinearProgress variant="determinate" value='50' />
        </Box>
        

    </section>
  )
}

export default ReadingChallenge