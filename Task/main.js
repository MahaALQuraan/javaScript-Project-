
let image=document.querySelector("#mybtn");
let form=document.getElementById("myform");
let empty=document.getElementById("empty");
let container1=document.querySelector(".container");
let h4=document.querySelector(".h4");
form.addEventListener('submit',function(e){
    e.preventDefault();
    var search=document.getElementById("search").value;    
    var originalName=search.split(' ').join("");
    if( search == "" || search == undefined ){
        empty.innerHTML=`Not Result`;
        return;
       
    }
    
    fetch("https://api.github.com/users/"+originalName)
    .then((result)=>result.json())
    .then((data)=>{console.log(data)
        if(data.message == "Not Found"){
            // console.log("Not found");
             //document.getElementById("result").innerHTML = `<div>
            //<p>There is no account with this username : </p>
             //</div>
             //`
            result.innerHTML=`<p class="res">There is No account with this username : ${search} </p>`;
            return;
       }        
 
    // let uitwitter=(data)=>{
    //     return `<a href="https://www.twitter.com/${data}">${data}</a>`
    // }   
    let uiLocation = (data) =>{
         return `<a href="https://www.google.com/maps?q=${data}">${data}</a>`;
    }
    document.getElementById("result").innerHTML=`
    
    <img src="${data.avatar_url}"/>
    <div class="content">
    <div class=one>
    <div class=cont>
    <div class=name>
    <p class="firstname"> ${data.name || "No name"}</p>
    <p class="login">${data.login || null}</p>
    </div>
    <p>${data.created_at ||  "No created_at"}</p>
    
    </div>   
    <p class="bio">${data.bio || "This profile has no bio"}</p>
    </div>
  
<div class=two>
<p class=first>Repos <span>${data.public_repos || 0 }</span></p>
<p class=second >Followers <span>${data.followers || 0}</span></p>
<p class=third>Following <span>${data.following || 0}</span>  </p>
    
    
    </div>
    <div class=three>
    <div class=cont >
    <img src="images/icon-location.svg"  />
    <p class="${data.location ? 'grey' : 'myclass'}" > ${data.location ? uiLocation(data.location) : "Not Available" } </p>
    </div>

    <div class=cont>
    <img src="images/icon-twitter.svg"  />
    <p class="${data.twitter_username?'grey':'myclass'}">  ${data.twitter_username ? `<a href="https://twitter.com/${data.twitter_username}">${data.twitter_username}</a>`  : "" || "Not Available" }  </p>    </div>
    <div class=cont>
    <img src="images/icon-website.svg"  />

    <p class="${data.html_url?'grey':'myclass'}">${data.html_url ||"Not Available"}</p>
    </div>
   
    <div class=cont>
    <img src="images/icon-company.svg"  />
    <p class="${data.company?'grey':'myclass'}">${data.company || "Not Available"}</p>
    </div>
    </div>
     </div>`
    })
});

function darkmode() {

    let light1=document.querySelector(".h4");
    
    var SetTheme = document.body;
    SetTheme.classList.toggle("dark-mode");
    
    
        var theme;
    if (SetTheme.classList.contains("dark-mode")){
        console.log("Dark mode");
        theme="DARK";
        localStorage.setItem("light","theme");
        // light1.innerHTML=theme;
        image.src="images/icon-moon.svg"
        image.innerHTML=localStorage.getItem("image");
        //image.innerHTML=`<img src="images/icon-moon.svg">`;
}
    else {
        console.log("Light mode");
        theme="LIGHT";
        localStorage.setItem("light","theme");
        image.src="images/icon-sun.svg"
    //     light1.innerHTML=theme;
      image.innerHTML=localStorage.getItem("image");
        


    }
    
    
    // Save to Localstorage
    localStorage.setItem("PageTheme",JSON.stringify(theme));

    
     
}  

 
let GetTheme =JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);
if(GetTheme === "DARK"){
    document.body.classList="dark-mode";
    
}
if (GetTheme === "DARK"){
    theme="DARK";
    // light1.innerHTML=theme;
    image.src="images/icon-moon.svg";
    theme.innerHTML=localStorage.setItem("theme","DARK");
    image.innerHTML=localStorage.getItem("image");
}
    else {
    theme="LIGHT";
    //theme.innerHTML=localStorage.getItem("theme");
    // light1.innerHTML=theme;
    theme.innerHTML=localStorage.setItem("theme","LIGHT");
    image.src="images/icon-sun.svg"
    image.innerHTML=localStorage.getItem("image");
}
