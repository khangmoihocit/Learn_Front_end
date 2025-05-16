import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Content from './components/Content';


function App() {
  return (
    <>
      <Header />
      <NavigationMenu />
      <div className='main'>
        <Content />
        <MainContent />
        <Content />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
