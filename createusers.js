const createBtn = document.getElementById("post2");
createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameinput2").value;
  const surname = document.getElementById("surnameinput").value;
  const email = document.getElementById("emailinput").value;
  const service_id = document.getElementById("chooseplan").value;
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, surname, email, service_id }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (name && surname && email && service_id) {
        alert("New user have  been added!");
        setTimeout(() => {
          window.location.href = "users.html";
        }, 1000);
      } else {
        alert("Error has occured. Please try again");
      }
    });
});
