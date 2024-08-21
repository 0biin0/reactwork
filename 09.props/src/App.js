import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function App() {
  // 변수에 담긴값을 Body로 넘겨주기
  const addr = "서초구 강남대로";
  const name = "이고잉";

  return (
    <div className="App">
        <Header />
        <section>
           <Body address = {addr} user={name}/> 
        </section>
        <Footer />
    </div>
  );
}

export default App;