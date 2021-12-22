

// Turns a feature into a set of polygons (SVG)
const featureToSVG = feature => {
    let arr = [];
    let coords;
  
    for (let i = 0; i < feature.geometry.coordinates.length; i++) {
      coords = feature.geometry.coordinates[i]
      const svgElem = createSVGelement(coords)
      arr.push(svgElem)
    }
  
    return arr;
  }

// Creates an SVG-element of type polygon from coordinates
const createSVGelement = coordinates => {
    const svgElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      'polygon'
    );
    svgElement.setAttribute('points', coordinates);
    
    return svgElement;
}