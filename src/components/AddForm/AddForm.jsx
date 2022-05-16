
import { useDispatch, useSelector } from "react-redux";
import { useAddPhoneMutation } from '../../services/phonebookApi';
import { Button, Form } from 'react-bootstrap';
import '../../App.css'
import toast from 'react-hot-toast';
export default function AddFrom({phones}) {
  
  const [addPhone] = useAddPhoneMutation();
  const onSubmitFunc = (e) => {
    e.preventDefault()
    const checkDuplicate = phones.find(el =>
      el.name === e.target.name.value)
    
    !checkDuplicate ? addPhone({
      phone: e.target.phone.value,
      name: e.target.name.value
    })
      : toast.error('Already in phonebook')
  }
  return (
    <Form action="submit" onSubmit={onSubmitFunc}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          >Add</Button>
      </Form>
  )
}