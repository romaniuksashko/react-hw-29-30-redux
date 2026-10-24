export const addContact = (card) => {
  return {
    type: "ADD_CONTACT",
    payload: card
  }
}

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: id
  }
}

export const filterContact = (filter) => {
  return {
    type: "FILTER_CONTACT",
    payload: filter
  }
}