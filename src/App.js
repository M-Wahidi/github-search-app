import Header from "./components/Header";
import Search from "./components/Search";
import Content from "./components/Content";
function App() {
  return (
    <div className="App" style={{ background: "#141C2F", color: "#fff" }}>
      <div className="container">
        <Header />
        <Search />
        <Content />
      </div>
    </div>
  );
}

export default App;
