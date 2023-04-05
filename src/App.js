import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {

  const posts = [
    {
      id: 1,
      title: "My first post",
      published: true
    },
    {
      id: 2,
      title: "My second post",
      published: false
    },
    {
      id: 3,
      title: "My third post",
      published: true
    }

  ]

  return (
    <div className="App">
      <Header/>
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
