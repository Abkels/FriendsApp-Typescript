import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRobots, setSearchField } from '../ReduxState/searchRobotsSlice';
import Cardlist from '../components/Cardlist';
import tachyons from 'tachyons';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.searchRobots.robots);
  const searchField = useSelector((state) => state.searchRobots.searchField);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => dispatch(setRobots(users)))
      .catch((error) => {
        console.log('error fetching robots:', error);
      });
  }, [dispatch]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchField(event.target.value));
  };

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div>
      {!robots.length ? (
        <h1>Loading...</h1>
      ) : (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <Cardlist robots={filteredRobots} />
          </Scroll>
        </div>
      )}
    </div>
  );
};

export default App;
