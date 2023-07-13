import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {

  return (
      <tr>
        <td>{props.index + 1}</td>
        <td>
          <Link to={`/detail-book/${props.id}`}>{props.title}</Link>
        </td>
        <td>{props.subtitle}</td>
        <td>{props.author}</td>
        <td>{props.pages}</td>
      </tr>
  );
};

export default Book;