import { COLORS } from "./constants";

export function getColors(): Array<string> {
  return Object.values(COLORS);
}

export function getColor(): string {
  const colors = getColors();

  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}

export function getDrawnColor(lastColor: string) {
  let drawnColor = getColor();

  if (lastColor) {
    while (lastColor == drawnColor) {
      drawnColor = getColor();
    }
  }

  return drawnColor;
}
