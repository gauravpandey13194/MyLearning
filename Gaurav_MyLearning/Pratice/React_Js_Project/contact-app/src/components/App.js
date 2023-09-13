import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
const contactsList = [
  {
    id: "1",
    name: "Gaurav",
    email: "gp@pandey.com"
  },
  {
    id: "2",
    name: "Pandey",
    email: "pg@gaurav.com"
  }
]



function App() {
  const LOCAL_STORAGE_KEY = "GauravContacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (c) => {
    console.log("contacts=>", c);
    setContacts([...contacts, c])
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts.length){
      setContacts(retriveContacts);
    }
  },[]);
  useEffect(() => {

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="ui container">
      <Header />
      <AddContact myAddContactHandler={addContactHandler} />
      <ContactList mycontacts={contacts} />
    </div>
  );
}
// function App() {
// const LOCAL_STORAGE_KEY = "contacts";
// console.log(LOCAL_STORAGE_KEY);
// const [contacts, setContacts] = useState(
//   JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
// );

// const addContactHandler = (contact) => {
//   console.log("contact => ", contact);
//   setContacts([...contacts, {id: uuid(), ...contact}]);
// };

// const removeContactHandler = (id) => {
//   const newContactList = contacts.filter((contact) => {
//     return contact.id !== id;
//   });
//   setContacts(newContactList);
// };

// useEffect(() => {
//   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   console.log(retriveContacts);
//   if(retriveContacts)
//     setContacts(retriveContacts);
// }, []);

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//     <div className="ui container">
//       <Header />
//       <AddContact myAddContactHandler={addContactHandler} />
//       <ContactList myContacts={contacts} getContactId={removeContactHandler} />
//     </div>
//   );
// }

export default App;
