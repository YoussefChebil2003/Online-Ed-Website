let studentId;
// we need to store the student id of the person logged in, in a variable so we can access their info
// for anything, profile, courses, schedule...

let profileDiv = document.getElementById('profile-div');

let generateProfile = (studentId) => {
    return (profileDiv.innerHTML = studentData.map((x)=>{
        let {id, gender, firstName, lastName, bio, email, phoneNumber} = x;
        return  
        ` 

    
        `
    })
        
       
    
    )

}
