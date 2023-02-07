// import

const TaskList = ({ todoName, date, isCompleted }) => {
  return (
    <>
      <div>
        <h3>{todoName ? todoName : 'no name'}</h3>
        <h4>{date ? date : 'no date'}</h4>
      </div>
      <div>
        {isCompleted ? <input name='isCompleted' type='radio' style={{ color: 'green' }} />
          : <input name='isCompleted' type='radio' style={{ color: 'blue' }} />}

        <button style={{ backgroundColor: 'red' }}>delete</button>
      </div>
    </>
  )
}

export default TaskList