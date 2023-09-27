import './App.css'
const App = () => {
    return  <div>
       <nav>
        <div className="logo">
            <img src="/images/Frame 1073714022.png" alt="" />
            
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
    
        </ul>
        <div>
        <button>Contact us</button>
        <button className='nextbtn'>-></button>
        </div>
        
       
       </nav>

       <div className='container'>
              <div className='container-inner'>
                <div className='content-box'>
                    <h2>Searching for <span className='eight-weight'>Augmented Development</span>  Teams to steer your product towards triumph?"</h2>

                    <ul className='search-ul'>
                        <li><h1>50+ </h1>
                        <p>Clients</p> </li>
                        <li> <h1> 80+</h1>
                        <p>Projects successfully completed</p></li>
                        <li><h1>60+</h1>
                        <p>of the clients converted into long term engagement partners</p></li>
                    </ul>
                </div>
                <div className='form-container'>
                    <div className='inner-form'>
                        <h2>Fill out the form.</h2>
                        <p>Our team will touch base with you within 24 hours.</p>

                        <div className='form-field'>
                            <input type="text" name="" id="" placeholder='Full Name*' />
                            <input type="text" name="" id="" placeholder='Email ID*' />
                            <input type="text" name="" id="" placeholder='Country' />
                            <input type="text" name="" id="" placeholder='Contact Number' />
                            <input type="text" name="" id="" placeholder='Tell us your requirements*' />
                        </div>
                        <div className='submit-btn'>
        <button>Submit</button>
        <button className='nextbtn'>-></button>
        </div>
                    </div>
                </div>
              </div>

              <div className='footer-logo'>
                <h2>Leading the charge for Industries!</h2>
                <div className='logo-slider'>
                    <img src="./images/Frame 1073713973.png" alt="" />
                    <img src="./images/Frame 1073713973.png" alt="" />
                    <img src="./images/Frame 1073713973.png" alt="" />
                    <img src="./images/Frame 1073713973.png" alt="" />
                    <img src="./images/Frame 1073713973.png" alt="" />
                    <img src="./images/Frame 1073713973.png" alt="" />
                    <img src="./images/Frame 1073713973.png" alt="" />
                    <img src="./images/Frame 1073713973.png" alt="" />
                   
                
                </div>


              </div>
       </div>
    </div>
};

export default App;