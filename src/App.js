import "./App.css";
// import TextForm from "./components/forms/TextForm";
import Navbar from "./components/navbar/Navbar";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Navbar title="TextUtils"/>
      {/* <Navbar /> */}
      <div className="container mt-5 my-3">
      {/* <TextForm heading="Enter the text to Analyze" /> */}
      <About/>
      </div>
    </>
  );
}

export default App;
