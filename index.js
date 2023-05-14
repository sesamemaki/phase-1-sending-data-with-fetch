// Add your code here

function submitData(name, email) {
  const userData = {
    name: "Byron",
    email: "Poodle@gmail.com",
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      const p = document.createElement("p");
      p.innerHTML = `${data.id}`;
      document.querySelector("body").appendChild(p);
    })
    .catch((error) => {
      document.body.innerHTML = error.message;
    });
}
