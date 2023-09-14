
import { useState } from 'react';
import './App.css'
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  const [bookMarks , setBookMarks] = useState([]);
   
  const BookMarkAddButton = blog =>{
   const newBookMarks = [...bookMarks ,blog];
   setBookMarks(newBookMarks);
  }

  return (
    <>
      
      <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs BookMarkAddButton={BookMarkAddButton}></Blogs>
     <Bookmarks bookMarks={bookMarks}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
