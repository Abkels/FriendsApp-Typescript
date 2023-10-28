import { setSearchField, setRobots } from "./searchRobotsSlice";

export const fetchRobots = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      dispatch(setRobots(users));
    } catch (error) {
      console.log('error fetching robots', error);
    }
  };
};
