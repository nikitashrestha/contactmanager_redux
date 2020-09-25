import {
  GET_CONTACTS,
  ADD_CONTACTS,
  DEL_CONTACTS,
  GET_CONTACT,
  UPD_CONTACT,
} from "./types";
import axios from "axios";

export const getContact = () => async (dispatch) => {
  const res = await axios.get(
    "http://ec2-54-226-8-211.compute-1.amazonaws.com:5000/contacts",
    {
      headers: {
        "x-token": "fake-super-secret-token",
      },
    }
  );

  dispatch({
    type: GET_CONTACTS,
    payload: res.data,
  });
};

export const addContact = (contact) => async (dispatch) => {
  const res = await axios.post(
    "http://ec2-54-226-8-211.compute-1.amazonaws.com:5000/contacts/add",
    contact,
    {
      headers: {
        "x-token": "fake-super-secret-token",
      },
    }
  );
  dispatch({
    type: ADD_CONTACTS,
    payload: res.data,
  });
};

export const delContact = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `http://ec2-54-226-8-211.compute-1.amazonaws.com:5000/contacts/delete/${id}`,
      {
        headers: {
          "x-token": "fake-super-secret-token",
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
    `http://ec2-54-226-8-211.compute-1.amazonaws.com:5000/contacts/${id}`,
    {
      headers: {
        "x-token": "fake-super-secret-token",
      },
    }
  );

  dispatch({
    type: GET_CONTACT,
    payload: res.data,
  });
};

export const updContact = (id, contact) => async (dispatch) => {
  const res = await axios.put(
    `http://ec2-54-226-8-211.compute-1.amazonaws.com:5000/contacts/edit/${id}`,
    contact,
    {
      headers: {
        "x-token": "fake-super-secret-token",
      },
    }
  );

  dispatch({
    type: UPD_CONTACT,
    payload: res.data,
  });
};
