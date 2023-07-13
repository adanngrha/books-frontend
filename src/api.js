import axios from 'axios';

const BASE_URL = 'https://book-crud-service-6dmqxfovfq-et.a.run.app/api/';

export const register = (name, email, password, password_confirmation) => {
  return axios.post(`${BASE_URL}register`, {name, email, password, password_confirmation});
};

export const login = (email, password) => {
  return axios.post(`${BASE_URL}login`, {email, password});
};

export const logout = (token) => {
  return axios.delete(`${BASE_URL}user/logout`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
}

export const fetchBooks = (token) => {
  return axios.get(`${BASE_URL}books`, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
}

export const addBook = (token, isbn, title, subtitle, author, published, publisher, pages, description, website) => {
  const book = {
    isbn, title, subtitle, author, published, publisher, pages, description, website,
  }
  return axios.post(`${BASE_URL}books/add`, book, {
    headers: {
    'Authorization': `Bearer ${token}`
  }
  });
}

export const editBook = (token, id, isbn, title, subtitle, author, published, publisher, pages, description, website) => {
  const book = {
    isbn, title, subtitle, author, published, publisher, pages, description, website,
  }
  return axios.put(`${BASE_URL}books/${id}/edit`, book, {
    headers: {
    'Authorization': `Bearer ${token}`
  }
  });
}

export const fetchBook = (token, id) => {
  return axios.get(`${BASE_URL}books/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
      
    },
  });
}

export const deleteBook = (token, id) => {
  return axios.delete(`${BASE_URL}books/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    },
  });
}