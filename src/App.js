import React, {useState} from "react";
import FormComponent from "./Components/FormComponent";
import NewUser from "./Components/NewUser";

function App() {

   const [currentUserData, setCurrentUserData] = useState("");

  const onFormChanged = (userData) => {
    setCurrentUserData(prevUserData => [...prevUserData, userData]);
  }

  return (
    <div>
      <FormComponent onFormChanged={onFormChanged}/>
      <NewUser userData={currentUserData}/>
    </div>
  );
}

export default App;
