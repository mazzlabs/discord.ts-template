import * as Discord from "discord.js";
import * as Binder from "./utils/eventsbinder";

import { Token } from "./token";

const Client: Discord.Client = new Discord.Client({ fetchAllMembers: true });

Client.on('error', console.error);

(async () => {
	await Binder.bind(Client);
	Client.login(Token);
})();
