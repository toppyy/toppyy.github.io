// Dimensions of SVG to scale to
const PARAMS = {
  WIDTH: 600,
  HEIGHT: 700,
  PADDING: 40
}


const getBBOX = MAP => {
  return {
    minX: MAP.bbox[0],
    minY: MAP.bbox[1],
    maxX: MAP.bbox[2],
    maxY: MAP.bbox[3]
  }
}


// Scale features from origin bounding box to SVG

const scaleFeatures = geojson => {
  
  const BBOX = getBBOX(geojson)

  const features = geojson.features//[geojson.features[0]]

  
  
  return features.map(feature => {
    
    try {
      const newObj = { ...feature }


      newObj.geometry.coordinates = scaleGeometry(feature.geometry.coordinates,BBOX)//feature.geometry.coordinates.map(geometry => scaleGeometry(geometry,BBOX) )
      

      return newObj;
    
    } catch(e) {
      console.log('failed ',e)
      return
    }

    
  })
}


// Applies scale to geometry
const scaleGeometry = (p,BBOX) => {
  // "p" can be an array of coordinate pairs
  if ( Array.isArray(p[0]) ) {
    return p.map(arr => scaleGeometry(arr,BBOX)) 
  }
  // .. or a single coordinate pair
  const scaledPair = scaleCoordPair(p,BBOX)
  
  return scaledPair
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

