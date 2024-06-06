import React, { memo } from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 10000 }, (_, id) => ({
  id,
  name: `Item ${id}`,
}));

const ListItem = memo(({ index, style }) => {
  const item = items[index];
  console.log("Rendering item:", item.id);
  return <div style={style}>{item.name}</div>;
});

export default function LargeList() {
  console.log(items.length);

  return (
    <div>
      <List itemCount={items.length} height={1000} itemSize={70} width={300}>
        {ListItem}
      </List>
    </div>
  );
}
