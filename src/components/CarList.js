import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const cars = useSelector(({ cars: { data, searchTerm } }) => {
    return data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const name = useSelector((state) => {
    return state.form.name;
  });

  const dispatch = useDispatch();

  return (
    <div>
      {cars.map((car) => {
        const isNameMatch = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
          <div
            key={car.id}
            style={{ fontWeight: isNameMatch ? 'bold' : 'normal' }}
          >
            <div>
              {car.name} - {car.cost}{' '}
              <button onClick={() => dispatch(removeCar({ id: car.id }))}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CarList;
