import { Route, Routes } from "react-router-dom"
import PokeList from "./components/PokeList";
import Header from "./components/Header"
import Login from "./components/Login";

function App() {
  return (
    <div className="App" >
        <Header/>
        <Routes>
          <Route path="/PokeList" element={ <PokeList /> }/>
          <Route path="/" element={ <Login /> } />
        </Routes>
    </div>
  );
}

export default App;
