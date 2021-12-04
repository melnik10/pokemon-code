import './App.css';
import LoginContainer from "./components/auth/LoginContainer";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {setAuthUserAC} from "./redux/reducers/auth_reducer";

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
    debugger;
    return (
      <div className="App">
          <BrowserRouter>
              <Switch>
                  <Route exact path='/' render={() =>
                    props.isAuth ? <Redirect to={'/app'}/> : <Redirect to={'/login'}/>}/>
                  <Route path='/login' render={() =>
                    props.isAuth ? <Redirect to={'/app'}/> : <LoginContainer setAuthUser={props.setAuthUser}/>}/>
                  <Route path='/app' render={() => <div>APP</div>}/>
                  <Route path='*' render={() => <div>404 not found</div>}/>
              </Switch>
          </BrowserRouter>
      </div>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUser: () => dispatch(setAuthUserAC()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
