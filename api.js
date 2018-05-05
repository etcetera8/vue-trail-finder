import { key } from './apikey';

export const getTrails = async (lat, long, dist = 20) => {
  const response = await fetch(`https://www.mtbproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${dist}&maxResults=100&key=${key}`)
  const trails = await response.json();
  return trails;
}