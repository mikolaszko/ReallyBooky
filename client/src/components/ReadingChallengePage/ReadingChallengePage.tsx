import React from 'react'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {incremented} from '../../features/currentYearBTR/currentYearBookGoalSlice'

//Components
import Navbar from '../reusable/Navbar/Navbar'

function ReadingChallenge() {

  const {value} = useAppSelector((state) => state.bookGoal)
  const dispatch = useAppDispatch();

  function handleClick(){
    dispatch(incremented())
  }

  return (
    <div>
      <Navbar />
      <p>You want to read {value} books</p>
      <button onClick={handleClick}>
        Add up
      </button>
    </div>
  )
}

export default ReadingChallenge