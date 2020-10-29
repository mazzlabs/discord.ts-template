import * as Discord from "discord.js";

import * as Logger from "./../utils/Logger";

export default async (Client: Discord.Client) => {
	Logger.log(`Client is ready and is logged in as ${Client.user.tag}!`);

	setInterval(() => {
		Client.user.setPresence({
			activity: {
				name: `!help • ${Client.users.cache.size} users | ${Client.guilds.cache.size} guilds`,
				type: "WATCHING",
			},
			status: "online",
		});
	}, 60000);
};
