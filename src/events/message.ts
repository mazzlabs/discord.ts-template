import * as Discord from "discord.js";
import * as Fs from "fs";

import * as Logger from "./../utils/Logger";

export default async (Client: Discord.Client, message: Discord.Message) => {
	if (message.author.bot || !message.guild) {
		return;
	}

	const prefix = ""; // whatever you want!

	if (message.mentions.has(Client.user, { ignoreDirect: false, ignoreEveryone: true, ignoreRoles: true }) && message.content.split(" ").length == 1) {
		message.reply(`Hey, I'm ${Client.user.username}! Your current prefix is \`${prefix}\` \n→ help message: \`${prefix}help\`.`);
	}

	const msg: string = message.content;
	const args: string[] = message.content.slice(prefix.length).trim().split(" ");
	const cmd: string = args.shift().toLowerCase();

	if (!msg.startsWith(prefix)) {
		return;
	}

	try {
		require(checkFolders(cmd)).run(Client, message, args);
		Logger.log(`${message.author.tag} just used the ${cmd} power in ${message.guild.name}.`);
	} catch (err) {
		Logger.log(`The command ${message.author.tag} tried to call in ${message.guild.name} doesen't seem to exist.`);
	}

	function checkFolders(command: string) {
		let folders = ["moderation", "fun", "music", "info", "game"];
		var files: string[];
		var finalPath: string;

		folders.forEach(folder => {
			files = Fs.readdirSync(`./src/commands/${folder}`);

			files.forEach(file => {
				if (file.split(".")[0] == command) {
					return finalPath = `./../commands/${folder}/${file.split(".")[0]}.js`;
				}
			});
		});

		return finalPath;
	}
};
