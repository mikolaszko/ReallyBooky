import React from 'react'
import './Sidebar.scss'

import ReadingChallenge from './ReadingChallenge/ReadingChallengeFeature'
import Friends from './Friends/Friends'


function Sidebar() {
  return (
    <section className='body-container'>
        <section className='sidebar'>
            <ReadingChallenge />
            {/* <Friends /> */}
        </section>


    </section>
  )
}

export default Sidebar