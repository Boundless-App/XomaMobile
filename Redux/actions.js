export const GET_COURSES = "GET_COURSES";

const COURSES_API = "https://thementoronline.org/api/v2/courses/";

export const getCourses = () => {
  try {
    return async (dispatch) => {
      const result = await fetch(COURSES_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_COURSES,
          payload: json,
        });
      } else {
        console.log("Unable to fetch!");
      }
    };
  } catch (err) {
    console.log(error);
  }
};
