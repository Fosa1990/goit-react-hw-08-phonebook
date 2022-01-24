import { createLogger } from 'redux-logger';

const logger = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
  colors: {
    title: action => 'orange',
    prevState: prevState => 'cyan',
    action: action => 'violet',
    nextState: nextState => 'lawngreen',
    error: (error, prevState) => 'red',
  },
});

export default logger;
