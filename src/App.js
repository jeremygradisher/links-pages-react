import logo from './logo.svg';
import './App.css';
import './styles.css';
import { NavBar } from './NavBar.js';

function App() {
  return (
    <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
  );
}

export default App;
