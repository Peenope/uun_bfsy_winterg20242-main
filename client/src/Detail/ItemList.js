import { useContext } from "react";
import { DetailContext } from "./DetailProvider";
import Item from "./Item";

function ItemList() {
  const { data, handlerMap, showResolved, toggleShowResolved } =
    useContext(DetailContext);

  return (
    <div style={{ border: "5px solid black", margin: "8px", padding: "8px", backgroundColor: "yellow" }}>
      <span>ItemList</span>
      <button style={{ marginLeft: "10px" }} onClick={() => handlerMap.addItem()}>add item</button>
      <button style={{ marginLeft: "10px" }} onClick={() => toggleShowResolved()}>
        {showResolved ? "not resolved only" : "all items"}
      </button>
      <div>
        {data.itemList.map((item) => (
          <Item key={item.id} data={item} handlerMap={handlerMap} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;

