import ContactsList from "./components/ContactsList/ContactsList"
import Form from "./components/Form/Form"
import Filter from "./components/Filter/Filter"

import { useState } from "react"
import FormButton from "./components/FormButton/FormButton"

import "./App.css"

function App() {
  const [isForm, setIsForm] = useState(false)

  return (
    <>
      <Filter />
      <ContactsList />
      <FormButton setIsForm={setIsForm} />
      {isForm && <Form setIsForm={setIsForm} />}
    </>
  );
}

export default App
