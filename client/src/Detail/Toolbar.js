import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import UpdateNameForm from "./UpdateNameForm";

function Toolbar() {
  const [show, setShow] = useState(false);
  const { data, handlerMap } = useContext(DetailContext);
  const { loggedInUser } = useContext(UserContext);

  return (
    <div style={{ border: "5px solid black", margin: "8px", padding: "8px", textAlign: "center" }}>
      <UpdateNameForm
        show={show}
        handleClose={() => setShow(false)}
        data={data}
        handlerMap={handlerMap}
      />
      <div style={{ fontWeight: "bold" }}>{data.name}</div>
      {loggedInUser === data.owner ? (
        <button onClick={() => setShow(true)}>update name</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Toolbar;
