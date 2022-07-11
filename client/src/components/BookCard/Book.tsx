import React from 'react'

function Book() {
  return (
    <section className='bookCard'>
      <section className='bookCard-top'>
        <img src="http://placekitten.com/150/240" alt="a book cover" />
      </section>
      <section className='bookCard-bottom'>
        <h4>Title</h4>
        <h5>Author</h5>
        <h6>Genre</h6>
      </section>
    </section>
  )
}

export default Book