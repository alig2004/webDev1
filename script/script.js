//function to take in users favourite marvel comic and print it below within "Wow! I love (comic name) as well!"
function messageOutputMar(){
    let name = document.getElementById('marvel').value;

    //preventing empty input
    if (name == '') {
        return false;
    }

    //printing with input
    document.getElementById("marvelComic").textContent = "Wow! I love " + name + " as well!";
}


//function to take in users favourite dc comic and print it below within "Wow! I love (comic name) as well!"
function messageOutputDC(){
    let name = document.getElementById('dc').value;

    //preventing empty input
    if (name =='') {
        return false;
    }

    //printing with input
    document.getElementById("dcComic").textContent = "Wow! I love " + name + " as well!";
}


//array of marvel comics
const marvelComic = [
    'Daredevil', 'The X-Men', 'Deadpool'
];

// Function to display list of comics on the webpage
function displayComics() {
    console.log(document.title);
    if(document.title != "Marvel Comics") return;

    const comicList = document.getElementById('comic-list');

    marvelComic.forEach(comic => {
        // Create a new list item element
        const listItem = document.createElement('li');
        
        // Set the text content of the list item
        listItem.textContent = comic;

        // Append the list item to the unordered list
        comicList.appendChild(listItem);
    });
}

displayComics();


const comicRec = {
    name: '52',
    firstIssue: 'May 10, 2006',
    finalIssue: 'May 2, 2007', 
    numberIssues: 52
};
  
// Function to display comic information on the webpage
function displayComicInfo() {
    if(document.title != "Comic Stuff") return;

    //Select the div with id comic-info
    const comicInfoContainer = document.getElementById('comic-info');

    console.log("Lol");
    // Display the comic object properties on the webpage
    comicInfoContainer.innerHTML = `
      <p>Name: ${comicRec.name}</p>
      <p>First Issue Release: ${comicRec.firstIssue}</p>
      <p>Final Issue Release: ${comicRec.finalIssue}</p>
      <p>Total Number of Issues: ${comicRec.numberIssues}</p>
    `;
}
  
// Call the function to display comic information
displayComicInfo();


function validateForm() {
    //retrieving form values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    //preventing empty input
    if (name == '' || email == '' || message == '') {
        alert('Name, email and message are required');
        return false;
    }

    //validating email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    //if all validations pass
    return true;
}