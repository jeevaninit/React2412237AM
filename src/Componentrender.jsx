import React from 'react'
import Conditiontest from './Conditiontest';
import ConditionalRendering2 from './conditionalRendering2';

const Componentrender = () => {

    const condition=false;

  return (
    <div>
        {condition?<Conditiontest />:<ConditionalRendering2 />}
    </div>
  )
}

export default Componentrender