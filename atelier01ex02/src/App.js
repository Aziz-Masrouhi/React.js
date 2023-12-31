import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <div id='c'>
      <Navigation />
      <Content />
      </div>
      <hr />
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;
