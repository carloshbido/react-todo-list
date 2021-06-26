import React ,{ useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';
import Alert from './components/Alert';

function App() {

  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState('');

  //Init Task
  useEffect(() => {

    setTasks(getTaskLocal());
    
  }, [])

  //Get Data from LocalStorage
  const getTaskLocal = () => {

    let storageTasks;

    if (localStorage.getItem('tasks') === null) {
    
      storageTasks = []

    } else {
    
      storageTasks = JSON.parse(localStorage.getItem('tasks'));

    }

    return storageTasks
      
  }

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
        
          localStorageData.splice(index, 1);
        }

    });

    localStorage.setItem('tasks', JSON.stringify(localStorageData));
    setTasks(getTaskLocal());
  }

  //Toggle Reminder
  const toggleReminder = (id) => {

    const localStorageData = getTaskLocal();

    const newData = localStorageData.map((task) => {

      if(task.id === id) {

        return {...task, reminder: !task.reminder};

      } else {
      
        return task
      }
      
    });
      
    localStorage.setItem('tasks', JSON.stringify(newData));
    setTasks(getTaskLocal());
  }

  //Toggle show Form
  const toogleShowForm = () => {
    
    setShowTaskForm(!showTaskForm)
  
  }

  //show Alert
  const showAlert = (message) => {
    
    setAlert(true)
    setMessage(message)
  
    setTimeout(() => {
      setAlert(false)
    },4000)

  }

  //close Alert
  const closeAlert = () => {
    setAlert(false);
  }

  return (
    <div className="main">
      
      {alert && <Alert message={message} onCloseAlert={closeAlert}/>}
      
      <div className="container">
        <Header onToggleShowForm={toogleShowForm} showTaskForm={showTaskForm} />
        
        {showTaskForm && 
          <AddTask 
            onAddTask={addTask} 
            onShowAlert={showAlert}
          />}
        
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
    </div>
  );
}

export default App;
