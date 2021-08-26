const section = document.getElementById("mainsection");
const nextForm = document.getElementById("newMembership");
fetch("http://localhost:3000/memberships/")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");
      const h2Price = document.createElement("h2");
      const pDesc = document.createElement("p");
      const btn = document.createElement("button");
      //Styling
      div.style.paddingTop = "3rem";
      div.style.width = "25rem";
      div.style.margin = "2rem";
      div.style.height = "10rem";
      div.style.border = "2px lightgray";
      div.style.boxShadow = "6px 3px 4px 2px rgba(0, 0, 0, 0.18)";

      h2Price.textContent = `${element.price}$ ${element.name}`;
      h2Price.style.fontSize = "1.5rem";

      pDesc.textContent = element.description;
      pDesc.style.backgroundColor = "white";
      pDesc.style.borderBottom = "1px solid gray";
      pDesc.style.padding = "0.5rem";

      btn.textContent = "Delete";
      btn.style.backgroundColor = "red";
      btn.style.cursor = "pointer";
      btn.style.border = "none";
      btn.style.color = "white";
      btn.style.marginLeft = "15rem";

      //btn DELETE
      btn.addEventListener("click", (e) => {
        fetch("http://localhost:3000/memberships/" + element._id, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            alert("Plan has been Deleted");
            setTimeout(() => {
              window.location.href = "index.html";
            });
          });
      });

      div.append(h2Price, pDesc, btn);
      section.appendChild(div);
    });
  });

nextForm.addEventListener("click", (e) => {
  location.href = "/membership.html";
});
