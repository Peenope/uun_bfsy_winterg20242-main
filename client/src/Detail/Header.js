import { useContext } from "react";
import { UserContext } from "../Users/UserProvider.js";

function Header() {
  const { userList, loggedInUser, setLoggedInUser } = useContext(UserContext);
  
  return (
    <div style={{
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between", 
      border: "5px solid black", 
      margin: "8px", 
      padding: "8px",
      backgroundColor: "yellow"
    }}>
      <div style={{ fontWeight: "bold", marginRight: "auto" }}>
        Shopping List
      </div>
      
      <div style={{ display: "flex", gap: "8px" }}>
        {userList.map((user) => (
          <button 
            key={user.id} 
            onClick={() => setLoggedInUser(user.id)}
            style={{
              padding: "4px 8px",
              border: "1px solid black",
              borderRadius: "4px",
              backgroundColor: user.id === loggedInUser ? "lightgray" : "white",
              color: user.id === loggedInUser ? "green" : "black",
              cursor: "pointer",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "lightblue"}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = user.id === loggedInUser ? "lightgray" : "white"}
          >
            {user.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header;
