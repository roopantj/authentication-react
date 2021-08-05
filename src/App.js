import Header from "./components/Header";
import Authentication from './components/Authentication';
import {Switch,Route, Redirect} from 'react-router';
import Dashboard from "./components/Dashboard";
import {useSelector} from 'react-redux';

function App() {
  const isLogged = useSelector(state=>state.auth.isLogged)
  console.log(isLogged)
  return (
    <div>
      <Header/>
      <Switch>
        <Route  path='/dashboard' render={()=>isLogged?<Dashboard/>:<Redirect to='/'/>}/>
        <Route  path='/' component={Authentication}/>
      </Switch>
    </div>
  );
}

export default App;
