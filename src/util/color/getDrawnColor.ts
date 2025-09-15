import { getColor } from "./getColor";

export function getDrawnColor(lastColor: string) {
  let drawnColor = getColor();

  if (lastColor) {
    while (lastColor == drawnColor) {
      drawnColor = getColor();
    }
  }

  return drawnColor;
}
