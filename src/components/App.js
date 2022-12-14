import TelaInicial from "../pages/TelaInicial";
import Horario from "../pages/Horario";
import Assentos from "../pages/Assentos";
import NavBar from "../NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Confirmacao from "../pages/Confirmacao";

export default function App() {
  const [infoFilme, setInfoFilme] = useState("")

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<TelaInicial setInfoFilme={setInfoFilme}/>}></Route>
          <Route path="/sessoes/:idFilme" element={<Horario infoFilme={infoFilme} setInfoFilme={setInfoFilme}/>}></Route>
          <Route path="/assentos/:idSessao" element={<Assentos infoFilme={infoFilme} setInfoFilme={setInfoFilme}/>}></Route>
          <Route path="/sucesso" element={<Confirmacao infoFilme={infoFilme}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

