import { useEffect, useState } from "react";

import { Header } from "./Components/Header";
import { AddTask } from "./Components/AddTask";
import { ShowTask } from "./Components/ShowTask";

import './App.css';


function App() {

  const [tasklist, setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
  const [task, setTask] = useState([]);

  useEffect(() => {
  localStorage.setItem("tasklist", JSON.stringify(tasklist))
  }, [tasklist]);

  return (
    <div className="App">

      <Header />
      
      <AddTask 
      tasklist={tasklist} 
      setTasklist={setTasklist}
      task={task}
      setTask={setTask} />


      <ShowTask 
      tasklist={tasklist} 
      setTasklist={setTasklist} 
      task={task}
      setTask={setTask}
      />

    </div>
  );
}

export default App;
