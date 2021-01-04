import logo from './logo.svg';
import './App.css';
import Quoteform from './PageComponent/Quoteform';
import AppHeader from './PageComponent/AppHeader.js'
import MainBodyContainer from './PageComponent/MainBodyContainer'
import TopSell from './PageComponent/TopSell'
import pro from './Assets/images/backgroudgopro.jpg'

function App() {
  return (
    <div className="App" >
      <AppHeader/>
      {/**
       *  <MainBodyContainer/>
       */}
     <div style={{marginTop:'9.8rem'}}>
     <Quoteform/>
     <TopSell/>
   
     </div>
    
    </div>
  );
}

export default App;
