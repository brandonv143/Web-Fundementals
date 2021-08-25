function updateCounter(){
    var currentCount = parseInt(document.querySelector("#count").innerHTML);
    console.log(currentCount);
    document.querySelector("#count").innerHTML = currentCount+1;
}