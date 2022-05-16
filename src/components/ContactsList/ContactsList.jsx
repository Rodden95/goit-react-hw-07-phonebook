import { useSelector, useDispatch } from "react-redux"

import { ListGroup } from 'react-bootstrap';
import '../../App.css';
import { useEffect } from "react";

export default function ContactsList({phones, onDelete}) {
 
  const filter = useSelector((state) => state.contacts.filter);
  const filtered = phones.filter(({ name }) =>
      name.toLowerCase().includes(filter))
  return (
    <ListGroup>
      <ul>
        {filtered.map(({ phone, name, id }) => 
          <li key={id} className="item">{name}: {phone} <button onClick={() => onDelete(id)}
            >X</button></li>
        )}
      </ul>
    </ListGroup>
  )
}