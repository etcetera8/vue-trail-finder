export const cleanTrails = (array) => {
  return array.map(trail => {
    const { id, name, summary, difficulty, stars, location, url, imgMedium, length, ascent, latitude, longitude} = trail;
    return {
      id,
      name,
      summary,
      difficulty,
      stars,
      location,
      url,
      imgMedium,
      length,
      ascent,
      latitude,
      longitude
    }
  })
}