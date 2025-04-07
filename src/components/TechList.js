//styled with .grid class (in App.css)
//gives responsive layout

import React from "react";
import TechItem from './TechItem';

const TechList = ({ techItems }) => { //accepts techItems (filtered list)
    return (
        <div className="grid">
            {techItems.map((tech) => ( //maps through each item and renders a TechItem
                <TechItem key={tech.id} tech={tech} />
            ))}
        </div>
    );
};

export default TechList;