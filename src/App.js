import './App.css';
import React, {useState} from 'react';
import Menu from './Menu';
import Woman from '../src/woman (1).png';
import Man from '../src/man.png';
import Kids from '../src/kids.png';
import Shoe from '../src/shoe.png';
import Cart from './cart';
import { BrowserRouter, Route,Router, Link, Switch } from 'react-router-dom';


function App() {
//
const [Quantfem, aumentar]=useState(0)
const aumentarfun=()=>{
  aumentar(Quantfem+1)

}
//
const[Quantmasc, adicionar]=useState(0)
const adcfun=()=>{
  adicionar(Quantmasc+1)
 }
 //
const[Quantinf, ampliar]=useState(0)
const ampliarfun=()=>{
  ampliar(Quantinf+1)
 }
//
const[Quantcalç, crescer]=useState(0)
const crescerfun=()=>{
  crescer(Quantcalç+1)
}
  return (
    <div className="App">
    
      


    <BrowserRouter>
        <div>
          

          <nav>
            <ul>
           
              <li><Link to="/cart">Page 1</Link></li>
              
            </ul>
          </nav>

          <Switch>
            
            <Route path="/cart" component={Cart} />
            
          </Switch>
        </div>
      </BrowserRouter>


<div className="caixas">
  <div className="guardar">
<div className="box1"> 
<div className="info"> 
<div className="imagem">
<img className="imagem1" src={Woman}/> 
   </div>
   <div> 
<p className="Feminino">Feminino</p> 
</div>
<h6 className="Valor"> A partir de $69,99. </h6>
<p className="Femdescric">Aproveite 20% de desconto na categoria feminina. </p>
<p className="Itens"> Itens: {Quantfem}</p>
<button className="Aumentarfun" onClick={aumentarfun}>Adicionar</button>

</div>
</div>

</div>

<div className="box2">
<div className="info"> 
<div className="img2"> 
<img className="imagem2" src={Man}/> 
   </div>
  <p className="Masculino">Masculino</p>
  <h6 className="Valor2">A partir de $69,99. </h6>
  <p className="Mascdescric">Aproveite 20% de desconto na categoria masculina. </p>
  <p className="Itens2">Itens: {Quantmasc}</p>
  <button className="Aumentarfun2" onClick={adcfun}>Adicionar</button>
  </div>

</div>

<div className="box3">
  <div className="info"> 
  <div className="img3"> 
  <img className="imagem3" src={Kids}/> 
  </div>
  <p className="Infantil">Infantil</p>
  <h6 className="Valor3"> A partir de R$29,99. </h6>
  <p className="Infantdescric">Aproveite 30% de desconto na categoria infantil. </p>
  <p className="Itens3">Itens: {Quantinf} </p>
  <button className="Aumentarfun3" onClick={ampliarfun}>Adicionar</button>
 </div>

</div>

<div className="box4">
  <div className="info"> 
<div className="img4"> 
<img className="imagem4" src={Shoe}/> 
  </div>
<p className="Calçados">Calçados</p>
<h6 className="Valor4"> A partir de $89,99. </h6>
<p className="Caldescric">Aproveite 10% de desconto na categoria de calçados. </p>
<p className="Itens4">Itens: {Quantcalç}</p>
<button className="Aumentarfun4" onClick={crescerfun}>Adicionar</button>

</div>

  </div>
  
</div>
</div>
    
  );
}
export default App;