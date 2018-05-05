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

  const trailTypes = trailArray.reduce((obj, trail) => {
    if (!obj.easy) {
      obj.easy = [];
      obj.beginner = [];
      obj.intermediate = [];
      obj.advanced = [];
      obj.expert = [];
    }
    switch (trail.difficulty) {
      case 'green':
        obj.easy.push(trail)
        break;
      case 'greenBlue':
        obj.beginner.push(trail);
        break;
      case 'blue':
        obj.intermediate.push(trail);
        break;
      case 'blueBlack':
        obj.advanced.push(trail);
        break;
      case 'dblack':
        obj.expert.push(trail);
        break;
    }
    return obj
  }, {})

  return trailTypes;
}