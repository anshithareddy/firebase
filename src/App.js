import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap';
import Login from './components/Login'
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup'
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  return (
    <div className="App">
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/home'element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
        </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
      </Container>      
    </div>
  );
}
export default App;
