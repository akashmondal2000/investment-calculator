import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifire, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifire]: newValue,
      };
    });
  }

  return (
    <>
      <Header/>
      <UserInput userInput={userInput} onChange={handleChange}/>

      {/* Results */}

      <Results/>
     
    </>
    
  )
}

export default App
