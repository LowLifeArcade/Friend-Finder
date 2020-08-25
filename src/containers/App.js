import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';


class App extends Component {
    constructor() {
        super()
        this.state =  {
            people: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({people: users}));
    }

    onsSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
      
    }

    render () {
        const filteredPeople = this.state.people.filter(people =>{
            return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.people.length ===0) {
            return <h1 className= 'tc'>Loading...</h1>
        } else {
        return  (

        <div className='tc' >
            <h1>People</h1>
            <SearchBox searchChange={this.onsSearchChange} /> 
            <Scroll>
                <CardList people={filteredPeople}/>
            </Scroll>
        </div>
        

        );
        } 
    }
}

export default App;