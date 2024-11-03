import { useContext, useState } from "react";
import { DetailContext } from "./DetailProvider";
import { UserContext } from "../Users/UserProvider";
import AddMemberForm from "./AddMemberForm";
import Button from "react-bootstrap/esm/Button.js";
import Member from "./Member";

function MemberList() {
  const { data, handlerMap } = useContext(DetailContext);
  const { userMap, userList, loggedInUser } = useContext(UserContext);
  const [show, setShow] = useState(false);

  return (
    <div style={{ border: "5px solid black", margin: "8px", padding: "8px", backgroundColor: "yellow" }}>
      <AddMemberForm
        show={show}
        data={data}
        userList={userList}
        handlerMap={handlerMap}
        handleClose={() => setShow(false)}
      />

      <div>
        {data.owner === loggedInUser ? (
          <Button variant="success" onClick={() => setShow(true)} size="sm">
            <span style={{ marginRight: '5px', color: "black" }}>Add Member</span>
          </Button>
        ) : null}
      </div>

      <div>
        <Member memberId={data.owner} data={userMap[data.owner]} isOwner={true} />
        {data.memberList.map((memberId) => (
          <div key={memberId} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0' }}>
            <Member
              memberId={memberId}
              data={userMap[memberId]}
              handlerMap={handlerMap}
              showRemoveButton={loggedInUser === data.owner || memberId === loggedInUser}
            />
            { (loggedInUser === data.owner || memberId === loggedInUser) && (
              <button 
                onClick={() => handlerMap.removeMember({ memberId })} 
                >
                ❌
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberList;
