const axios = require("axios");

async function auth() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/auth",
      {
        email: "psanishe@gitam.in",
        name: "sanishetty pushpa",
        rollNo: "2023005790",
        accessCode: "wgKtgZ",
        clientID: "2a7af8f2-5762-4109-941e-20c998ad6031",
        clientSecret: "qjVjHcgRqWYyqbtF"
      }
    );

    console.log(response.data);

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

auth();