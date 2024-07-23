// 3ways to fetch api

// one   =>using XMLHttpRequest

function sendHttpRequest(method, url, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = "json";
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = () => {
        if (xhr.status >= 400) reject(xhr.response);
        else resolve(xhr.response);
      };
      xhr.onerror = () => {
        reject("Something went wrong!");
      };
      xhr.send(JSON.stringify(data));
    });
  };
getButton.addEventListener("click", () => {
    sendHttpRequest("GET", "https://reqres.in/api/users")
      .then((responseData) => {
        dataDiv.textContent = JSON.stringify(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        dataDiv.textContent = JSON.stringify(error);
        console.error(error);
      });
  });
  
  postButton.addEventListener("click", () => {
    sendHttpRequest("POST", "https://reqres.in/api/register", {
      email: "eve.holt@reqres.in",
      password: "pistol",
    })
      .then((responseData) => {
        dataDiv.textContent = JSON.stringify(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        dataDiv.textContent = JSON.stringify(error);
        console.error(error);
      });
  }); 




// =================================================
// two    =>Using Fetch

// const sendHttpRequest = (method, url, data) => {
//     return fetch(url, {
//       method: method,
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" },
//     }).then((response) => {
//       console.log(response); 
//       if (response.status >= 400) {
//         return response.json().then((errorResponseData) => {
//           const error = new Error();
//           error.message = "Something went wrong!";
//           error.data = errorResponseData;
//           throw error;
//         });
//       }
//       return response.json();
//     });
//   };  







// =======================================================
// three  =>usig Axios
getButton.addEventListener("click", () => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        dataDiv.textContent = JSON.stringify(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        dataDiv.textContent = JSON.stringify(error);
        console.error(error);
      });
  });
  
  postButton.addEventListener("click", () => {
    axios
      .post("https://reqres.in/api/register", {
        email: "eve.holt@reqres.in",
        // password: "pistol",
      })
      .then((response) => {
        dataDiv.textContent = JSON.stringify(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        dataDiv.textContent = JSON.stringify(error);
        console.error(error);
      });
  });

