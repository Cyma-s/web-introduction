function likeMovie() {
    let name = document.getElementById("visitor").value;
    let movies = document.querySelectorAll(".movie");
    let count = 0;
    ​
    movies.forEach(element => {
        if (element.checked) {
            count++;
        }
    });
    ​
    alert(name + "님, 저와 " + count + "개의 취향이 같으시네요!");
}