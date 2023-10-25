// Convenience

getBBOX = MAP => {
    return {
      minX: MAP.bbox[0],
      minY: MAP.bbox[1],
      maxX: MAP.bbox[2],
      maxY: MAP.bbox[3]
    }
}


const randomColor = () => {
    const ltrsnumbers = "0123456789abcdef";

    // Yummy!
    return Array(6).fill(0).reduce((p,c) => p + ltrsnumbers[Math.floor(Math.random() * 16)] ,"#");
}