function Member({ data, handlerMap, isOwner, showRemoveButton }) {
  return (
    <div>
      {data.name}
      {isOwner ? " [Owner] " : "  "}
     
    </div>
  );
}

export default Member;
