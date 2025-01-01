import{ BrowserRouter,Routes,Route} from 'react-router-dom' 
import {   UserSignUp } from './Component';
import 'bootstrap/dist/css/bootstrap.min.css';

 
 

function App() {
 document.documentElement.style.background="#2a1450 "
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<UserSignUp/>}/>
      </Routes> 
      </BrowserRouter>
  );
}

export default App;
