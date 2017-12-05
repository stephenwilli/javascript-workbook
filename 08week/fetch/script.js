'use strict';

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  
  componentWillMount(){
    const fetchedUsers = [];
      fetch('http://reqres-api.herokuapp.com/api/users?page=2').then((result) => {
        return result.json();
      }).then((response) => {
        
        fetchedUsers.push(response);
        console.log(fetchedUsers);
          this.setState({
            users: fetchedUsers
          })
        });
    }

  render() {
    
    return(
      <div className="">
        <ul>
        {this.state.users.map((name) => {
            return <li>{name.first_name}</li>
          })
        }
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<ListUsers />, document.getElementById('fetch'));
