import './Cart.css'
import { Card, CloseButton, Stack } from 'react-bootstrap';
import { useState } from 'react';

function Cart() {
    const [ oform, setOform] = useState(false);
    const [openCart, SetOpenCart] = useState(true)

    let styleOverflow = {}
    let styleSideBlock = {}

    if (openCart == true) {
        styleOverflow = {width: '100%'};
        styleSideBlock = {width: '385px'};
    } 
    else {
        styleOverflow = {width: '0'};
        styleSideBlock = {width: '0'};
    }

   let content = oform ? <div><h1>Корзина</h1>
  <img src="./img/Group91(1).svg" className="Close" onClick={() => SetOpenCart(false)}></img>
  <div className="poloska"></div>
  <div className="MainProduct">
    <>Заказ оформлен</>
  </div>


  <p style={{
    bottom: "10%",
    right: "45%",
    position: "absolute",
  }}>Итого: 0</p>

  <div className='order'>
    <a onClick={()=>setOform(false)} href='#'>
        Отменить заказ
    </a>
  </div>

</div> : <><Stack direction="horizontal" gap={3} id="topCart">
                    <div className="element"><h1>Корзина</h1></div>
                    <div className="element ms-auto"><img scr="img/close.png" onClick={()=>SetOpenCart (false)} id='close'/></div>
                </Stack>
   
                


           
                <div className="CartItems">
                    <div className="CartItem">
                        <img src="" id="CartIteming"/>
                        <div className="RemoveButton">
                            <img src="https://sneakernews.com/wp-content/uploads/2020/01/nike-air-force-1-high-334031-015-4.jpg" id='fotocarz'/>
                        </div>
                        <div className="ItemText">
                            <p>Nike air 1</p>
                            <p>14 990р</p>
                        </div>
                        {/* <div className="CountButton">
                            <img src="img/plus.png"/>
                            <input type='text' maxLength={2}/>
                            <img src="img/plus.png"/>
                        </div> */}
                    </div>
                </div> 

                <div className="CartItems">
                    <div className="CartItem">
                        <img src="" id="CartIteming"/>
                        <div className="RemoveButton">
                            <img src="https://www.football-mania.ru/f/product/cz5478_401_41_web.jpg" id='fotocarz'/>
                        </div>
                        <div className="ItemText">
                            <p>Nike air 1</p>
                            <p>1 990р</p>
                        </div>
                        {/* <div className="CountButton">
                            <img src="img/plus.png"/>
                            <input type='text' maxLength={2}/>
                            <img src="img/plus.png"/>
                        </div> */}
                    </div>
                </div> 

                <div className="CartItems">
                    <div className="CartItem">
                        <img src="" id="CartIteming"/>
                        <div className="RemoveButton">
                            <img src="https://sneakernews.com/wp-content/uploads/2020/07/nike-air-force-1-low-DA4660-100-0.jpg" id='fotocarz'/>
                        </div>
                        <div className="ItemText">
                            <p>Nike force 1</p>
                            <p>12 990р</p>
                        </div>
                        {/* <div className="CountButton">
                            <img src="img/plus.png"/>
                            <input type='text' maxLength={2}/>
                            <img src="img/plus.png"/>
                        </div> */}
                    </div>
                </div> 
                
            <div className='order'>
                <a onClick={()=>setOform(true)} href="#">
                    Заказать
                </a>
            </div>
              
</>  


    return <div className='mainCart'>
        <div className="Overflow" style={styleOverflow} onClick={()=> SetOpenCart(false)}></div>
            
            <div className="SideBlock" style={styleSideBlock}>{content}</div>    
        </div>
       



}
export default Cart;