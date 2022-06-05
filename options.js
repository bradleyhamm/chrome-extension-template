const ELEMENTS = {
  username: document.getElementById("username"),
  password: document.getElementById("password"),
  form: document.querySelector("form")
};

const main = async () => {
  const {username, password} = await chrome.storage.sync.get(["username", "password"]);
  ELEMENTS.username.value = username || "";
  ELEMENTS.password.value = password || "";

  ELEMENTS.form.addEventListener("submit", async () => {
    await chrome.storage.sync.set({
      username: ELEMENTS.username.value,
      password: ELEMENTS.password.value
    });
  });
};

main();
