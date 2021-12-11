import './App.css';
import SortingVisualizer from './components/SortingVisualizer'
import Footer from './components/Footer'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SortingVisualizer />
      <Footer />
    </div>
  );
}

export default App;
