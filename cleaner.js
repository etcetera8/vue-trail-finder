export const cleanTrails = (array) => {
  return array.map(trail => {
    const { id, name, summary, difficulty, stars, location, url, imgSmallMed, length, ascent, latitude, longitude} = trail;
    return {
      id,
      name,
      summary,
      difficulty,
      stars,
      location,
      url,
      imgSmallMed,
      length,
      ascent,
      latitude,
      longitude
    }
  })
}