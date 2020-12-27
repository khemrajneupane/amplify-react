import './App.css';
import React, { useEffect, useState } from 'react';
import '@aws-amplify/ui/dist/style.css';
import { API } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react'
import { AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  const [bookName, setBookName] = useState('')
  const [isbn, setIsbn] = useState('')
  const [author, setAuthor] = useState('')
  useEffect(() => {
    API.get('booksapi', '/books/name')
    .then(responsedBooks => console.log(responsedBooks))
  },[])
  const handleSubmit = (e) => {
    e.preventDefault()
    API.post('booksapi','/books',{
      body: {
        name: bookName,
        author: 'William Shakespeare',
        isbn: isbn
      }
    } )
  }
  return (
    <div className="App">
      <h1>Register books info</h1>
      <form onSubmit = {handleSubmit}>
      <input placeholder= 'type book name' value = {bookName} onChange = {(e) => setBookName(e.target.value)} />
      <input placeholder= 'type book isbn' value = {isbn} onChange = {(e) => setIsbn(e.target.value)} />
      <input placeholder= 'type author name' value = {author} onChange = {(e) => setAuthor(e.target.value)} />
      <button>add</button>
      </form>
      <AmplifySignOut />
    </div>
  );
}


export default withAuthenticator(App)
