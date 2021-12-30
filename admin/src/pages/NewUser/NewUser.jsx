import React from 'react'
import "./NewUser.css"

const NewUser = () => {
    return (
        <div className='newUser'>
              <h1 className='newUserTitle'>New User</h1>     
              <form className='newUserForm'>
                  <div className="newUserItem">
                      <label>Username</label>
                      <input type="text" placeholder='jondoe99'/>
                  </div>
                  <div className="newUserItem">
                      <label>Full Name</label>
                      <input type="text" placeholder='Jon Doe'/>
                  </div>
                  <div className="newUserItem">
                      <label>Email</label>
                      <input type="text" placeholder='jondoe@gmail.com'/>
                  </div>
                  <div className="newUserItem">
                      <label>Password</label>
                      <input type="text" placeholder='12345'/>
                  </div>
                  <div className="newUserItem">
                      <label>Phone</label>
                      <input type="text" placeholder='+91 8770054128'/>
                  </div>
                  <div className="newUserItem">
                      <label>Address</label>
                      <input type="text" placeholder='Ujjain(MP) India'/>
                  </div>
                  <div className="newUserItem">
                      <label>Gender</label>
                      <div className='newUserGender'>
                      <input type="radio" name="gender" id="male" value="male"/>
                      <label for="male">Male</label>
                      <input type="radio" name="gender" id="female" value="female"/>
                      <label for="female">Female</label>
                      <input type="radio" name="gender" id="other" value="other"/>
                      <label for="other">Other</label>
                      </div>
                  </div>
                  <div className="newUserItem">
                      <label>Active</label>
                      <select className='newUserSelect' name="active" id="active">
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                      </select>
                  </div>
                  </form>
                  <button className="newUserButton">Create</button>
                  
        </div>
    )
}

export default NewUser
