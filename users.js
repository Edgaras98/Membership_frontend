const sectionUser = document.getElementById("mainsection2");
const sortOrder = document.getElementById("sortOrder");

let orderSelection = "a-z";
const url = "http://localhost:3000/users";
function getData() {
  fetch(`${url}/${orderSelection}`)
    .then((res) => res.json())
    .then((data) => {
      showUser(data);
    });
}
getData();

function showUser(data) {
  sectionUser.innerHTML = "";
  data.forEach((element) => {
    const div = document.createElement("div");
    const nameSurname = document.createElement("h2");
    const email = document.createElement("p");
    const membr = document.createElement("p");
    
    div.style.padding = "0.5rem";
    div.style.width = "25rem";
    div.style.margin = "2rem";
    div.style.height = "10rem";
    div.style.border = "2px lightgray";
    div.style.boxShadow = "6px 3px 4px 2px rgba(0, 0, 0, 0.18)";

    nameSurname.textContent = `${element.name} ${element.surname}`;
    nameSurname.style.fontSize = "1.5rem";
    email.style.backgroundColor = "white";
    email.textContent = `Email: ${element.email}`;
    membr.style.backgroundColor = "white";
    membr.textContent = `Membership plan: ${element.service_id}`;

    div.append(nameSurname, email, membr);
    sectionUser.appendChild(div);
  });
}

document.getElementById("createuser").addEventListener("click", () => {
  location.href = "/createuser.html";
});

document.getElementById("sortOrder").addEventListener("click", (e) => {
  const text = e.target.textContent;
  if (text.includes("a-z")) {
    e.target.textContent = text.replace("a-z", "z-a");
    orderSelection = "z-a";
  } else {
    e.target.textContent = text.replace("z-a", "a-z");
    orderSelection = "a-z";
  }
  getData();
});
