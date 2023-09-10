import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSong,removeSong } from './store';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.songs;
  });
  const rand = Math.floor(Math.random() * 1000);

  const handleSubmit = () => {
    dispatch(addSong(`${rand}`));
  };

  const hadleDelete = (song) => {
   dispatch(removeSong(song))
  }
  return (
    <div>
      <button onClick={handleSubmit}> Add songs</button>
      <br />
      <br />

      {data.map((item) => {
        return (
          <div key={item}>
            <li>
              
              {item}
               <button onClick={()=>hadleDelete(item)}>X</button>
            </li>
          </div>
        );
      })}
    </div>
  );
};

export default App;
