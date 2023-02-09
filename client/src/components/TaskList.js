// import

const TaskList = ({ todoName, date, isCompleted }) => {
  return (
    <div id='task_list_div'>
      <div>
        <h3>{todoName ? todoName : 'no name'}</h3>
        <h4>{date ? date : 'no date'}</h4>
      </div>
      <div id='btn_div'>
        {isCompleted ? <input name='isCompleted' type='radio' style={{ color: 'green' }} />
          : <input name='isCompleted' type='radio' style={{ color: 'blue' }} />}

        <button style={{ backgroundColor: 'red' }}>delete</button>
      </div>
    </div>
  )
}

export default TaskList