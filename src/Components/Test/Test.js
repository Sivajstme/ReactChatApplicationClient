import React,{Component} from "react";

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
        console.log('object')
    }

    render(){

        return(

            <div>

            <button onClick={this.showEvent}>ClickMe</button>

            </div>

        )

    }


}

export default Test;
