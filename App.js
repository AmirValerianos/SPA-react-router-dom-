import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
