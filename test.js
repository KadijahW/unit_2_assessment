document.addEventListener('DOMContentLoaded', () => {
    fetchMovie();
    formListener();

})



const selectButton = (arr) => {
    let newDiv = document.querySelector('#selectButton')

    let select = document.createElement("select")
    select.id = "select"
    newDiv.appendChild(select)

    
    for(let i = 0;  i <= arr.length - 1; i++) { 

        let newSelect = document.createElement("option");
        newSelect.value = arr[i].id
        newSelect.innerText  = arr[i].title;
        
        // console.log(arr)
        // console.log(newSelect);
        // console.log(title);
        
    select.appendChild(newSelect);
    }
    select.addEventListener('change', movieProperties)

 }

function fetchMovie() {
    fetch("https://ghibliapi.herokuapp.com/films/")
    .then((response) =>{
        // console.log(response)
        return response.json();
    })
    .then(data => {
        // for(let i = 0; i < title.length; i++){
            // title.innerText= data[i].title
            // console.log(title)
            selectButton(data)
        // }
        // console.log(data);
        //  movieComment(data)
    })
    .catch(err => {
        console.log("err: " + err)
    })
}

const movieProperties = () => {
let select = document.querySelector("#select")

let container = document.createElement("div")
container.id = "mainContainer"

let innerContainer = document.createElement('div')
innerContainer.id = "innerContainer"

let movieTitle = document.createElement('h3')
movieTitle.id = "title"
let title = document.querySelector("#title")

let movieYear = document.createElement('p')
movieYear.id = "year"
let year = document.querySelector("#year")

let movieDescription = document.createElement('p')
movieDescription.id = "description"
let description = document.querySelector("#description")

let id = select.value
   
            fetch("https://ghibliapi.herokuapp.com/films/" + id )

            .then((response) =>{
                return response.json();
                console.log(response)
            })
            .then(data => {
                console.log(data.title)
               movieTitle.innerText = data.title
                // console.log(movieTitle)
                
                movieYear.innerText = data.release_date
                // console.log(movieYear)
        
                movieDescription.innerText = data.description 
                // console.log(movieDescription) 
        
                document.body.appendChild(container);

            container.appendChild(movieTitle) 
            container.appendChild(movieYear)
            container.appendChild(movieDescription)
            })
            }
            
 const formListener = () => {
     let form = document.querySelector('#form')
     form.addEventListener('submit', (event) => {
    event.preventDefault();
    movieComment();
 })
}

const movieComment = () => {
    let movieTitle = document.querySelector("h3").innerText
    let input = document.querySelector("#review").value
    let commentList = document.querySelector("#submittedReview")
    
    // movieTitle.bold();

    let review = document.createElement("li")
    review.innerHTML = `${movieTitle}: ${input}`

    // console.log(review)
    // console.log(commentList)

    commentList.appendChild(review)

}
