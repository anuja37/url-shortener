import Navbar from './components/Navbar';
import UrlForm from './components/UrlForm';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <UrlForm />
      </div>
    </div>
  );
}

export default App;