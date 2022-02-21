import './App.css';
import './normalize.css';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';

function App() {
    return ( 
      <div className='App'>
        <Billboard />
        <Navigation />
        <Titles />
        <Footer />
      </div>
    );
}

export default App;