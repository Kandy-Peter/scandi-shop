export const initialState = {
  currency: '$'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'CHANGE_CURRENCY':
          return {
              ...state,
              currency: action.payload.symbol
          }
      default:
          return state;
  }
};
