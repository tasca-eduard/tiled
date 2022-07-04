export const randomBetween = (a: number, b: number) => {
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomColor = (firstColor: string, secondColor: string) => {
  const first = firstColor.toUpperCase().substring(1, secondColor.length);
  const second = secondColor.toUpperCase().substring(1, firstColor.length);
  const scale = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < first.length && i < second.length; i++) {
    const random = randomBetween(scale.indexOf(first[i]),
      scale.indexOf(second[i]));
    color += scale[random];
  };
  return color;
};