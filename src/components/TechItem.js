//styled using .card class (in App.css)

import React from "react";

const TechItem = ({ tech }) => { //recieved tech object as prop
    return ( //renders card with icon, name, and category
        <div className="card">
            <h3>{tech.icon} {tech.name}</h3>
            <p>{tech.category}</p>
        </div>
    );
};

export default TechItem;