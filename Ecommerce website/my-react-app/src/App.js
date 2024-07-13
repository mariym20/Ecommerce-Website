
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory';
import Loginsignup from './Pages/Loginsignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import women_banner from './Components/Assests/women-banner.jpg'
import men_banner from './Components/Assests/men banner.jpg'
import kid_banner from './Components/Assests/kids banner.jpg'
function App() {
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path = '/' element = {<Shop/>}/>
      <Route path = '/men' element = {<Shopcategory banner = {men_banner} Shopcategory = "men"  />}/>
      <Route path = '/Women' element = {<Shopcategory banner = {women_banner } Shopcategory = "Women"/>}/>
      <Route path = '/Kids' element = {<Shopcategory banner = {kid_banner} Shopcategory = "Kids"/>}/>
     <Route path='/cart' element = {<Product/>}/>
     <Route path='productId' element = {<Product/>}/>
     <Route path='login' element = {<Loginsignup/>}/>

     </Routes>
     <Footer/>
    </BrowserRouter>
   
   

</div>
  );


}

export default App;
