import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useNotifications } from '../hooks/useNotifications';

export const Home = () => {
  const [plants, setPlants] = useLocalStorage('plants', []);
  useNotifications();

  const addPlant = () => {
    const name = prompt('Enter plant name');
    if (name) setPlants([...plants, { name, added: Date.now() }]);
  };

  return (
    <div>
      <button onClick={addPlant}>Add Plant</button>
      <ul>
        {plants.map((plant, i) => (
          <li key={i}>{plant.name} - {new Date(plant.added).toLocaleDateString()}</li>
        ))}
      </ul>
    </div>
  );
};
