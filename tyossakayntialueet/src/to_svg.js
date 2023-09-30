

// Turns a feature into a set of polygons (SVG)
const featureToSVG = feature => {
  let arr = [];
  let coords;

  if (Array.isArray(feature.geometry.coordinates[0])) {
  
    for (let i = 0; i < feature.geometry.coordinates.length; i++) {
      coords = feature.geometry.coordinates[i]
      const svgElem = createSVGelement(coords, feature.geometry.type,feature.properties)
      arr.push(svgElem)
    }
  } else {
    const svgElem = createSVGelement(feature.geometry.coordinates, feature.geometry.type,feature.properties)
    arr.push(svgElem)
  }
  return arr;
}

// Creates an SVG-element of type polygon from coordinates
const createSVGelement = (coordinates,geometryType,properties) => {

  
  const createElement = svgElementType => document.createElementNS( "http://www.w3.org/2000/svg", svgElementType )

  let svgElement

  if (geometryType==='Polygon' | geometryType=="MultiPolygon") {
    svgElement = createElement('polygon') 
    svgElement.setAttribute('points', coordinates);
  }      
  

  if (geometryType==='Point') {
    svgElement = createElement('circle') 
    svgElement.setAttribute('cx', coordinates[0]);
    svgElement.setAttribute('cy', coordinates[1]);
    svgElement.setAttribute('r', 5);
  
  }
  if (properties.color) {
    svgElement.setAttribute('fill',properties.color)
  }

  return svgElement

}

