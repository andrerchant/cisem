(()=>{
    let toggleBtn = document.getElementById("switch");
    let menu = document.getElementById("documenter_sidebar");
    let menuSmall = document.getElementById("menu-back");
    toggleBtn.addEventListener('click', toogleClass);
    menuSmall.addEventListener('click', toogleClass);

    function loop(){
        if (menu.classList.length > 0){
            menu.classList.forEach(clase=>{
                if (clase == "hidded") {
                    return true;
                }else{
                    return false        
                }
            })
        }else{
            return false
        }
    }

    function toogleClass(){
        let exist = loop();
        if (exist==false){
            if (menu.classList.length == 0){
                menu.classList.add("hidded");
                menuSmall.classList.add("hidded");
            }
            else{
                menu.className += ' ' + "hidded";
                menuSmall.className += ' ' + "hidded";
            }
        }else{
            menu.classList.remove("hidded");
            menuSmall.classList.remove("hidded");
        }
    }

})()