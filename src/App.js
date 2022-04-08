import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
       <Content></Content>
      <CustomerReviews></CustomerReviews>
    </div>
  );
}

export default App;
