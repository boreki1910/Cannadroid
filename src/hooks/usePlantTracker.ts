import { useLocalStorage } from './useLocalStorage';

export interface Plant {
  id: string;
  name: string;
  wateringLog: { date: string; amount: number }[];
}

export const usePlantTracker = () => {
  const [plants, setPlants] = useLocalStorage<Plant[]>('plant-tracker', []);

  const addPlant = (name: string) => {
    const newPlant: Plant = {
      id: crypto.randomUUID(),
      name,
      wateringLog: [],
    };
    setPlants([...plants, newPlant]);
  };

  const logWatering = (id: string, amount: number) => {
    setPlants(plants.map(plant =>
      plant.id === id
        ? {
            ...plant,
            wateringLog: [
              ...plant.wateringLog,
              { date: new Date().toISOString(), amount },
            ],
          }
        : plant
    ));
  };

  return { plants, addPlant, logWatering };
};
