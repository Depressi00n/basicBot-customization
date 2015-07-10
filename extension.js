(function () {
    var fork = "Yemasthui";
		
    function extend() {
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();
        
        bot.commands.ballCommand = {
            command: 'ask',
            rank: 'ambassador',
            type: 'exact',
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    //API.sendChat("/me Ask removido por Bible :3");
                }
            }
        };
        
        bot.loadChat();

    }

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "Farofa'sBot",
        language: "portuguese",
        startupCap: 1,
        startupVolume: 0,
        startupEmoji: true,
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/pt.json",
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 20,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: false,
        lockskipPosition: 3,
        lockskipReasons: [
        	["tema", "A música não se encaixa nos padrões da sala. "],
        	["op", "Essa música está na lista OP. "],
        	["historico", "A música ainda está no histórico. "],
        	["mix", "Você tocou um mix (muito longo) - não permitido. "],
        	["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
        	["nsfw", "A música que você tocou é NSFW (impróprio). "],
        	["indisponivel", "A música que você tocou está indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 5,
        motd: "!roulette",
        filterChat: false,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: "https://www.facebook.com/farofadasdivaspop?ref=ts&fref=ts",
        youtubeLink: null,
        website: "http://farofa-pop.blogspot.com.br",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    $.getScript("https://rawgit.com/Yemasthui/basicBot/master/basicBot.js", extend);
   

}).call(this);
