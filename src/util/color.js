export function getColors() {
  const colors = [
    "c19ee0",
    "fad643",
    "90caf9",
    "4ad66d",
    "f27f34",
    "a0f1da",
    "eacaae",
    "0377a8",
    "e76f51",
    "fbf8cc",
    "fde4cf",
    "ffcfd2",
    "f1c0e8",
    "cfbaf0",
    "a3c4f3",
    "90dbf4",
    "8eecf5",
    "98f5e1",
    "b9fbc0",
  ];

  return colors;
}

export function getColor() {
  const colors = getColors();

  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
