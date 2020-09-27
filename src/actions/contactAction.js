import {
  GET_CONTACTS,
  ADD_CONTACTS,
  DEL_CONTACTS,
  GET_CONTACT,
  UPD_CONTACT,
} from "./types";
import axios from "axios";

import config from "./../config";

export const getContact = () => async (dispatch) => {
  const res = await axios.get(
    "https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts"
  );

  dispatch({
    type: GET_CONTACTS,
    payload: res.data.data,
  });
};

export const addContact = (contact) => async (dispatch) => {
  await axios.post(
    "https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts",
    contact,
    {
      headers: {
        "X-Api-Key": config.apiKey,
      },
    }
  );

  dispatch({
    type: ADD_CONTACTS,
    payload: contact,
  });
};

export const delContact = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts/${id}`,
      {
        headers: {
          "X-Api-Key": config.apiKey,
        },
      }
    );
    
    dispatch({
      type: DEL_CONTACTS,
      payload: id,
    });
  } catch (e) {
    dispatch({
      type: DEL_CONTACTS,
      payload: id,
    });
  }
};

export const getCont = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts/${id}`
  );

  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  });
};

export const updContact = (contact) => async (dispatch) => {
  await axios.put(
    `https://4o94882eoe.execute-api.us-east-1.amazonaws.com/uat/contacts/${contact.id}`,
    contact,
    {
      headers: {
        "X-Api-Key": config.apiKey,
      },
    }
  );

  dispatch({
    type: UPD_CONTACT,
    payload: contact,
  });
};
