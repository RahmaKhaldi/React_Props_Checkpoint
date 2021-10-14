
import reactDom from 'react-dom';
import './App.css';
import Img from "./assets/img.png"
import Profile from "./Profile/Profile"
function App() {
    const fullName="rahma"
    const bio="Bonjour"
const profession="dev"

  const handleName=(name)=>{
    alert(`${name}`)
  }
  const styleObject={color:"red"}
    return (
      <div style={styleObject} className="App">
      <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
      <img src={Img} alt="img" />
      </Profile>
       
      </div>
    );
  }
  
export default App;
