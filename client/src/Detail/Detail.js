import Header from "./Header";
import Toolbar from "./Toolbar";
import MemberList from "./MemberList";
import ItemList from "./ItemList";
import DetailProvider from "./DetailProvider";

function Detail() {
  return (
    <div>
      <DetailProvider>
        <div style={{
          display: "grid",
          gridTemplateRows: "auto auto 1fr",
          gridTemplateColumns: "1fr 3fr",
          gap: "16px",
          padding: "8px",
          height: "100vh" 
        }}>
          <div style={{ gridColumn: "1 / -1" }}>
            <Header />
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <Toolbar />
          </div>

          <div style={{ 
            gridColumn: "1 / 2", 
            marginTop: "-15px",
            maxWidth: "400px" 
          }}>
            <MemberList />
          </div>

          <div style={{ 
            gridColumn: "2 / 3", 
            marginTop: "-15px"
          }}>
            <ItemList />
          </div>
        </div>
      </DetailProvider>
    </div>
  );
}

export default Detail;
