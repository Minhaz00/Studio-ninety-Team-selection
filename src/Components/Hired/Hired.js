import React from 'react';

//=======================================
//       Display Hired Members
//=======================================  
const Hired = (props) => {
    const { hired } = props;
    console.log(hired);
    return (
        <div className="selected">
            {
                hired.map(person => <p>{person.name}</p>)
            }
        </div>
    );
};

export default Hired;