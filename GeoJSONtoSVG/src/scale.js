
// Global parameters
// Dimensions of SVG to scale to
PARAMS = {
      WIDTH: 500,
      HEIGHT: 700,
      PADDING: 50
}


// Scale features from origin bounding box to SVG

const scaleFeatures = (features,BBOX) => features.map(feature => {
   
    try {
      const newObj = { ...feature };
      newObj.geometry.coordinates = feature.geometry.coordinates.map(c => c.map(polygon => scalePolygon(polygon,BBOX) ) )

      return newObj;
    
    } catch(e) {
      console.log('failed ',feature)
      return
    }

    
})


        
        

// Applies scale to polygon
const scalePolygon = (p,BBOX) => {
  // "p" can be an array of coordinate pairs
  if ( Array.isArray(p[0]) ) {
    return p.map(polygon => scaleCoordPair(polygon,BBOX)) 
  }
  // .. or a single coordinate pair
  return scaleCoordPair(p,BBOX)
}


// Applies scale to coordinate pair
const scaleCoordPair = (coordinatePair,BBOX) => {
        const [x, y] = coordinatePair
        return [scale(x, 'x',BBOX), scale(y, 'y',BBOX)]
    }

// Scales a single number to bounding box
const scale = (number, axis, BBOX) => {
    // SVG-origin is top-left, so turn map upside down
    let reversedNumber = axis === 'x' ? number : BBOX.minY + (BBOX.maxY - number);
  
    return axis === 'x'
      ? ((reversedNumber - BBOX.minX) / (BBOX.maxX - BBOX.minX)) * PARAMS.WIDTH +
          PARAMS.PADDING
      : ((reversedNumber - BBOX.minY) / (BBOX.maxY - BBOX.minY)) * PARAMS.HEIGHT +
          PARAMS.PADDING;
}
