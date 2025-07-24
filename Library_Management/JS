let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.createElement("div");
spinner.className = "spinner-border text-primary d-none"; // text color + hide initially
spinner.setAttribute("role", "status");
searchResults.appendChild(spinner);

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        spinner.classList.remove("d-none");
        let options = {
            method: "GET"
        };
        fetch(`https://apis.ccbp.in/book-store?title=${searchInput.value}`, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                spinner.classList.add("d-none");

                let a = data.search_results;
                searchResults.innerHTML="";
                for (let char of a) {
                    let cont = document.createElement("div");
                    let image = document.createElement("img");
                    image.src = char.imageLink;
                    cont.appendChild(image);
                    let author = document.createElement("p");
                    author.textContent = char.author;
                    cont.appendChild(author);
                    searchResults.appendChild(cont);

                }
            });
    }
});
