import Stack from 'react-bootstrap/Stack';
import './Header.css'

function Header() {

    return <div className='mainHeader'>

    <Stack direction="horizontal" gap={3}>
    <div className='leftHeader'>
      <img src="/img/logo.png" width={40} height={40} className={'logo'}/>
      <div className='leftHeaderText'>
      <h1>stylish clothes</h1>
      <p>Магазин стильной одежды</p>
      </div>
      </div>

      <div className='rightHeader ms-auto'>
      <img src="/img/shop.png" width={20} height={20}/>
      <span>1500</span>
      <img src="/img/izbr.png" width={20} height={20}/>
      </div>
      </Stack>
    </div>
}
export default Header;