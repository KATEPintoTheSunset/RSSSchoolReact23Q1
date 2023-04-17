export function choseImg(gender: string, race: string) {
  if (gender === 'Female') {
    return 'lady+lord+of+the+ring+princess+icon-1320166691779710425.png';
  } else {
    if (race === 'Elf') {
      return 'elf+legolas+lord+of+the+rings+icon-1320166687828491904.png';
    } else if (race === 'Human') {
      return 'lord+of+the+rings+old+man+wizard+icon-1320166692548419860.png';
    } else if (race === 'Hobbit') {
      return 'wood+frodo+lord+of+the+rings+wizard+icon-1320166691909096217.png';
    }
  }
  return 'gollum+lord+of+the+rings+smeagol+icon-1320166691516135718.png';
}
