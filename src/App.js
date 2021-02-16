import React, {Component} from 'react';
import CardList from './CardList';
import {Robots} from './Robots';
import SearchBox from "./SearchBox";
import scroll from './scroll';


class App extends Component{
    constructor(){
        super()
        this.state = {
            Robots: Robots,
            Searchfield: ''
        }
    }
    onSearchChange = (event)=> {
        this.setState({Searchfield: event.target.value})
        }  

    render(){
        const filteredRobots = this.state.Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
        } )
    return(
<div className='tc'>
    <h1>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
         <scroll>
         
         <CardList Robots={filteredRobots}/>
        
         </scroll>
</div>

    )
}
}
;
    export default App;