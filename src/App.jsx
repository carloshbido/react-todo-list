import React ,{ useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';

function App() {

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

  return (
    <div className="container">
      <Header/>
      <AddTask onAddTask={addTask}/>
      {tasks.length > 0 
        ? <Tasks 
            tasks={tasks} 
            onDelete={deleteTask}
            onToggleReminder={toggleReminder}
          />
        : 'Não há mensagens'
        }
    </div>
  );
}

export default App;
