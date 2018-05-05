export const cleanTrails = (array, diff) => {
  let trailArray = array.map(trail => {
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

  const filtered = trailArray.filter(trail => {
    return trail.difficulty === diff
  })
  console.log(filtered)
  return filtered;
}