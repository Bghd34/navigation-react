
import './App.css';
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Menu from "./Component/Menu";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ErrorPage from "./Component/ErrorPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route component={ErrorPage} />
            </Switch>

        </BrowserRouter>

    </div>
  );
}

export default App;
