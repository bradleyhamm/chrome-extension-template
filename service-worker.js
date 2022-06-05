const settings = {
  username: null,
  password: null
};

const main = async () => {
  await initCredentials();

  await chrome.notifications.create({
    type: "basic",
    iconUrl: "profile.png",
    title: "Success!",
    message: `Example Notification`
  });
};

const initCredentials = async () => {
  const {username, password} = await chrome.storage.sync.get(["username", "password"]);

  settings.username = username;
  settings.password = password;

  chrome.storage.onChanged.addListener(changes => {
    for (let [name, { newValue }] of Object.entries(changes)) {
      if (name in settings) {
        settings[name] = newValue;
      }
    }
  });
};

main();
