import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <p style={{textAlign: 'center', color: '#666', marginBottom: '20px'}}>Fill out your details to generate your CV</p>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  );
}

export default App
