// import logo from './logo.svg';
import React from 'react';
import styles from './App.module.css'
import LeftPanel from './components/LeftPanel';
import RestPanel from './components/RestPanel';
import { useState } from 'react';
const initcontext = {id:"1", title:"dummy", body:"dummy", username:"dummy"}
export const TaskContext = React.createContext({taskcontext:initcontext, setTaskcontext: ()=>{}});

export function App() {
  const [taskcontext, setTaskcontext] = useState(initcontext);
  return (
    <TaskContext.Provider value={{taskcontext, setTaskcontext}}>
      <div className={styles.App}>
        <LeftPanel/>
        <RestPanel/>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
