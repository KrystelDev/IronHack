const getText = () => {
  fetch("sample.txt")
    .then((response) => response.text())
    .then((data) => (document.querySelector("#output").innerText = data))
    .catch((err) => console.log(err));
};

document.querySelector("#getText").addEventListener("click", getText);

//
const getJson = () => {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let userData = "";
      data.forEach((user) => {
        userData += ` 
        <ul> 
            <li>${user.name}</li>
            <li>${user.email}</li>
            <li>${user.id}</li>
        </ul>`;
        document.querySelector("#output").innerText += userData;
      });
    })
    .catch((err) => console.log(err));
};
document.querySelector("#getJson").addEventListener("click", getJson);

//

const getExternalAPiInfo = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => {
      let externalApiInfo = "";
      res.forEach((post) => {
        externalApiInfo += `
              <div class="card" style="width: 15rem">
                <img
                    class="card-img-top"
                    src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltde04169680d1e8d6/6333adfb110d52448841a252/GettyImages-1243560834.jpg"
                    alt="A cool image about the Wu"
                />
                <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">
                        ${post.body}
                    </p>
                </div>
              </div>
              `;
      });
      document.querySelector("#output").innerHTML += externalApiInfo;
    })
    .catch((error) => console.log(error));
};
document
  .querySelector("#getHere")
  .addEventListener("click", getExternalAPiInfo);
