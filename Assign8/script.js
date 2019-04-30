var img = document.getElementsById("cute") // call for cute image

function userClick(){
    
    var click= document.getElementById("cute");
    var t= document.getElementById("text");
    
    //to make the mouse click twice without error
    if (click.style.display === "none") {
        click.style.display = "block";
        
        
    } else {
        click.style.display = "none";
   }
}