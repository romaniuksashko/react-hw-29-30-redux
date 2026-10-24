import { createStore, combineReducers } from "redux";
import phonebookReducer from "./phonebookReducer";

const rootReducer = combineReducers({
  phonebook: phonebookReducer
})

export const store = createStore(rootReducer)

let prevContacts = store.getState().phonebook.contacts

store.subscribe(() => {
  const currentContacts = store.getState().phonebook.contacts

  if (currentContacts !== prevContacts) {
    localStorage.setItem("contacts", JSON.stringify(currentContacts))

    prevContacts = currentContacts
  }
})