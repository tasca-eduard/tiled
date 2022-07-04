export default function Tile() {
  const TILES_PER_ROW = 30;
  const TILE_SIZE = TILES_PER_ROW ** 2;
  const MIN_COLOR = "#3cdf13";
  const MAX_COLOR = "#160d52";
  const SCALE = '0123456789ABCDEF';
  const root = document.documentElement;
  root.style.setProperty('--tiles-per-row', String(TILES_PER_ROW));

  const randomBetween = (a: number, b: number) => {
    const max = Math.max(a, b);
    const min = Math.min(a, b);

    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomColor = (firstColor: string, secondColor: string) => {
    const first = firstColor.toUpperCase().substring(1, secondColor.length);
    const second = secondColor.toUpperCase().substring(1, firstColor.length);
    let color = '#';

    for (let i = 0; i < first.length && i < second.length; i++) {
      const random = randomBetween(SCALE.indexOf(first[i]), SCALE.indexOf(second[i]));

      color += SCALE[random];
    };

    return color;
  };

  const renderTexture = () => {
    let elems = [];

    for (let i = 0; i < TILE_SIZE; i++) {
      const elem = <span 
        key={i} 
        className="texture" 
        style={{
        background: randomColor(MIN_COLOR, MAX_COLOR)
      }}></span>;

      elems.push(elem);
    }

    return elems;
  }

  return (
    <div className="tile">
      {renderTexture()}
    </div>
  )
}