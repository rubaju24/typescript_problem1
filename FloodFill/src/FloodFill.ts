const floodfill = (
  img: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] => {
  let oldcolor = img[sr]![sc];

  if (oldcolor === newColor) return img;
  let rows = img.length;
  let cols = img[0]!.length;

  let queue: [number, number][] = [[sr, sc]];

  while (queue.length > 0) {
    let item = queue.shift();

    if (!item) continue;

    let [r, c] = item;

    if (img[r]![c] === oldcolor) {
      img[r]![c] = newColor;

      if (r > 0) queue.push([r - 1, c]);
      if (r < rows - 1) queue.push([r + 1, c]);
      if (c > 0) queue.push([r, c - 1]);
      if (c < cols - 1) queue.push([r, c + 1]);
    }
  }
  return img;
};
console.log(
  floodfill(
    [
      [1, 1, 1, 0],
      [0, 1, 1, 1],
      [1, 0, 1, 1],
    ],
    1,
    1,
    2,
  ),
);
