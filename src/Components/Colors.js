import React from 'react';
import ColorComp from './ColorComp'; 

class Colors extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color1: 138,
            color2: 131,
            color3: 198
        }
        this.updateColorHandler = this.updateColorHandler.bind(this);
    }
    colorCreater(){
        return Math.floor(Math.random()*250) + 1
    }

    updateColorHandler(){
        this.setState({
            color1: this.colorCreater(),
            color2: this.colorCreater(),
            color3: this.colorCreater()

        })
    }
    render(){
        return(
            <ColorComp clicked={this.updateColorHandler} c1={this.state.color1.toString()} c2={this.state.color2.toString()} c3={this.state.color3.toString()} />
            )

    }
}
export default Colors;