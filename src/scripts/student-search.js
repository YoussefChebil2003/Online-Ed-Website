let searchInputBox = document.getElementById("search-input");
let searchOutputBox = document.getElementById("search-output");
let dropdownMenu = document.getElementsByClassName("dropdown-menu");
const dropboxes= document.querySelectorAll(".dropbox");

let searchResultBox = document.getElementById("search-result-box");

dropboxes.forEach(dropbox => {
    const select = dropbox.querySelector(".select");
    const caret = dropbox.querySelector(".caret");
    const menu = dropbox.querySelector(".dropdown-menu");
    const options = dropbox.querySelectorAll(".dropdown-menu li");
    const selected = dropbox.querySelector(".selected");

    select.addEventListener("click", () => {      
        if(select.classList.contains("select-clicked")==false){
            // removing style from all dropboxes
            dropboxes.forEach(dropbox_other => {
                const select_other = dropbox_other.querySelector(".select");
                const caret_other = dropbox_other.querySelector(".caret");
                const menu_other = dropbox_other.querySelector(".dropdown-menu");
                select_other.classList.remove("select-clicked");
                caret_other.classList.remove("caret-rotate");
                menu_other.classList.remove("dropdown-menu-open");
            });
             // adding the styles to the specific dropbox
            select.classList.toggle("select-clicked");
            caret.classList.toggle("caret-rotate");
            menu.classList.toggle("dropdown-menu-open");
        }else{
             // removing style from all dropboxes
             dropboxes.forEach(dropbox_other => {
                const select_other = dropbox_other.querySelector(".select");
                const caret_other = dropbox_other.querySelector(".caret");
                const menu_other = dropbox_other.querySelector(".dropdown-menu");
                select_other.classList.remove("select-clicked");
                caret_other.classList.remove("caret-rotate");
                menu_other.classList.remove("dropdown-menu-open");
            });
        }
       
    });

    options.forEach(option => {
        option.addEventListener("click", () => {
            selected.innerHTML = option.innerHTML;
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            menu.classList.remove("dropdown-menu-open");
            //removing active class from all option elements 
            options.forEach(option => {
                option.classList.remove("active");
            });
            //adding the class to the specific clicked option element
            option.classList.add("active");
        });
    });

})

let generateOutputSearchBox = () => {
    return (searchResultBox.innerHTML= professorData.map((x)=>{
        let {id,gender,firstName,lastName,subjects,priceRange,groupOrOneToOne,bio,email,phoneNumber,rating,img} = x;
        var title;
        if (gender="male") title = "Mr."
        else title = "Ms.";
        return `
        <div id= "professor-${id}" class="professor-box">
            <div class="professor-image">
                <img src=${img}>
            </div>
            <div class="professor-name">
                <h3 class="professor-name">${title+" "+ firstName+" "+lastName}</h3>
            </div>
            <div class="professor-subjects">
                <!--add subjects from list of subjects (h4)-->
                    <!--example-->
                <h4>Physics</h4>
                <h4>Mathematics</h4>
            </div>
            <div class="professor-bio">
                <!--add bio from professor profile (p)-->
                    <!--example-->
                <p>${bio}</p>
            </div>
            <div class="professor-rating">
                <!--add rating from professor profile (by coloring nb of stars for rating)-->
                    <!--example-->
                <i class="bi bi-star-fill"></i> 
                <i class="bi bi-star-fill"></i> 
                <i class="bi bi-star-fill"></i> 
                <i class="bi bi-star-half"></i>  
                <i class="bi bi-star"></i> 
            </div>
        </div>
        `
    }).join(""));
    
}

let generateRating = (rating) => {
    

}

generateOutputSearchBox();


/*
let searchBar = document.getElementsByClassName("search-bar");

let showOptions = () => {
    
}

let generateInputSearchBox = () => {
    return searchInputBox.innerHTML = `
        <form>
            <div class="name-search">
                <input class="search-bar" type="search" placeholder="Search by professor's name">
            </div>            
            <div class="advanced-search">
                <div class="top-specifics">
                    <div onclick="showOptions()" class="drop-box">
                        <span>no specific subject</span>
                        <i class="bi bi-chevron-down"></i>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">English</a></li>
                            <li><a class="dropdown-item" href="#">French</a></li>
                            <li><a class="dropdown-item" href="#">Mathematics</a></li>
                            <li><a class="dropdown-item" href="#">Physics</a></li>
                            <li><a class="dropdown-item" href="#">Biology</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">no specific subject</a></li>
                        </ul>
                    </div>
                    <div onclick="showOptions()" class="drop-box">
                        <span>no specific price</span>
                        <i class="bi bi-chevron-down"></i>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">+100 DT</a></li>
                            <li><a class="dropdown-item" href="#">80-100 DT</a></li>
                            <li><a class="dropdown-item" href="#">60-80 DT</a></li>
                            <li><a class="dropdown-item" href="#">40-60 DT</a></li>
                            <li><a class="dropdown-item" href="#">-40 DT</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">no specific price</a></li>
                        </ul>                        
                    </div>
                </div>
                <div class="bottom-specifics">
                    <div onclick="showOptions()" class="drop-box">
                        <span>no specific rating</span>
                        <i class="bi bi-chevron-down"></i>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">1 <i class="bi bi-star"></i></a></li>
                            <li><a class="dropdown-item" href="#">2 <i class="bi bi-star"></i></a></li>
                            <li><a class="dropdown-item" href="#">3 <i class="bi bi-star"></i></a></li>
                            <li><a class="dropdown-item" href="#">4 <i class="bi bi-star"></i></a></li>
                            <li><a class="dropdown-item" href="#">5 <i class="bi bi-star"></i></a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">no specific rating</a></li>
                        </ul>
                    </div>
                    <div onclick="showOptions()" class="drop-box">
                        <span>no specific preference</span>
                        <i class="bi bi-chevron-down"></i>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">group</a></li>
                            <li><a class="dropdown-item" href="#">one-to-one</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">no specific preference</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </form>
  
    `
}

generateInputSearchBox();
*/