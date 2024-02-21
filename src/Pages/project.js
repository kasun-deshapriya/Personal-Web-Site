import React from 'react'
import "../CSS/project.css"
import logo1 from "../images/logo1.jpg"
import logo2 from "../images/logo2.jpg"
import logo3 from "../images/logo3.png"

function project() {
  return (
    <div>
   <br></br> <div className='con1'></div>
<div className='con2'>
<br></br> 
      <div className='con3'>
         <h2 className='heading2'>Things I’ve been trying to do</h2>
      </div>
     <p className='pro'> I've worked on a variety of projects over the years and I'm proud of the progress I've made. 
      Many of these projects are open-source and available for others to explore and contribute to.
       If you're interested in any of the projects I've worked on, please feel free to check out the
        code and suggest any improvements or enhancements you might have in mind. Collaborating with
         others is a great way to learn and grow, 
      and I'm always open to new ideas and feedback. </p>

      <div className='pro1'>
         <div className='di'>
            <img src={logo1}  className='logo1'></img>
            <h2 className='h2'>school-management-system</h2>
            <p className='p--'> Full java  project for manage principal,students and teachers with mysql database</p>

           <a href='https://github.com/kasun-deshapriya' className='git1' >< svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16" className='attach'>
          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
          </svg>view project</a>
         </div>

      </div>

      <div className='pro2'>
         <div className='di'>
            <img src={logo2}  className='logo1'></img>
            <h2 className='h2'>Hotel-Booking-Management-System </h2>
            <p className='p--'> This system for booking hotel room and wedding hall with mysql DB</p>

           <a href='https://github.com/kasun-deshapriya' className='git1' >< svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16" className='attach'>
          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
          </svg>view project</a>
         </div>

      </div>

      <div className='pro3'>
         <div className='di'>
            <img src={logo1}  className='logo1'></img>
            <h2 className='h2'>PizzaHut-Billing-System</h2>
            <p className='p--'>This is the system for pizzahut billing using java with NetBeans IDE</p>

           <a href='https://github.com/kasun-deshapriya' className='git1' >< svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16" className='attach'>
          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
          </svg>view project</a>
         </div>

      </div>

      <div className='pro4'>
         <div className='di'>
            <img src={logo3}  className='logo1'></img>
            <h2 className='h2'>Student-Registration-For-Online-Courses </h2>
            <p className='p--'> This System is made by using HTML, CSS, JavaScript and PHP ,with a mysql database</p>

           <a href='https://github.com/kasun-deshapriya' className='git1' >< svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16" className='attach'>
          <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z"/>
          </svg>view project</a>
         </div>

      </div>
        
    </div>
</div>
  )
}

export default project