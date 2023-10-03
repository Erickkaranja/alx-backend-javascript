export default function updateUniqueItems(itemMap) {
  if (!(itemMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of itemMap) {
    if (quantity === 1) {
      itemMap.set(item, 100);
    }
  }

  return itemMap;
}
