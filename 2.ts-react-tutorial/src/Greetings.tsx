import React from 'react';

type GreetingProps = {
    name : string;
    mark : string;
    optional?:string;
    onClick : (name : string) => void;
};
function Greetings ({name,mark,optional,onClick} : GreetingProps) {
    return (
        <div>
            hello {name} {mark}
        {optional && <p>{optional}</p>}
        <button onClick={()=>onClick(name)}>클릭</button>
        </div>
    );
};
Greetings.defaultProps ={
    mark : '!'
}

export default Greetings;