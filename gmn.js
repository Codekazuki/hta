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
async function displayRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const user = data.results[0];

    console.log(`Name: ${user.name.first} ${user.name.last}`);
    console.log(`Email: ${user.email}`);
    console.log(`Location: ${user.location.city}, ${user.location.country}`);
    console.log(`Profile Picture: ${user.picture.large}`);
  } catch (error) {
    console.error("Error fetching random user:", error);
  }
}

displayRandomUser();
console.log("hhh");
