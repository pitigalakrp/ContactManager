import React,{useState,useEffect}from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)? localStorage.getItem(LOCAL_STORAGE_KEY) : [])
  );

  const addContactHandler = (contact) => {
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
          <Route exact path='/' element = {<ContactList render = {(props) => ({...props})} contacts = {contacts} getContactId = {removeContactHandler}/>} />
          <Route exact path='/add' element = { <AddContact render = {(props) => ({...props})} addContactHandler = {addContactHandler}/> } />
          <Route exact path='/contact/{id}' element={<ContactDetail/>}/>
        </Routes>
      </BrowserRouter>
      {/* <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> */}
      </div>
  );
}

export default App;
