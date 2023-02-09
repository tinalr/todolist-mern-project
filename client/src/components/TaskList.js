import axios from "axios"

const TaskList = ({ API_ENDPOINT, todoName, date, isCompleted, id, getTask }) => {
  const updateTask = async (task) => {
    let data = await axios.put(`${API_ENDPOINT}/todo/${id}`, task)
    getTask()
    console.log(data)
  }

  const deleteTask = async () => {
    let data = await axios.delete(`${API_ENDPOINT}/todo/${id}`)
    getTask()
  }

  return (
    <div id='task_list_div'>
      <div>
        <h3>{todoName ? todoName : 'no name'}</h3>
        <h4>{date ? date : 'no date'}</h4>
      </div>
      <div id='btn_div'>

        <button onClick={() => updateTask({ isCompleted: !isCompleted })}
          name='isCompleted' type='radio'
          style={isCompleted ? { backgroundColor: 'green' } : { backgroundColor: "blue" }}>
          Done?
        </button>

        <button onClick={deleteTask} style={{ backgroundColor: 'red' }}>delete</button>
      </div>
    </div>
  )
}

export default TaskList