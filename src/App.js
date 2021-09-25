import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import home from './Components/Home/Home';

function App() {
  return (<>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={home} />
        <Route component={() => {return <div>Forbidden Page</div>}}/>
      </Switch>
    </BrowserRouter>
  </>);
}

export default App;
