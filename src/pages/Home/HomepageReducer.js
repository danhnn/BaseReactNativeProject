const INITIAL_STATE = {
  data:''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW_HOME_CONTENT":
      return {...state, data: 'HOME_CONTENT_UPDATED'};
    default:
      return state;
  }
}