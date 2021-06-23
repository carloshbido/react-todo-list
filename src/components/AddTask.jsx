import React , { useState }from 'react'

function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    
    e.preventDefault();

    if(!text || !date) {
    
      alert('Fill the Task field')
      return
      
    }

    const currentDate = new Date().getTime();
    const currentDateDay = new Date().getDate();
    const dateFromForm = new Date(date).getTime();
    const dateFromFormDay = new Date(date).getDate() + 1;

    if(currentDate > dateFromForm && currentDateDay > dateFromFormDay) {
      alert('Date must be after the currenty date')
      return;
    }

    onAddTask({text, date, reminder});

    // reset form fields
    setText('');
    setDate('');
    setReminder(false);
  
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input 
          type="text" 
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Finish at</label>
        <input 
          type="date" 
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}/>
      </div>
      <div className="form-control">
        Reminder 
        <input 
          type="checkbox"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <input type="submit" value="Submit Task" className="btn-block"></input>
    </form>
      
  )
}

export default AddTask
