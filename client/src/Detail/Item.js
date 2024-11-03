import { useState } from "react";

function Item({ data, handlerMap }) {
  const [value, setValue] = useState(data.name);

  return (
    <div style={{ display: "flex", alignItems: "center", minHeight: "40px", padding: "5px", borderBottom: "1px solid #ccc" }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handlerMap.updateItemName({ id: data.id, name: value })}
        style={{ flexGrow: 1, marginRight: "10px" }}
      />
      <button onClick={() => handlerMap.toggleResolveItem({ id: data.id })}>
        {data.resolved ? "unresolve" : "resolve"}
      </button>
      <button onClick={() => handlerMap.deleteItem({ id: data.id })}>
        ❌
      </button>
    </div>
  );
}

export default Item;

