import React ,{ useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';

function App() {

  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  const getTaskLocal = () => {

    let storageTasks;

    if (localStorage.getItem('tasks') === null) {
    
      storageTasks = []

    } else {
    
      storageTasks = JSON.parse(localStorage.getItem('tasks'));

    }

    return storageTasks
      
  }

  //Init Task
  useEffect(() => {

    setTasks(getTaskLocal());
    
  }, [])

  //Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000)

    const newTask = {id, ...task};

    //localStorage
    let localStorageData = getTaskLocal();
    localStorageData.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(localStorageData));

    //Update DOM.
    setTasks(getTaskLocal());
  }

  //Delete Tasks
  const deleteTask = (id) => {
    
    let localStorageData = getTaskLocal();

    localStorageData.forEach((task, index)=> {

        if(task.id === id) {
        
          localStorageData.splice(index, 1)
        }

    });

    localStorage.setItem('tasks', JSON.stringify(localStorageData));
    setTasks(getTaskLocal());
  }

  //Toggle Reminder
  const toggleReminder = (id) => {

    // let localStorageData = getTaskLocal();

    // localStorageData = localStorageData.map((task) => {

    //     if(task.id === id) {

    //       [...task, !task.reminder];

    //     } else {
        
    //       task
    //     }
      
    //   });
    
    // localStorage.setItem('tasks', JSON.stringify(localStorageData));
    // setTasks(getTaskLocal());
  }

  //Toggle show Form
  const toogleShowForm = () => {
    
    setShowTaskForm(!showTaskForm)
  
  }

  return (
    <div className="container">
      <Header onToggleShowForm={toogleShowForm} showTaskForm={showTaskForm} />
      {showTaskForm && <AddTask onAddTask={addTask}/>}
      <div className="container-task">
      {tasks.length > 0 
        ? <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggleReminder={toggleReminder}
          />
        : 'There is no message'
        }
      </div>
    </div>
  );
}

export default App;
