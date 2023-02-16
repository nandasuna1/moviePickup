import { Actions } from './reducer';

const incrementing = () => {
  return async (dispatch) => {
    try {
      dispatch(Actions.increment());
    } catch (error) {
      const { message } = error;
      console.error(error);
      dispatch(Actions.error(message));
    }
  };
};

const decrementing = () => {
    return async (dispatch) => {
      try {
        dispatch(Actions.decrement());
      } catch (error) {
        const { message } = error;
        console.error(error);
        dispatch(Actions.error(message));
      }
    };
};

const incrementingByAmount = (amount) => {
    return async (dispatch) => {
        try {
        dispatch(Actions.incrementByAmount(amount));
        } catch (error) {
        const { message } = error;
        console.error(error);
        dispatch(Actions.error(message));
        }
    };
};


export default {
  incrementing,
  decrementing,
  incrementingByAmount,
  ...Actions,
};
