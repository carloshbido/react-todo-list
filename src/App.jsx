import React ,{ useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';

function App() {

  const [showTaskForm, setShowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  //Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000000)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  //Delete Tasks
  const deleteTask = (id) => {
    const newTasksArray = tasks.filter(task => task.id !== id);
    setTasks(newTasksArray);
  }

  //Toggle Reminder
  const toggleReminder = (id) => {

    const updatedTask = tasks.map(task => {

      if(task.id === id) {

        const reminder = !task.reminder
        return {...task, reminder}
      
      } else {
        
        return task
      }
    })

    setTasks(updatedTask)
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
