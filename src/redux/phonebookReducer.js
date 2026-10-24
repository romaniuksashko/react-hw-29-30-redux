const savedContacts = localStorage.getItem("contacts")

const initialState = {
  contacts: savedContacts ? JSON.parse(savedContacts) : [
    {
      id: 1,
      name: "Alex",
      number: "2123-55-6565"
    }
  ],
  filter: ""
}

console.log(savedContacts);
console.log(JSON.parse(savedContacts));

const phonebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] }
    case "DELETE_CONTACT":
      return { ...state, contacts: state.contacts.filter((contact) => contact.id !== action.payload) }
    case "FILTER_CONTACT":
      return {...state, filter: action.payload}
    default:
      return state
  }
}

export default phonebookReducer