import {
  GET_CONTACTS,
  DEL_CONTACTS,
  ADD_CONTACTS,
  GET_CONTACT,
  UPD_CONTACT,
} from "../actions/types";

const initialState = {
  contacts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };

    case DEL_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    case UPD_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.email === action.payload.email
            ? (contact = action.payload)
            : contact
        ),
      };

    default:
      return state;
  }
}
