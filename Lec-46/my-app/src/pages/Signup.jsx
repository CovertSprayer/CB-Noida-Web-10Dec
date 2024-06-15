// import './Signup.css'

const Signup = () => {
  return (  
    <div className='signup-container'>
        <h1>Signup Form</h1>
      <form>
        <input type="text" placeholder='Username' /> <br />
        <input type="email" placeholder='Email' /> <br />
        <input type="password" placeholder="Password" />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup
