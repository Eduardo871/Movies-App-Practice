import { Route } from 'react-router-dom';
import './App.css';
import CardDetail from './pages/cardDetail/CardDetail';
import Home from './pages/home/Home';


function App() {
  return (
     
    <div className="App">
        <Route path="/" component={Home} exact/>
        <Route path="/CardDetail" component={CardDetail} exact/>
    </div>
  );
}

export default App;

