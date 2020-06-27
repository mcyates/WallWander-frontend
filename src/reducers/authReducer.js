export default (state = [], action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...action,
      };
    case "REGISTER":
      return {
        ...action,
      };
    case "SETNAME":
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};
