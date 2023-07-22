import React from 'react';

const Admission = () => {
    return (
      <div className='container'>

<div className="collapse bg-base-200">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
          <p>hello</p>
        </div>
      </div>
      </div>
    );
};

export default Admission;