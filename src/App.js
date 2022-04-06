
import './App.css';
import Imageslider from './componts/Iamgeslider';
import { sliderData } from "./componts/sliderData";
function App() {
  return (
    <Imageslider slides={sliderData}/>
  );
}

export default App;
