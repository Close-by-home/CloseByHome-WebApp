import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Index';
import Registro from './pages/registro/Index';
import ModificarSenha from './pages/modificarSenha/Index';
import PerfilMorador from './pages/PerfilMorador/Index';
import Pagina404 from './pages/paginaErro404/Index';
import PerfilColaborador from './pages/perfilColaborador/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/registro" element={<Registro/>}/>
        <Route exact path="/modificarSenha" element={<ModificarSenha/>}/>
        <Route exact path="/Perfil" element={<PerfilMorador/>}/>
        <Route exact path="/PerfilColaborador" element={<PerfilColaborador/>}/>
        <Route path="*" element={<Pagina404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
