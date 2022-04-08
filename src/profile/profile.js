import React from "react";
import PropTypes from "prop-types";

function Profile(props){
    const styleProfile = {  
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(0.25turn, #e3bff1, #c3ec95)',
        fontFamily: 'Brush Script MT, Brush Script Std, cursive'}
    
    const styleButton = {
        height: '30px',
        width: '100px',
        color: 'rgb(171 82 168)',
        fontFamily: 'Brush Script MT, Brush Script Std, cursive',
        fontSize: 'large',
        border:' 2px solid',
        borderRadius: '5px'}
    
    return <div style={styleProfile}>
       
       <h3> <span style={{color:'rgb(171 82 168)'}} >FullName:</span>  {props.fullName} </h3>
       <h3> <span style={{color:'rgb(171 82 168)'}} >Bio:</span> {props.bio}</h3> 
       <h3><span style={{color:'rgb(171 82 168)'}} >Profession: </span> {props.profession}</h3>
       <div >{props.children}</div> 
       <button style={styleButton} onClick={()=>props.handlename('My name is Rihab and welcome to my profile')}>Click Me!</button>
       <br/> <br/> <br/>
    </div>
}

Profile.defaultProps = {
fullName:'Emna Saidi',
bio:'bachelor degree in digital marketing',
profession:'digital marketer'
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handlename:PropTypes.func,
}

export default Profile;