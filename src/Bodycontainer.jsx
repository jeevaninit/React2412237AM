import React from 'react'

const Bodycontainer = () => {

  const coursedetails={
    cname:"React with Redux",
    duration:'45 Days',
    imgurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  }

  const styles={
    heading:{
      color:'red',
      fontSize:'30px',
      TextAlign:'center'
    },
    para:{
      margin:'20px',
      padding:'20px',
      backgroundColor:'#fff'
    },
    img:{
      width:'500px',
      height:'500px'
    }
  }
  const myfun=()=>{
    return `My course Name: ${coursedetails.cname} and the Course Duration: ${coursedetails.duration}`;
  }
  return (
    <article>

      <h2 style={{color:'blue',backgroundColor:'yellow'}}>Print Object Values</h2>

      <img src={coursedetails.imgurl} alt={coursedetails.cname} style={styles.img}/>
      <h3 style={styles.heading}>Course Name: {coursedetails.cname}</h3>
      <p style={styles.para}>Course Duration: {coursedetails.duration}</p>

      <h3>Hi {myfun()}</h3>
    </article>
  )
}

export default Bodycontainer