export const NAME = 'name';
export const NUMBER = 'number';
export const nameValidation =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
export const numberValidation =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
export const validationNameMessage =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
export const validationNumberMessage =
  'number number must be digits and can contain spaces, dashes, parentheses and can start with +';
