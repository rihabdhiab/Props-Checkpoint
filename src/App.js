import React from 'react';
import Profile from './profile/profile';


function App() {
  const handleName = name =>alert(name);
  return (
    <div>
      
      <Profile fullName='Dhiab Rihab' bio='Bachelor degree in biotechnologie' profession='Web Developer' handlename={handleName} >
         <img src='/ProfileImg.jpg'  style={{border:'7px double #b2bf6c' , borderRadius:'10px', height:'500px', width:'250px'}}/>
      </Profile>
      
    </div>
  );
}

export default App;
