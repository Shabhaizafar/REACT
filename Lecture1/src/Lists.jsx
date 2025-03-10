import React from 'react';
function Lists(){
    var mylist = ["Zafar","Shrey","Kavyan"];
    var items = mylist.map((v,i)=>{
        return <li key={i}>{v}</li>
    })
    return (
        <ul>{items}</ul> 
    );
};

export default Lists;

// map ,filter : return (Must )