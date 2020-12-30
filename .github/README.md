<div align="center">
    <h1>Discord.TS</h1>
    <p>A template made for developers using TypeScript to code their Discord bot 🌠</p>
    <p>
    <img src="https://travis-ci.com/mazzlabs/discord.ts.svg?branch=main" />
    <img src="https://badges.depfu.com/badges/7a05ef567b52d7289ddd927af4c51c0d/status.svg" />
    <img src="https://badges.depfu.com/badges/7a05ef567b52d7289ddd927af4c51c0d/overview.svg" />
    </p>
</div>

## Table of contents
- [About](#about)
- [Prerequesites](#prerequesites)
- [Installation](#installation)
- [Structure](#structure)
- [Report a bug](#report-a-bug)

## About
The main purpose of this template is to save your time. Don't spend hours on setting up a bot: we got you covered!

## Prerequesites
* Have a recent **Node.JS** version installed on your machine.
* Know where your bot's token is.
* Create a Genius [API key](https://genius.com/api-clients).

## Installation
1. Start by cloning the repo - ```git clone https://github.com/mazzlabs/discord.ts.git```
2. ```cd``` into the created folder and install dependencies - ```npm install```
3. Add your bot token and your Genius API into the ```.env``` file
4. Compile your code - ```npm install -g typescript && tsc```

## Structure
The template's code is in the ```src/``` folder, divided into subfolders that are pretty self-explanatory.
- [```commands/```](https://github.com/mazzlabs/discord.ts/tree/master/src/commands) → Folder containing all the commands
    - [```fun/```](https://github.com/mazzlabs/discord.ts/tree/master/src/commands/fun) → Folder containing fun commands
    - [```game/```](https://github.com/mazzlabs/discord.ts/tree/master/src/commands/game) → Folder containing game commands
    - [```info/```](https://github.com/mazzlabs/discord.ts/tree/master/src/commands/info) → Folder containing info commands
    - [```moderation/```](https://github.com/mazzlabs/discord.ts/tree/master/src/commands/moderation) → Folder containing moderation commands
    - [```music/```](https://github.com/mazzlabs/discord.ts/tree/master/src/commands/music) → Folder containing music commands
- [```events/```](https://github.com/mazzlabs/discord.ts/tree/master/src/events) → Folder containing events
- [```utils/```](https://github.com/mazzlabs/discord.ts/tree/master/src/utils) → Folder containing various util files

I have added several commands and events in each subfolder that you can already use :wink:

## Report a bug
You can report an issue [here](https://github.com/mazzlabs/discord.ts-template/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc). <br>
You may also create a pull request [at this link](https://github.com/mazzlabs/discord.ts-template/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc).
