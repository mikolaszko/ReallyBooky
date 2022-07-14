import React, { useEffect, useState } from 'react';
import { getBooks } from '../../../actions/books';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import BookStack from '../../reusable/BookStack/BookStack';
import { Form } from '../../reusable/Form/Form';

function MainContent() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [currentId, dispatch]);

  return (
    <div>
      <BookStack {...setCurrentId} />
      {/* <Form {...setCurrentId} /> */}
    </div>
  );
}

export default MainContent;
