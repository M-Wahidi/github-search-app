import Header from "./components/Header";
import Search from "./components/Search";
import Content from "./components/Content";
import { useSelector } from "react-redux";
function App() {
  const { theme } = useSelector((state) => state);

  return (
    <div
      className="App"
      style={{
        background: `${theme ? "#F5F8FF" : "#141C2F"}`,
        color: `${theme ? "#111" : "#fff"}`,
      }}
    >
      <div className="container">
        <Header />
        <Search />
        <Content />
      </div>
    </div>
  );
}

export default App;
