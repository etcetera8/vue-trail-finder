const getTrails = (lat, long, dist = 20, key) => {
  const response = fetch(`https://www.mtbproject.com/data/get-trails?lat=${lat}&lon=${long}&maxDistance=${dist}&key=${key}`)
}