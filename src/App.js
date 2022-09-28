import './App.css';
import requests from './components/request';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row 
      islargeRow = {true}
      title="Netfix originals"
      fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top reated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentry Movies" fetchUrl={requests.fetchDocumentaries}/>




      </div>
  );
}

export default App;
