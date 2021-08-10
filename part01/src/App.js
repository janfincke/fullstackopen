import logo from './logo.svg';
import './App.css';


const Hello = (props) => {
  const now = new Date()
  return (    
    <div>      
      <p>Hello {props.name}</p>
    </div>  
  )
}

const App = () => {
  return (
    <>
      <Hello name="Jan"/>
    </>
  )
}

export default App;
