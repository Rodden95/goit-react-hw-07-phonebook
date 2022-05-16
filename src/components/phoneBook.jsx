import AddFrom from "./AddForm/AddForm";
import ContactsList from "./ContactsList/ContactsList";
import ContactsFilter from "./ContactsFilter/ContactsFilter";
import { useGetContactByNameQuery, useDeletePhoneMutation } from '../services/phonebookApi';



export const PhoneBook = () => {
  const { data, isLoading } = useGetContactByNameQuery();
  const [deletePhone] = useDeletePhoneMutation();
  
  return (
    <div>
      {data && <AddFrom phones={data}/>}
      <ContactsFilter />
      {data && <ContactsList phones={data} onDelete={ deletePhone}/>}
      </div>
  )
}