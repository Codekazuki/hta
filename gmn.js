console.log("hta class");

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data from the server.");
      }
    }, 2000);
  });
}

fetchDataFromServer()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Server request completed.");
  });
