import Route from 'react-router';
import Login from './components/LoginComponent';
export const AppRouting = (props)=>{
    return (
        <Route exact  path="/login" render={() => (
            props.isLoggedIn ? (
              <Redirect to={props.route}/>
            ) : (
              <Route path="/login">
                <Login onSubmit={this.s}/>
              </Route>
            )
          )}/>
    );
}