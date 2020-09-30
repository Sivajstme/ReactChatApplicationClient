import React,{Component} from "react";
import Func from './TestHooks';

class Test extends Component {

    state = {
    persons: [
        {
            name : 'Max',
            age : 25
        },
        {
            name : 'Menu',
            age : 23
        }
    
    ]
    }
    showEvent = () =>{
        console.log('object');
        this.setState({
            persons:[
                {name:'marrrr',
                age:123
                },
                {name:'dan',age:2123}
                    
                ]})
    }

    render(){

        return(

            <div>

            <button onClick={this.showEvent}>ClickMe</button>
                <div>{this.state.persons[0].name}</div>
                <p click={this.showEvent}>Hello</p>
                <Func />
            </div>

        )

    }


}

export default Test;
