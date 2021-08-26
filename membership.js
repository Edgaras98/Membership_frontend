const postBtn = document.getElementById("post");
postBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameinput").value;
  const price = document.getElementById("priceinput").value;
  const description = document.getElementById("descinput").value;
  fetch("http://localhost:3000/memberships", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, price, description }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (name && price && description) {
        alert("New plan have  been added!");
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        alert("Error has occured. Please try again");
      }
    });
});
