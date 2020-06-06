import React from 'react';

const ColorComp = (props) => {
    let newColor = ("rgb("+ props.c1 +", "+ props.c2 +", "+ props.c3 +")")

    const outputstyle ={
        color: 'black',
        margin: '15vw auto',
    };
    const divstyle={
        backgroundColor: newColor,
        height: '37vw',
        width: '37vw',
        textAlign: 'centre',
        display:'inline-block',
        margin:'20px auto',
        borderRadius: '100%'
    };

    return(
        <div style={divstyle} onClick={props.clicked}>
            <h1 style={outputstyle}>{newColor}</h1>
        </div>
    )
}
        
    


export default ColorComp;