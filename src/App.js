import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import {Navbar,Footer} from './components';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl: "1480px"}}} m="auto">
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="home" element={<Home/>}/>
        <Route  path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App




