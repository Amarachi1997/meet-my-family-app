import Child from "./Child.js";

//creating the html layout
let main = document.querySelector("section");

main.innerHTML = `
<h1>The Chiaha Family App</h1>
<p>Welcome to the chiaha family app. The first child built it just to tell you more about the family. It was built using Javascript</p>
<p>This Family has a total of 7 children. You can know more about each child by entering ther positions like so: </p>
<p><span>one</span>, <span>two</span> ,<span>three</span>,<span>four</span> , <span>five</span>, <span>six</span>, <span>seven</span></p>

`;

//creating the grid elements
let formFlex = document.createElement("div");
let firstDiv = document.createElement("div");
let secondDiv = document.createElement("div");

//adding classes to the grid elements
// formFlex.classList.add("grid-container");
// firstDiv.classList.add("grid-item");
// secondDiv.classList.add("grid-item");

//assigning arent and child to grid elements
formFlex.append(firstDiv);
formFlex.append(secondDiv);

let figure = document.createElement("figure");

firstDiv.append(figure);
secondDiv.innerHTML = `
<input type="text" name="childName" id="childName" placeholder="enter childs postion">
<button type="button">Submit Position</button>
`;

//appending the grid container to the main sectio
main.append(formFlex);

//Javascript starts here
const firstChild = new Child(
  "First Child",
  "Amara",
  23,
  "purple",
  "red",
  "Houdegbe",
  "Daddy"
);

const secondChild = new Child(
  "Second Child",
  "Chioma",
  20,
  "black",
  "yellow",
  "Espam",
  "Mummy"
);

const thirdChild = new Child(
  "Third Child",
  "Ekpere",
  19,
  "blue",
  "pink",
  "UniIlorin",
  "Daddy"
);

const fourthChild = new Child(
  "Fourth Child",
  "Chuchu",
  16,
  "Grey",
  "pink",
  "Unizik",
  "Daddy"
);

const fifthChild = new Child(
  "Fifth Child",
  "Uzo",
  14,
  "Green",
  "none",
  "Teen Pride",
  "Daddy"
);

const sixthChild = new Child(
  "Sixth Child",
  "Babaye",
  12,
  "pink",
  "none",
  "Teen Pride",
  "none"
);

const lastChild = new Child(
  "Seventh Child",
  "Nene",
  8,
  "pink",
  "green",
  "Teen Pride",
  "Mummy"
);

var article = document.createElement("article");
const mainFunction = (child) => {
  let mainDiv = document.createElement("div");

  let childInfo = `
        <h5>You Selected the ${child.title}</h5>
        <h1>${child.title} Information</h1>
        <p>Name: ${child.name}</p>
        <p>Age: ${child.age}</p>
        <p>Favourite Color: ${child.color.best}</p>
        <p>Worst Color: ${child.color.worst}</p>
        <p>Attends ${child.schoolClass} school</p>
        <p>Favourite parent is: ${child.faveParent}</p>
        <br>
        <a href="index.html">Refresh Page</a>
    `;
  mainDiv.innerHTML = childInfo;
  article.append(mainDiv);
  document.body.append(article);
};

document.querySelector("button").addEventListener("click", function () {
  const enteredChild = document.querySelector("#childName").value;
  console.log(enteredChild);

  switch (enteredChild) {
    case "one":
      article.innerHTML = "";
      mainFunction(firstChild);
      break;
    case "two":
      article.innerHTML = "";
      mainFunction(secondChild);
      break;
    case "three":
      article.innerHTML = "";
      mainFunction(thirdChild);
      break;
    case "four":
      article.innerHTML = "";
      mainFunction(fourthChild);
      break;
    case "five":
      article.innerHTML = "";
      mainFunction(fifthChild);
      break;
    case "six":
      article.innerHTML = "";
      mainFunction(sixthChild);
      break;
    case "seven":
      article.innerHTML = "";
      mainFunction(lastChild);
      break;
    default:
      document.body.innerHTML = `<h1>oops, enetered wrong child number</h1>
            <a href="index.html">Try Again</a>
            `;

      console.error("Entered Worng Child Name");
      break;
  }
});
