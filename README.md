# Discord Clan Rotator (Selfbot)

> ⚠️ **Warning**: This project uses a selfbot, which violates [Discord's Terms of Service](https://discord.com/terms).  
> It is provided **for educational purposes only**.  
> Use at your own risk. Your account may be **banned or disabled** if you use this script with a real user account.

---

## 🔧 Features

- Automatically switches your identity guild (clan) every 30 seconds.
- Customizable list of guild IDs to rotate through.
- Uses Axios to send HTTP PUT requests to Discord's private API.

---

## 📦 Requirements

- Node.js 16+
- A verified Discord user account
- Your Discord user token (⚠️ never share this)

---

## 🚀 Installation

```bash
git clone https://github.com/Kzr-Dev/Tag-Rotator.git
cd Tag-Rotator
npm install
````

---

## 🛠️ Usage

```bash
node index.js
```

---

## ✏️ Configuration

Edit the `clanIDList` in `index.js` to include the guild IDs (clan IDs) you want to rotate through:

```js
const clanIDList = [
    "1",
    "2"
];
```

---

## 📄 License

This project is licensed under the MIT License.

---

Made with 💻 by [Kzr-Dev](https://github.com/Kzr-Dev)
