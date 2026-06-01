// Accessible drag keyboard handlers
export function handleBuilderKeyboard(event, item, moveCallback) {
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveCallback(item, -1);
  } else if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveCallback(item, 1);
  }
}
