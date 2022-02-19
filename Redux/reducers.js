import { GET_COURSES } from "./actions";

const initalState = {
  courses: [],
};

function userReducer(state = initalState, action) {
  switch (key) {
    case GET_COURSES:
      return { ...state, courses: action.payload };
    default:
      return state;
  }
}
