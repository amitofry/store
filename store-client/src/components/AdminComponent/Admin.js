import React, { Component }  from 'react';

class Admin extends Component {
    constructor(props){
        super(props);

        this.state = {
          users : [],
          usersToShow : []
        };
             
    }

  componentDidMount()
  {
    fetch('http://localhost:3001/getUsers')
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          response.json().then((data) => {
            this.setState({
              users : data,
              usersToShow : data
            });
          });
        }
      )
      .catch((err) => {
        console.log('Fetch Error :-S', err);
    });
  }

  onChooseUser = (userName) =>{
    if(userName === "all-users"){
      this.setState({
        usersToShow : this.state.users
      })
    }
    else{
      let indexUser = this.state.users.findIndex(user => user.userName === userName)
      this.setState({
        usersToShow : [this.state.users[indexUser]]
      })
    }
  }

  onDeleteUser = (userName) => {    
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3001/DeleteUser";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);           
            if (response.isUserDeleted) {
              console.log('success');
              this.setState({ 
                users: response.users,
                usersToShow : response.users              
              });
            } else {
              console.log('failure');
            }
            console.log("onLoginSubmit - User Name : ",this.state.userName)            
        }
    };    
    const data = JSON.stringify({
      userName
    });
    xhr.send(data);
  }


    render() {
      return (
        <div>
          <h1>Admin!</h1>
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Choose User
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" onClick = {() => this.onChooseUser("all-users")}href="#">All Users</a> 
            {this.state.users.map((user,index) => {
            return (
              <div>
                <a class="dropdown-item" onClick = {() => this.onChooseUser(user.userName)}href="#">{user.userName}</a>
              </div>
            )
            }
            )}
            </div>
          </div>
          <p/>
          <p/>
          {this.state.usersToShow.map((user,index) => {
            return (
              <div>
                <h4>User {index+1}</h4>
                <p>User Name : {user.userName}</p>
                <p>User Password : {user.password}</p>
                <p>Favorites : {user.favorites.toString()}</p>
                <p>Cart : {user.cart.toString()}</p>
                <button onClick={() => this.onDeleteUser(user.userName)}>Delete User</button>
                <p/>
              </div>
            )
          }
          )}
        </div>
      )
    }
}

export default Admin;
