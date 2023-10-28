import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchField } from '../ReduxState/searchRobotsSlice';

const SearchBox: React.FC = () => {
  const searchField = useSelector((state) => state.searchRobots.searchField);
  const dispatch = useDispatch();

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchField(event.target.value));
  };

  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        value={searchField}
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
