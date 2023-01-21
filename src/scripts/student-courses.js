let courseSelection = document.getElementById('course-selection');
let courseBox = document.getElementsByClassName('course-box');

let generateCourseSelection = () => {
    return (courseSelection.innerHTML= classesData.map((x)=>{
        let {id,className,classInitials,subject,professor,priceRange,studentList,classInfo,classLogo} = x;
        return `
        <div class="course-box" id="course-${id}">
            <div class="course-pic">
                
            </div>
            <div class="course-box-add-ons">
                <div class="course-credentials">
                    <h3>${classInitials}</h3>
                    <h3>${professor}</h3>
                </div>
                <div class="course-directories">
                    <a><i class="bi bi-arrow-right-square-fill"></i></a>
                    <a><i class="bi bi-info-square-fill"></i></a>
                </div>
            </div>
        </div>             
    `;
    }).join(""));
};

generateCourseSelection();