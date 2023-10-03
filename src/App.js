import NavBar from './components/NavBar/NavBar';
import './App.css';
import {orginals , Action ,Horror,Comdey,Romance,Documentries} from './constants/url'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className='app'>
      <NavBar/>
      <Banner/>
      <RowPost  title='Netflix Orginals' url={orginals}/>
      <RowPost  title='Action' isSmall url={Action}/>
      <RowPost  title='Horror' isSmall url={Horror}/>
      <RowPost  title='Comdey' isSmall url={Comdey}/>
      <RowPost  title='Romance' isSmall url={Romance}/>
      <RowPost  title='Documentries' isSmall url={Documentries}/>
    </div>
  );
}

export default App;
