// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
const section1Element = document.getElementById("section1");
section1Element.addEventListener("click", toggle);

function toggle(e) {
  const element = e.target;
  element.classList.toggle("active");
}

function samlaFAQ(posts) {
  const faqSection = document.querySelector(".accordion");

  posts.forEach((post) => {
    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = post.title;

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.innerHTML = `<p>${post.body}</p>`;
    faqSection.appendChild(titleElement);
    faqSection.appendChild(descriptionElement);
  });

  const newTitles = document.querySelectorAll(".title");
  newTitles.forEach((title) => {
    title.addEventListener("click", toggle);
  });
}
fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  .then((response) => response.json())
  .then((posts) => samlaFAQ(posts))
  .catch((error) => console.error("Något gick fel!", error));
