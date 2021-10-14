
import PropTypes  from "prop-types"
import { Children } from "react"
function Profile({fullName,bio,profession,children,handleName}) {
   
    return (
        <div>
            <h1>welcome</h1>
            <h2>{fullName}</h2>
            <span>{bio}</span>
            <p>{profession}</p>
            {children}
            <button onClick={()=>handleName(fullName)} >greet</button>
            <br/>
           
            
        </div>
    )
}
Profile.defaultProps={
    bio:"bonjour",
    fullName:"Rahma",
    handleName:()=>alert("default function")
}
Profile.propTypes={
fullName:PropTypes.string.isRequired,
bio:PropTypes.string,
profession:PropTypes.string.isRequired,
handleName:PropTypes.func
}

export default Profile

