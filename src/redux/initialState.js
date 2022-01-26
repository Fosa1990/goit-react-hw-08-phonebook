const initialState = {
  auth: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingUser: false,
    error: null,
  },
  contacts: {
    items: [],
    filter: '',
    loading: false,
    error: null,
  },
};

export default initialState;
