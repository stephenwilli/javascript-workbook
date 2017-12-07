'use strict';

class Hacker extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      list: []
    }
  }
  
  componentWillMount(){
    const stories = [];
    for (let i = 15848550; i < 15848680; i++) {
      const url = `https://hacker-news.firebaseio.com/v0/item/${i}.json?print=pretty`;
      // console.log(url);
      fetch(url).then((result) => {
        return result.json();
      }).then((response) => {
        
        if(response.type === 'story'){
          
          stories.push(response);
          
          if (stories.length === 10) {
            console.log(stories);
            this.setState({
              list: stories
            })
          }
        }
      });
    }
  }
  
  render() {
    
    return(
      <ul>
        {this.state.list.map((item) => {
          return <li><a href={item.url}>{item.title}</a> By:{item.by}</li>
        })
      }
      </ul>
    )
  }
}

ReactDOM.render(<Hacker />, document.getElementById('hacker-news'));