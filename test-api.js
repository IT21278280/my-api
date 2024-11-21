const axios = require("axios");

axios
  .get("https://my-api-production-85c5.up.railway.app/greet", {
    params: { name: "John" },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
