function openHeader() {
    var header = document.getElementById("header");
    if (header.classList.contains("headerOpen")){
        header.classList.remove("headerOpen")

    }else{
        header.classList.add("headerOpen");
    }
}



