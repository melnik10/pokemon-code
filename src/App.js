import './App.css';
import LoginContainer from "./components/auth/Login/LoginContainer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import MainWindow from "./components/MainWindow/MainWindow";

const App = (props) => {
    return (
      <div className="App">
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Switch>
                  <Route exact path='/' render={() =>
                    props.isConfirm ? <Redirect to={'/app'}/> : <Redirect to={'/login'}/>}/>
                  <Route path='/login' render={() =>
                    props.isConfirm ? <Redirect to={'/app'}/> : <LoginContainer isConfirm={props.isConfirm}
                                                                                isAuth={props.isAuth}/>}/>
                  <Route path='/app' render={() => props.isConfirm ? <MainWindow/> : <Redirect to={'/login'}/>}/>
                  <Route path='*' render={() => <div>404 not found</div>}/>
              </Switch>
          </BrowserRouter>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isConfirm: state.auth.isConfirm
    }
}

export default connect(mapStateToProps, {})(App);
