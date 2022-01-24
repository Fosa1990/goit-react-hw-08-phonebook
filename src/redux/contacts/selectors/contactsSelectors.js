import memoize from 'memoizee';

export const getItems = state => state.items;
export const getFilter = state => state.filter;
export const isLoading = state => state.loading;

export const filteredContacts = memoize(state => {
  const contacts = getItems(state);
  const filter = getFilter(state);

  const getFiltredContacts = contacts => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(person =>
      person.name.toLowerCase().includes(lowerCaseFilter),
    );
  };
  return getFiltredContacts(contacts);
});
