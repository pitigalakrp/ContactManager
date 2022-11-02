import React,{useState,useEffect}from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)? localStorage.getItem(LOCAL_STORAGE_KEY) : [])
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    
    setContacts(newContactList);
  };

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element = {() => <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>} />
          <Route path='/add' element = { () => <AddContact addContactHandler = {addContactHandler}/> } />
        </Routes>
      </BrowserRouter>
      {/* <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> */}
      </div>
  );
}

export default App;
