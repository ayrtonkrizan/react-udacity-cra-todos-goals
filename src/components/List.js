import React from 'react';

export default function List (props) {
    return(
        <ul>
            {props.items.map(i => (
                <li key={i.id}>
                    <span 
                        onClick={() =>  props.toggle && props.toggle(i.id)}
                        style = {{textDecoration: i.complete ? 'line-through':'none'}}
                    >
                        {i.name}
                    </span>
                    <button onClick={()=> props.remove(i)}>X</button>
                </li>
            ))}
        </ul>
    )
}
