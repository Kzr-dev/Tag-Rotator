const { Client } = require('discord.js-selfbot-v13');
const axios = require('axios');

const client = new Client({
    checkUpdate: false
});

const token = "your token";
const clanIDList = [
    "1st",
    "2nd, and more if you want"
]; 

let index = 0;

client.on('ready', () => {

    console.log(`${client.user.displayName} is ready`);

    setInterval(() => {
        const guildID = clanIDList[index % clanIDList.length];

        axios.put('https://discord.com/api/v9/users/@me/clan', {
            identity_guild_id: guildID,
            identity_enabled: true
        }, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(`Guild changed to ${guildID}`);
        }).catch(err => {
            console.error(`Error:`, err.response?.data || err.message);
        });
    }, 30000); //30 sec but you can change (its milliseconds)
    
    
});

client.login(token);
