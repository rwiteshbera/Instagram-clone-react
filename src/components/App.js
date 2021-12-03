import '../styles/App.scss'
import Navigation from "../components/Navigation.js";
import Card from './Card';
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <Navigation />
        <main>
          <div className="container">
            <Card />
            <Sidebar />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;