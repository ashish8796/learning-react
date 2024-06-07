import React, { memo } from "react";
import { FixedSizeList as List } from "react-window";

const items = Array.from({ length: 10000 }, (_, id) => ({
  id,
  name: `Item ${id}`,
}));

const ListItem = memo(({ index, style }) => {
  const item = items[index];
  return <div style={style}>{item.name}</div>;
});

export default function LargeList() {
  return (
    <div>
      <List itemCount={3} height={100} itemSize={70} width={300}>
        {ListItem}
      </List>
    </div>
  );
}
