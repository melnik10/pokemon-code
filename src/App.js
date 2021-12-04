import './App.css';
import LoginContainer from "./components/auth/Login/LoginContainer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import MainWindow from "./components/mainWindow/MainWindow";

const getObjectProperty = (obj, path, defaultValue = undefined) => {
    const arrPath = path.toString().split('.')
    if ((arrPath.length === 0) || (obj[arrPath[0]] === undefined)) {
        console.log(defaultValue)
        return
    }
    let resultValue = obj[arrPath[0]];
    for (let i = 1; i < arrPath.length; i++) {
        resultValue = resultValue[arrPath[i]]
        if (resultValue === undefined) {
            console.log(defaultValue)
            return
        }
    }
    console.log(resultValue)
}

const obj = {
    'pupa': {
        'lupa': {
            'beep': 'boop',
        },
        'foo': 'bar',
    },
}
getObjectProperty(obj, "pupa.lupa"); // > { beep : 'boop' }
getObjectProperty(obj, "pupa.lupa.beep"); // > 'boop'
getObjectProperty(obj, "pupa.foo"); // > 'bar'
getObjectProperty(obj, "pupa.ne.tuda"); // > undefined
getObjectProperty(obj, "pupa.ne.tuda", true); // > true
getObjectProperty(obj, "pupa.ne.tuda", "Default value"); // > 'Default value'
getObjectProperty(obj, 123, "Default value"); // > 'Default value'

const App = (props) => {
    return (
      <div className="App">
          <BrowserRouter>
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
