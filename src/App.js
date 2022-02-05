import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Box from './components/Box';
import Footer from './components/Footer';

import CreateArea from './components/CreateArea';
import { useEffect, useState } from 'react';
import React from 'react';
// import CreateArea from './components/CreateArea';


const getLocalItems = () => {
  let list = localStorage.getItem('lists');
  if(list)
  {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else
  {
    return [];
  }
}


function App() {

  const [notes,setNotes] = useState(getLocalItems());


  function addNote(newNote){
    setNotes(prevNotes => {
     return [...prevNotes,newNote]
    }
      );
  }
  

  function deleteItem(id) {
    setNotes(prevItems => {
      return prevItems.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    localStorage.setItem('lists',JSON.stringify(notes))
  },[notes]);


  return (
    <div>
    <Header />
    <CreateArea onAdd={addNote}/>
    
    {notes.map((noteItem,index) =>
    {
      return <Box
      key = {index}
      id = {index}
      title = {noteItem.title}
      content = {noteItem.content} 
      delete = {deleteItem}
      />

    })}

    <Footer />
    </div>
  );
}

export default App;
