import axios from "axios"

const CreateTask = ({ API_ENDPOINT, getTask }) => {
  const url = API_ENDPOINT

  let today = new Date()
  let splitDate = today.toDateString().split(' ')
  let date = `${splitDate[0]} ${splitDate[2]}`

  const postTask = async (task) => {
    let data = await axios.post(`${url}/todo`, task)
    getTask()
    console.log(data)
  }

  return (
    <>
      <form onSubmit={(event) => {
        event.preventDefault()
        postTask({ name: event.target.name.value, date: date, isCompleted: false })
      }}>
        <input name="name" type='text' />


        <button>add</button>
      </form>
    </>
  )
}

export default CreateTask