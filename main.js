/*----------------------------------------------MENU SHOW---------------------------------------------------*/

const showmenu = (toogleid,navid)=>{
    const toogle =document.getElementById(toogleid),
    nav=document.getElementById(navid);
    if(toogle && nav){
        toogle.addEventListener("click",()=>{
            nav.classList.toggle("show");
        });
    }

};
showmenu("nav-toogle","nav-menu");

/*-------------------------------------------ACTIVE AND REMOVE MENU----------------------------------------*/

const navlink=document.querySelectorAll(".nav-link");
function linkaction(){
    /*--------------------TODO----------------------------------------*/
            /*-----if we remove line 19,18 result is same---*/

            // tut says active link
    navlink.forEach(n=>n.classList.remove("active"));
    this.classList.add("active");

    //remove menu mobile
    const navmenu=document.getElementById("nav-menu");
    navmenu.classList.remove("show");
    }

navlink.forEach(n=>n.addEventListener("click",linkaction));

/*------------------------------------------SCROLL REVEAL ANIMATION--------------------------------------*/
const sr = ScrollReveal({
    origin:"top",
    distance:"80px",
    duration:2000,
    reset:true
});

                                               /* scroll home*/

sr.reveal(".home-title",{});
sr.reveal(".button",{delay:200});
sr.reveal(".home-img",{delay:400});
sr.reveal(".home-social-icon",{interval:200});

                                                /*scroll about*/

sr.reveal(".about-img",{});
sr.reveal(".about-subtitle",{delay:200});
sr.reveal(".about-text",{delay:400});

                                                /*scroll skills*/

sr.reveal(".skills-subtitle",{});
sr.reveal(".skills-text",{delay:200});
sr.reveal(".skills-data",{interval:200});
sr.reveal(".skills-img",{delay:400});

                                                /*scroll work*/


sr.reveal(".work-img",{interval:200});

                                                /*scroll contact*/

sr.reveal(".contact-input",{interval:350});


/*-----------------------------------------------SUBMIT BUTTON ALERT--------------------------------*/


document.querySelector(".contact-button").addEventListener("click",function(){
    alert("Thank You your response has been sumbited");
     const contact_input=document.querySelectorAll(".contact-input");
     contact_input.forEach(n=>n.value="");

});