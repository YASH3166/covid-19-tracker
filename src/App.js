import logo from './logo.svg';
import './App.css';
import covid from './covid.jpg';

function App() 
{
  return (
<div className="App">
<img src={covid} alt="Logo" className="logo" />

<p>Global and Country Wise Cases of Corona Virus</p>
<p class="italics"> (For a Particular select a Country from below) </p>

</div>

  );
}

export default App;