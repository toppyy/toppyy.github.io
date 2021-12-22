// Convinience

getBBOX = MAP => {
    return {
      minX: MAP.bbox[0],
      minY: MAP.bbox[1],
      maxX: MAP.bbox[2],
      maxY: MAP.bbox[3]
    }
  }