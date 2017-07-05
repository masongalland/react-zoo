import React from 'react';


function Species(props){
    function handleCLick(){
        props.action(props.name)
    }

    
    return (
        <div>
            <h5>{ props.name }</h5>
            <p>{props.status}</p>
            <button onClick={handleCLick}>Feed</button>   
        </div>
    );
    
}


export default Species;