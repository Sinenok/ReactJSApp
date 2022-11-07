import React, { useState } from 'react';
import './App.css';
import logo from './img/logo.svg'
import basket from './img/kor.png'
import clothes1 from './img/1.webp'

function App() {

  const [products, setProducts] = useState(0)

  function increment() {
    setProducts(products + 1)
  }

  function decrement() {
    setProducts(products - 1 > 0? products - 1:0)
  }

  return (
    <div className="App">
      <div class="header">
            <a target="_self" href="#"><img class="logo" src={logo} alt="ТВОЕ"/></a>       
            <a className="city" target="_self" href="#">Москва</a> 
            <div class="counter">
                <img class="basket" src={basket} alt=" "/>
                <input type="text" value={products} class="counter_value" disabled/>
            </div>
        </div> 
      <body>
        <div class="table_best_offers">
            <span class="table_best_offers_header">Лучшие предложения</span>
            <a target="_self" href="#" class="table_best_offers_buttons-sort">
                <span>HIT</span>
            </a>
            <a target="_self" href="#" class="table_best_offers_buttons-sort">
                <span>NEW</span>
            </a>
            <a target="_self" href="#" class="table_best_offers_buttons-sort">
                <span>SALE</span>
            </a>
        </div>
        <table class="table-clothes">
            
        </table>
        <div class="table-specially">
            <span class="table-specially_header">Специально для вас</span>
        </div>
        <table class="table-clothes">
          <tr>
            <td>
              <img src={clothes1}/>
              <div class="table-clothes_text">
                <span class="price">3999 руб.</span>
                <div class="table-clothes_btn-minus">
                  <button onClick={decrement} class="counter_btn" data-direction="minus">-</button>
                </div>
                <div class="table-clothes_btn-plus">
                  <button onClick={increment} class="counter_btn" data-direction="plus">+</button>
                </div><br></br>
                <span class="art">Арт.: 94768</span><br></br>
                <span class="description">Толстовка с капюшоном на молнии ВПШ 4.0 CHANGES</span>
              </div>
            </td>
            <td>
              <img src={clothes1}/>
              <div class="table-clothes_text">
                <span class="price">3999 руб.</span>
                <div class="table-clothes_btn-minus">
                  <button onClick={decrement} class="counter_btn" data-direction="minus">-</button>
                </div>
                <div class="table-clothes_btn-plus">
                  <button onClick={increment} class="counter_btn" data-direction="plus">+</button>
                </div><br></br>
                <span class="art">Арт.: 94768</span><br></br>
                <span class="description">Толстовка с капюшоном на молнии ВПШ 4.0 CHANGES</span>
              </div>
            </td>
            <td>
              <img src={clothes1}/>
              <div class="table-clothes_text">
                <span class="price">3999 руб.</span>
                <div class="table-clothes_btn-minus">
                  <button onClick={decrement} class="counter_btn" data-direction="minus">-</button>
                </div>
                <div class="table-clothes_btn-plus">
                  <button onClick={increment} class="counter_btn" data-direction="plus">+</button>
                </div><br></br>
                <span class="art">Арт.: 94768</span><br></br>
                <span class="description">Толстовка с капюшоном на молнии ВПШ 4.0 CHANGES</span>
              </div>
            </td>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default App;
