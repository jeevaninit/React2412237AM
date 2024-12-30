import React from 'react'

const ConditionalRendering2 = () => {

    const student1={
        name:'Bhanu',
        grade:95
    };

    const student2={
        name:'ShivaSai',
        grade:90
    };

    const highergradeStudent=student1.grade>student2.grade?student1:student2;

  return (
    <div>
        <h1>Higher Grade Student</h1>
        <p>
            {highergradeStudent.name}
            {highergradeStudent.grade}
        </p>

        {highergradeStudent===student1&&(<p>
            {highergradeStudent.name} is doing Great!
        </p>)}

        {highergradeStudent===student2&&(<p>
            {highergradeStudent.name} is excelling
        </p>)}

    </div>
  )
}

export default ConditionalRendering2;