(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "DemonWithAShotgun";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
      botName: "𝔾𝔽𝕃 𝔹𝕠𝕥",
      language: "english",
      chatLink: "https://raw.githubusercontent.com/DemonWithAShotgun/custom/master/lang/en.json",
      scriptLink: "https://rawgit.com/basicBot/source/master/basicBot.js",
      roomLock: false, // Requires an extension to re-load the script
      startupCap: 50, // 1-200
      startupVolume: 0, // 0-100
      startupEmoji: true, // true or false
      autowoot: true,
      autoskip: false,
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 180,
      afkRemoval: false,
      maximumDc: 30,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: true,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: true,
      voteSkipLimit: 3,
      historySkip: false,
      timeGuard: true,
      maximumSongLength: 10,
      autodisable: true,
      commandCooldown: 1,
      usercommandsEnabled: true,
      skipPosition: 3,
      skipReasons: [
      ["not music", "This is not music and is not allowed. "],
      ["history", "This song has been played too often. "],
      ["meme", "This song is not actual music and is not allowed. "],
      ["mix", "You played a mix, which is against the rules. "],
      ["sound", "The song you played had bad sound quality or no sound. "],
      ["nsfw", "The song you contained was NSFW (image or sound). "],
      ["unavailable", "The song you played was not available for some users. "]
      ],
      afkpositionCheck: 15,
      afkRankCheck: "ambassador",
      motdEnabled: false,
      motdInterval: null,
      motd: "Hosted for gflclan.com! No trolls and have fun!",
      filterChat: true,
      etaRestriction: false,
      welcome: true,
      opLink: null,
      rulesLink: "https://docs.google.com/document/d/1vD7FXySc8322B0o8nPp0FRvuiEALT92gYp4QPfkFWp4/edit?usp=sharing",
      themeLink: "https://docs.google.com/document/d/1mOzVD6UcFJYvHxD61p70FYI17RMB8Cj0HpC1JSD95Gg/edit?usp=sharing",
      fbLink: "https://www.facebook.com/gflclanofficial/",
      youtubeLink: "https://www.youtube.com/c/gflcommunity",
      website: "https://gflclan.com/",
      intervalMessages: [
          ["Hang out and keep playing some great tunes!"],
          ["Remember, you're on GFL's Plug.dj community!"],
          ["Keep up the awesome music and have fun!"],
          ["Thanks for joining GFL's Plug.dj!"]
          ],
      messageInterval: 10,
      songstats: true,
      commandLiteral: "!",
      blacklists: {
        NSFW: "https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json",
        OP: "https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json",
        BANNED: "https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json"
      }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
