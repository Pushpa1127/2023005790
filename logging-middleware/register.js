const axios = require("axios");

async function register() {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/register",
      {
        email: "psanishe@gitam.in",
        name: "Sanishetty Pushpa",
        mobileNo: "9951425006",
        githubUsername: "https://github.com/Pushpa1127",
        rollNo: "2023005790",
        accessCode: "wgKtgZ"
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

register();