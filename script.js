function toggleMenu(){
    const menu= document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    
    /*
    toggle adds the class open if it does not have it 
    and removes it if it is present
    */
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

