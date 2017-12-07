'use strict';
  
  class ListUsers extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
        users: []
      }
    }
  
  componentWillMount(){
      fetch('http://reqres-api.herokuapp.com/api/users').then((result) => {
        return result.json();
      }).then((response) => {
        
          this.setState({
            users: response
          })
      });
    }

  render() {
    
    let userList = [];
    this.state.users.forEach((name, index) => {
      userList.push(
        <li key={index}>{name.first_name} {name.last_name}</li>
      );
    });
    
    return(
      <div>
        <ul>
          {userList}
        </ul>
      </div>
    )
    
  }
}

ReactDOM.render(<ListUsers />, document.getElementById('fetch'));
