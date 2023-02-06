// import

const TodayDate = () => {
  let today = new Date()
  let splitDate = today.toDateString().split(' ')
  let date = `${splitDate[0]} ${splitDate[2]}`

  let time = today.toLocaleTimeString().split(' ')
  return (
    <>
      <h2>
        <p>{date}</p>
        <p>{time}</p>
      </h2>
    </>
  )
}

export default TodayDate