let purpose = 2   /* 0 for a student user and 1 for a professor user */
let gender = 2   /* 0 for female, 1 for male */
let complete = false; 

let signUpBox = document.getElementById("sign-up-box");

let chooseMale = () => {
    gender = 1;
    console.log(gender)
}

let chooseFemale = () => {
    gender = 0;
    console.log(gender)
}

let chooseProfessor = () => {
    purpose = 1;
}

let chooseStudent = () => {
    purpose = 0;
}

let generateBox1 = () => {
    return signUpBox.innerHTML = `
    <div class="auth-info">
        <h2>Register your information</h2>
        <form>
            <label>First Name</label>
            <input type="text" placeholder="Your First Name">
            <label>Last Name</label>
            <input type="text" placeholder="Your Last Name">
            <label>Username</label>
            <input type="text" placeholder="Choose a Username">
            <label>Email</label>
            <input type="email" placeholder="Your email">
            <label>Password</label>
            <input type="password">
            <label>Gender</label>
            <div class="gender-options">
                <input onclick="chooseMale()" type="radio" id="male" name="user-gender" value="Male">
                <label for="male">Male</label>
                <input onclick="chooseFemale()" type="radio" id="female" name="user-gender" value="Female">
                <label for="female">Female</label>
            </div>
            <label>Age</label>
            <input type="date">
            <button onclick= "generateBox2()" class="main-btn" type="submit">Register</button>
        </form>    
     </div>
    `
}

let generateBox2 = () => {
    signUpBox.style = "height:500px"
    console.log("hello");
    if(gender==0){
        console.log("female");
        return signUpBox.innerHTML = `
        <div class="user-purpose">
            <h2>Who are you?</h2>
            <p>Please select your purpose of using the app:</p>
            <div class="purpose-options">
                <div>
                    <a onclick="chooseStudent()"><img class="student-img" width=175 height=150 src="src/img/girl-student.jpg"></a>
                    <label>Student</label>
                </div>
                <div>
                    <a onclick="chooseProfessor()"><img class="prof-img" width=175 height=150 src="src/img/woman-professor.png"></a>
                    <label>Professor</label>
                </div>
            </div>    
            <a onclick="generateBox3()"><i id="arrow-btn" class="bi bi-arrow-right-circle-fill"></i></a>  
        </div>
    `
    }
    else if(gender==1){
        console.log("male");
        return signUpBox.innerHTML = `
        <div class="user-purpose">
            <h2>Who are you?</h2>
            <p>Please select your purpose of using the app:</p>
            <div class="purpose-options">
                <div>
                    <a onclick="chooseStudent()"><img class="student-img" width=175 height=150 src="src/img/boy-student.png"></a>
                    <label>Student</label>
                </div>
                <div>
                    <a onclick="chooseProfessor()"><img class="prof-img" width=175 height=150 src="src/img/man-professor.png"></a>
                    <label>Professor</label>
                </div>
            </div>    
            <a onclick="generateBox3()"><i id="arrow-btn" class="bi bi-arrow-right-circle-fill"></i></a>  
        </div>
    `
    }
    else{
        console.log("neither male or female")
    }
    
}

let completeRegistration = () => {
    complete=true;
}


let generateBox3 = () => {
    if(purpose==0){
        return signUpBox.innerHTML = `
        <div class="create-profile-box">
            <h2>Develop Your Profile</h2>
            <form>
                <img width=150 height=100 src="src/img/unknown-profilepic.png">
                <div class="dropdown">
                    <button id="profile-pic-btn" class="upload-profile-pic-btn"><i class="bi bi-camera-fill"></i></button>
                    <div class="dropdown-content">
                        <p>Include Profile Picture</p> 
                    </div>
                </div>
                <label>Your Bio</label>
                <input type="text"width=250 height="150" placeholder="Describe yourself">
                <label>Phone Number</label>
                <input type="tel">
                                
            </form>
            <a onclick="completeRegistration()"><i id="arrow-btn" class="bi bi-arrow-right-circle-fill"></i></a>  
        </div>     
    `
    }
    if(purpose==1){
        return signUpBox.innerHTML = `
        <div class="create-profile-box">
            <h2>Develop Your Profile</h2>
            <form>
                <img width=150 height=100 src="src/img/unknown-profilepic.png">
                <div class="dropdown">
                    <button id="profile-pic-btn" class="upload-profile-pic-btn"><i class="bi bi-camera-fill"></i></button>
                    <div class="dropdown-content">
                        <p>Include Profile Picture</p> 
                    </div>
                </div>
                <label>Your Bio</label>
                <input type="text"width=250 height="150" placeholder="Describe yourself">
                <label>Phone Number</label>
                <input type="tel">
                <label>Experience & Achievements</label>
                <input type="text"width=250 height="150">
                <button>+</button> <!--add another block-->
                
            </form>
            <a onclick="generateBox4()"><i id="arrow-btn" class="bi bi-arrow-right-circle-fill"></i></a>  
         </div>      
    `
    }
}


generateBox1();

let generateBox4 = () => { /*choose subject to teach (only professor) */
    return signUpBox.innerHTML = `
    <div class="choose-subject-box">
        <h2>Choose Subject to Teach</h2>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="subject-choice">
                        <p>English</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="subject-choice">
                        <p>French</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="subject-choice">
                        <p>Mathematics</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="subject-choice">
                        <p>Physics</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="subject-choice">
                        <p>Biology</p>
                    </div>
                </div>
                <div class="col-6">
                    <div class="subject-choice">
                        <p>Programming</p>
                    </div>
                </div>
            </div>
        </div>
        <a onclick="completeRegistration()"><i id="arrow-btn" class="bi bi-arrow-right-circle-fill"></i></a>  
    </div>  
    `
}

if (complete==true){
    /*show loading page with you have succesfully signed up, heading to login page*/
    /*store everything and go to login page*/
}



