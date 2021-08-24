<script>
function myFunction() {
    var x = document.createElement("VIDEO");

    if (x.canPlayType("video/mp4")) {
    x.setAttribute("src","movie.mp4");
}
    x.setAttribute("controls", "controls");
    document.body.appendChild(x);
}

function over(element) {
    play("mouseover");    
}
    
function pause(element) {
    pause("mouseout");    
}


</script>