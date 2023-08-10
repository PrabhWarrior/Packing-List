export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list🚀</em>
      </p>
    );

  // As the items list is updated, automatically these values are rendered: Derived States
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItems * 100) / numItems);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go✈️"
          : `👜 You have ${numItems} items of your list, and you already packed
        ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
