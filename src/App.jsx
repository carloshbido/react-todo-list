import React ,{ useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks.jsx';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: Math.random(),
      text: 'Corpo da mensagem 1',
      day: '01/02/1984',
      reminder: true
    },
    {
      id: Math.random(),
      text: 'Corpo da mensagem 2',
      day: '10/10/1987',
      reminder: true
    },
    ,
    {
      id: Math.random(),
      text: 'Corpo da mensagem 3',
      day: '28/11/2019',
      reminder: true
    }
  ]);


  //Delete Tasks
  const deleteTask = (id) => {
    const newTasksArray = tasks.filter(task => task.id !== id);
    setTasks(newTasksArray);
  }

  //Toggle Reminder
  const toggleReminder = (id) => {

    console.log(id);
  }

  return (
    <div className="container">
      <Header/>
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
