import { PhoneBook } from './components/phoneBook';
import './App.css';
import { Toaster } from 'react-hot-toast';
const App = () => {
  
  return (
    <div className="container">
      <Toaster />
      <PhoneBook />
    </div>
  )
}
export default App;
