const comments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.payload];
  }
};
