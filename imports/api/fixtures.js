import { Meteor } from 'meteor/meteor';
import Links from './collections/Links.js';
import Records from './collections/Records.js';

Meteor.startup(() => {
  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }

  // if Records is empty
  if (Records.find().count() === 0) {
    const data = [
      {
        "RANK": 1,
        "TITLE": "FINAL FANTASY VII",
        "POINTS": 71,
        "PLATFORM": "PlayStation",
        "YEAR": 1997,
        "DEVELOPER": "Squaresoft",
        "PUBLISHER": "SONY",
        "GENRE": "RPG",
        "TYPE": "JRPG",
        "EP": 15,
        "DIED": 8,
        "TIME": 268819,
        "SERIES": "Final Fantasy"
      },
      {
        "RANK": 2,
        "TITLE": "THIEF II: THE METAL AGE",
        "POINTS": 70,
        "PLATFORM": "PC",
        "YEAR": 2000,
        "DEVELOPER": "Looking Glass",
        "PUBLISHER": "Eidos",
        "GENRE": "Adventure",
        "TYPE": "1st person stealth",
        "EP": 33,
        "DIED": 241,
        "TIME": 196280,
        "SERIES": "Thief"
      },
      {
        "RANK": 3,
        "TITLE": "TOMB RAIDER",
        "POINTS": 69,
        "PLATFORM": "PlayStation",
        "YEAR": 1996,
        "DEVELOPER": "Core",
        "PUBLISHER": "Eidos",
        "GENRE": "Action/Adv",
        "TYPE": "3rd person adventure",
        "EP": 1,
        "DIED": 30,
        "TIME": 68460,
        "SERIES": "Tomb Raider"
      },
      {
        "RANK": 4,
        "TITLE": "CHRONO TRIGGER",
        "POINTS": 68,
        "PLATFORM": "SNES",
        "YEAR": 1995,
        "DEVELOPER": "Squaresoft",
        "PUBLISHER": "Squaresoft",
        "GENRE": "RPG",
        "TYPE": "JRPG",
        "EP": 44,
        "DIED": 4,
        "TIME": 147224,
        "SERIES": "Chrono"
      },
      {
        "RANK": 5,
        "TITLE": "GHOULS 'N GHOSTS",
        "POINTS": 67,
        "PLATFORM": "Arcade",
        "YEAR": 1988,
        "DEVELOPER": "Capcom",
        "PUBLISHER": "Capcom",
        "GENRE": "Action",
        "TYPE": "2D side scrolling action platformer",
        "EP": 58,
        "DIED": 141,
        "TIME": 12164,
        "SERIES": "Ghosts 'n Goblins"
      },
      {
        "RANK": 6,
        "TITLE": "THIEF",
        "POINTS": 66,
        "PLATFORM": "PC",
        "YEAR": 1998,
        "DEVELOPER": "Looking Glass",
        "PUBLISHER": "Eidos",
        "GENRE": "Adventure",
        "TYPE": "1st person stealth",
        "EP": 12,
        "DIED": 321,
        "TIME": 203789,
        "SERIES": "Thief"
      },
      {
        "RANK": 7,
        "TITLE": "SUPER MARIO KART",
        "POINTS": 65,
        "PLATFORM": "SNES",
        "YEAR": 1992,
        "DEVELOPER": "Nintendo",
        "PUBLISHER": "Nintendo",
        "GENRE": "Sport",
        "TYPE": "2D kart racer",
        "EP": 27,
        "DIED": 68,
        "TIME": 25171,
        "SERIES": "Mario Kart"
      },
      {
        "RANK": 8,
        "TITLE": "THE TALOS PRINCIPLE",
        "POINTS": 64,
        "PLATFORM": "PC",
        "YEAR": 2014,
        "DEVELOPER": "CroTeam",
        "PUBLISHER": "Devolver",
        "GENRE": "Adventure",
        "TYPE": "1st person puzzle / adventure",
        "EP": 13,
        "DIED": 67,
        "TIME": 138700,
        "SERIES": "Talos Principle"
      },
      {
        "RANK": 9,
        "TITLE": "RESIDENT EVIL",
        "POINTS": 63,
        "PLATFORM": "PlayStation",
        "YEAR": 1996,
        "DEVELOPER": "Capcom",
        "PUBLISHER": "Capcom",
        "GENRE": "Action/Adv",
        "TYPE": "Survival horror",
        "EP": 3,
        "DIED": 22,
        "TIME": 48930,
        "SERIES": "Resident Evil"
      },
      {
        "RANK": 10,
        "TITLE": "SUPER MARIO BROS.",
        "POINTS": 62,
        "PLATFORM": "NES",
        "YEAR": 1985,
        "DEVELOPER": "Nintendo",
        "PUBLISHER": "Nintendo",
        "GENRE": "Action",
        "TYPE": "2D side scrolling platformer",
        "EP": 30,
        "DIED": 75,
        "TIME": 16265,
        "SERIES": "Super Mario Bros"
      },
      {
        "RANK": 11,
        "TITLE": "METAL SLUG X",
        "POINTS": 61,
        "PLATFORM": "Arcade",
        "YEAR": 1999,
        "DEVELOPER": "Nazca",
        "PUBLISHER": "SNK",
        "GENRE": "Action",
        "TYPE": "2D side scrolling run 'n' gun",
        "EP": 62,
        "DIED": 113,
        "TIME": 9184,
        "SERIES": "Metal Slug"
      },
      {
        "RANK": 12,
        "TITLE": "METAL SLUG 2",
        "POINTS": 60,
        "PLATFORM": "Arcade",
        "YEAR": 1996,
        "DEVELOPER": "Nazca",
        "PUBLISHER": "SNK",
        "GENRE": "Action",
        "TYPE": "2D side scrolling run 'n' gun",
        "EP": 46,
        "DIED": 105,
        "TIME": 7568,
        "SERIES": "Metal Slug"
      },
      {
        "RANK": 13,
        "TITLE": "METAL SLUG",
        "POINTS": 59,
        "PLATFORM": "Arcade",
        "YEAR": 1998,
        "DEVELOPER": "Nazca",
        "PUBLISHER": "SNK",
        "GENRE": "Action",
        "TYPE": "2D side scrolling run 'n' gun",
        "EP": 37,
        "DIED": 201,
        "TIME": 12879,
        "SERIES": "Metal Slug"
      },
      {
        "RANK": 14,
        "TITLE": "AZURE DREAMS",
        "POINTS": 58,
        "PLATFORM": "PlayStation",
        "YEAR": 1997,
        "DEVELOPER": "Konami",
        "PUBLISHER": "Konami",
        "GENRE": "RPG",
        "TYPE": "Roguelike / JRPG",
        "EP": 67,
        "DIED": 29,
        "TIME": 339577,
        "SERIES": "Azure Dreams"
      },
      {
        "RANK": 15,
        "TITLE": "SYSTEM SHOCK 2",
        "POINTS": 57,
        "PLATFORM": "PC",
        "YEAR": 1999,
        "DEVELOPER": "Looking Glass",
        "PUBLISHER": "EA",
        "GENRE": "Action/Adv",
        "TYPE": "1st person adventure / RPG / Survival horror",
        "EP": 20,
        "DIED": 228,
        "TIME": 156470,
        "SERIES": "System Shock"
      },
      {
        "RANK": 16,
        "TITLE": "PORTAL 2",
        "POINTS": 56,
        "PLATFORM": "PC",
        "YEAR": 2011,
        "DEVELOPER": "Valve",
        "PUBLISHER": "Valve",
        "GENRE": "Adventure",
        "TYPE": "1st person puzzle / adventure",
        "EP": 52,
        "DIED": 21,
        "TIME": 64579,
        "SERIES": "Portal"
      },
      {
        "RANK": 17,
        "TITLE": "HALF-LIFE",
        "POINTS": 55,
        "PLATFORM": "PC",
        "YEAR": 1998,
        "DEVELOPER": "Valve",
        "PUBLISHER": "Sierra",
        "GENRE": "Action/Adv",
        "TYPE": "1st person shooter",
        "EP": 39,
        "DIED": 430,
        "TIME": 83622,
        "SERIES": "Half-Life"
      },
      {
        "RANK": 18,
        "TITLE": "TENCHU",
        "POINTS": 54,
        "PLATFORM": "PlayStation",
        "YEAR": 1998,
        "DEVELOPER": "Acquire",
        "PUBLISHER": "Activision",
        "GENRE": "Action/Adv",
        "TYPE": "3rd person stealth / hack 'n' slash",
        "EP": 18,
        "DIED": 11,
        "TIME": 30975,
        "SERIES": "Tenchu"
      },
      {
        "RANK": 19,
        "TITLE": "TENCHU 2",
        "POINTS": 53,
        "PLATFORM": "PlayStation",
        "YEAR": 2000,
        "DEVELOPER": "Acquire",
        "PUBLISHER": "Activision",
        "GENRE": "Action/Adv",
        "TYPE": "3rd person stealth / hack 'n' slash",
        "EP": 49,
        "DIED": 59,
        "TIME": 149739,
        "SERIES": "Tenchu"
      },
      {
        "RANK": 20,
        "TITLE": "GUNSTAR HEROES",
        "POINTS": 52,
        "PLATFORM": "Mega Drive",
        "YEAR": 1993,
        "DEVELOPER": "Treasure",
        "PUBLISHER": "SEGA",
        "GENRE": "Action",
        "TYPE": "2D side scrolling run 'n' gun",
        "EP": 71,
        "DIED": 66,
        "TIME": 30748,
        "SERIES": "Gunstar Heroes"
      },
      {
        "RANK": 21,
        "TITLE": "FINAL FIGHT",
        "POINTS": 51,
        "PLATFORM": "Arcade",
        "YEAR": 1989,
        "DEVELOPER": "Capcom",
        "PUBLISHER": "Capcom",
        "GENRE": "Action",
        "TYPE": "2D side scrolling beat 'em up",
        "EP": 51,
        "DIED": 85,
        "TIME": 9525,
        "SERIES": "Final Fight"
      },
      {
        "RANK": 22,
        "TITLE": "SILENT HILL 2",
        "POINTS": 50,
        "PLATFORM": "PlayStation 2",
        "YEAR": 2001,
        "DEVELOPER": "Konami",
        "PUBLISHER": "Konami",
        "GENRE": "Action/Adv",
        "TYPE": "Survival horror",
        "EP": 69,
        "DIED": 1,
        "TIME": 67311,
        "SERIES": "Silent Hill"
      },
      {
        "RANK": 23,
        "TITLE": "GHOSTS 'N GOBLINS",
        "POINTS": 49,
        "PLATFORM": "Arcade",
        "YEAR": 1985,
        "DEVELOPER": "Capcom",
        "PUBLISHER": "Capcom",
        "GENRE": "Action",
        "TYPE": "2D side scrolling action platformer",
        "EP": 55,
        "DIED": 414,
        "TIME": 36148,
        "SERIES": "Ghosts 'n Goblins"
      },
      {
        "RANK": 24,
        "TITLE": "PARASITE EVE",
        "POINTS": 48,
        "PLATFORM": "PlayStation",
        "YEAR": 1998,
        "DEVELOPER": "Squaresoft",
        "PUBLISHER": "EA",
        "GENRE": "RPG",
        "TYPE": "Action JRPG",
        "EP": 23,
        "DIED": 16,
        "TIME": 77868,
        "SERIES": "Parasite Eve"
      },
      {
        "RANK": 25,
        "TITLE": "PORTAL",
        "POINTS": 47,
        "PLATFORM": "PC",
        "YEAR": 2007,
        "DEVELOPER": "Valve",
        "PUBLISHER": "Valve",
        "GENRE": "Adventure",
        "TYPE": "1st person puzzle / adventure",
        "EP": 16,
        "DIED": 59,
        "TIME": 24624,
        "SERIES": "Portal"
      },
      {
        "RANK": 26,
        "TITLE": "TOMB RAIDER III",
        "POINTS": 46,
        "PLATFORM": "PC",
        "YEAR": 1998,
        "DEVELOPER": "Core",
        "PUBLISHER": "Eidos",
        "GENRE": "Action/Adv",
        "TYPE": "3rd person adventure",
        "EP": 5,
        "DIED": 243,
        "TIME": 108692,
        "SERIES": "Tomb Raider"
      },
      {
        "RANK": 27,
        "TITLE": "TOMB RAIDER II",
        "POINTS": 45,
        "PLATFORM": "PC",
        "YEAR": 1997,
        "DEVELOPER": "Core",
        "PUBLISHER": "Eidos",
        "GENRE": "Action/Adv",
        "TYPE": "3rd person adventure",
        "EP": 2,
        "DIED": 162,
        "TIME": 101880,
        "SERIES": "Tomb Raider"
      },
      {
        "RANK": 28,
        "TITLE": "RESIDENT EVIL 2",
        "POINTS": 44,
        "PLATFORM": "PlayStation",
        "YEAR": 1998,
        "DEVELOPER": "Capcom",
        "PUBLISHER": "Capcom",
        "GENRE": "Action/Adv",
        "TYPE": "Survival horror",
        "EP": 17,
        "DIED": 12,
        "TIME": 69460,
        "SERIES": "Resident Evil"
      },
      {
        "RANK": 29,
        "TITLE": "SONIC THE HEDGEHOG 2",
        "POINTS": 43,
        "PLATFORM": "Mega Drive",
        "YEAR": 1992,
        "DEVELOPER": "SEGA",
        "PUBLISHER": "SEGA",
        "GENRE": "Action",
        "TYPE": "2D side scrolling platformer",
        "EP": 48,
        "DIED": 43,
        "TIME": 24024,
        "SERIES": "Sonic"
      },
      {
        "RANK": 30,
        "TITLE": "MUSHIHIMESAMA",
        "POINTS": 42,
        "PLATFORM": "PC",
        "YEAR": 2004,
        "DEVELOPER": "Cave",
        "PUBLISHER": "Degica",
        "GENRE": "Action",
        "TYPE": "Vertical scrolling shoot 'em up",
        "EP": 31,
        "DIED": 202,
        "TIME": 10336,
        "SERIES": "Mushihimesama"
      },
      {
        "RANK": 31,
        "TITLE": "DODONPACHI",
        "POINTS": 41,
        "PLATFORM": "Arcade",
        "YEAR": 1997,
        "DEVELOPER": "Cave",
        "PUBLISHER": "Atlus",
        "GENRE": "Action",
        "TYPE": "Vertical scrolling shoot 'em up",
        "EP": 41,
        "DIED": 226,
        "TIME": 14196,
        "SERIES": "Dodonpachi"
      },
      {
        "RANK": 32,
        "TITLE": "ROGUE LEGACY",
        "POINTS": 40,
        "PLATFORM": "PC",
        "YEAR": 2013,
        "DEVELOPER": "Cellar Door",
        "PUBLISHER": "Cellar door",
        "GENRE": "Action/Adv",
        "TYPE": "Roguelike / platformer / hack 'n' slash",
        "EP": 11,
        "DIED": 106,
        "TIME": 67319,
        "SERIES": "Rogue Legacy"
      },
      {
        "RANK": 33,
        "TITLE": "TOMBA!",
        "POINTS": 39,
        "PLATFORM": "PlayStation",
        "YEAR": 1998,
        "DEVELOPER": "Whoopee Camp",
        "PUBLISHER": "SONY",
        "GENRE": "Action/Adv",
        "TYPE": "2.5D side scrolling platformer / RPG",
        "EP": 47,
        "DIED": 165,
        "TIME": 128941,
        "SERIES": "Tomba!"
      },
      {
        "RANK": 34,
        "TITLE": "CRASH BANDICOOT",
        "POINTS": 38,
        "PLATFORM": "PlayStation",
        "YEAR": 1996,
        "DEVELOPER": "Naughty Dog",
        "PUBLISHER": "SONY",
        "GENRE": "Action",
        "TYPE": "3D linear platformer",
        "EP": 45,
        "DIED": 644,
        "TIME": 47608,
        "SERIES": "Crash"
      },
      {
        "RANK": 35,
        "TITLE": "STREETS OF RAGE",
        "POINTS": 37,
        "PLATFORM": "Mega Drive",
        "YEAR": 1991,
        "DEVELOPER": "SEGA",
        "PUBLISHER": "SEGA",
        "GENRE": "Action",
        "TYPE": "2D side scrolling beat 'em up",
        "EP": 63,
        "DIED": 145,
        "TIME": 25035,
        "SERIES": "Streets of Rage"
      },
      {
        "RANK": 36,
        "TITLE": "BROTHERS: A TALE OF TWO SONS",
        "POINTS": 36,
        "PLATFORM": "PC",
        "YEAR": 2013,
        "DEVELOPER": "Starbreeze",
        "PUBLISHER": "505 Games",
        "GENRE": "Adventure",
        "TYPE": "3D puzzle / adventure",
        "EP": 21,
        "DIED": 27,
        "TIME": 14228,
        "SERIES": "Brothers"
      },
      {
        "RANK": 37,
        "TITLE": "SONIC THE HEDGEHOG",
        "POINTS": 35,
        "PLATFORM": "Mega Drive",
        "YEAR": 1991,
        "DEVELOPER": "SEGA",
        "PUBLISHER": "SEGA",
        "GENRE": "Action",
        "TYPE": "2D side scrolling platformer",
        "EP": 14,
        "DIED": 47,
        "TIME": 15727,
        "SERIES": "Sonic"
      },
      {
        "RANK": 38,
        "TITLE": "RAYMAN",
        "POINTS": 34,
        "PLATFORM": "PlayStation",
        "YEAR": 1995,
        "DEVELOPER": "Ubi Soft",
        "PUBLISHER": "Ubi Soft",
        "GENRE": "Action/Adv",
        "TYPE": "2D side scrolling platformer / adventure",
        "EP": 38,
        "DIED": 1154,
        "TIME": 163528,
        "SERIES": "Rayman"
      },
      {
        "RANK": 39,
        "TITLE": "MEGA MAN",
        "POINTS": 33,
        "PLATFORM": "NES",
        "YEAR": 1987,
        "DEVELOPER": "Capcom",
        "PUBLISHER": "Capcom",
        "GENRE": "Action",
        "TYPE": "2D side scrolling action platformer",
        "EP": 9,
        "DIED": 72,
        "TIME": 9811,
        "SERIES": "Mega Man"
      },
      {
        "RANK": 40,
        "TITLE": "CASTLEVANIA",
        "POINTS": 32,
        "PLATFORM": "NES",
        "YEAR": 1986,
        "DEVELOPER": "Konami",
        "PUBLISHER": "Konami",
        "GENRE": "Action",
        "TYPE": "2D side scrolling action platformer",
        "EP": 56,
        "DIED": 186,
        "TIME": 18495,
        "SERIES": "Castlevania"
      },
      {
        "RANK": 41,
        "TITLE": "RIDGE RACER",
        "POINTS": 31,
        "PLATFORM": "Arcade",
        "YEAR": 1993,
        "DEVELOPER": "Namco",
        "PUBLISHER": "Namco",
        "GENRE": "Sport",
        "TYPE": "3D arcade racer",
        "EP": 32,
        "DIED": 22,
        "TIME": 11137,
        "SERIES": "Ridge Racer"
      },
      {
        "RANK": 42,
        "TITLE": "SYSTEM SHOCK",
        "POINTS": 30,
        "PLATFORM": "PC",
        "YEAR": 1994,
        "DEVELOPER": "Looking Glass",
        "PUBLISHER": "Origin Systems",
        "GENRE": "Action/Adv",
        "TYPE": "1st person adventure / RPG / Survival horror",
        "EP": 7,
        "DIED": 146,
        "TIME": 89106,
        "SERIES": "System Shock"
      },
      {
        "RANK": 43,
        "TITLE": "METROID",
        "POINTS": 29,
        "PLATFORM": "NES",
        "YEAR": 1986,
        "DEVELOPER": "Nintendo",
        "PUBLISHER": "Nintendo",
        "GENRE": "Action/Adv",
        "TYPE": "2D side scrolling action platformer / exploration",
        "EP": 54,
        "DIED": 80,
        "TIME": 90628,
        "SERIES": "Metroid"
      },
      {
        "RANK": 44,
        "TITLE": "ODDWORLD: ABE'S EXODDUS",
        "POINTS": 28,
        "PLATFORM": "PlayStation",
        "YEAR": 1998,
        "DEVELOPER": "Oddworld Inhabitants",
        "PUBLISHER": "GT Interactive",
        "GENRE": "Action/Adv",
        "TYPE": "2D cinematic puzzle / platformer",
        "EP": 57,
        "DIED": 781,
        "TIME": 128061,
        "SERIES": "Oddworld"
      },
      {
        "RANK": 45,
        "TITLE": "MARBLE MADNESS",
        "POINTS": 27,
        "PLATFORM": "Arcade",
        "YEAR": 1984,
        "DEVELOPER": "Atari",
        "PUBLISHER": "Atari",
        "GENRE": "Action",
        "TYPE": "Platformer / Racing / Arcade sim",
        "EP": 60,
        "DIED": 1968,
        "TIME": 29013,
        "SERIES": "Marble Madness"
      },
      {
        "RANK": 46,
        "TITLE": "BRAID",
        "POINTS": 26,
        "PLATFORM": "PC",
        "YEAR": 2008,
        "DEVELOPER": "NumberNone",
        "PUBLISHER": "Microsoft",
        "GENRE": "Action/Adv",
        "TYPE": "2D side scrolling puzzle / platformer",
        "EP": 28,
        "DIED": 206,
        "TIME": 45606,
        "SERIES": "Braid"
      },
      {
        "RANK": 47,
        "TITLE": "SILENT HILL",
        "POINTS": 25,
        "PLATFORM": "PlayStation",
        "YEAR": 1999,
        "DEVELOPER": "Konami",
        "PUBLISHER": "Konami",
        "GENRE": "Action/Adv",
        "TYPE": "Survival horror",
        "EP": 6,
        "DIED": 6,
        "TIME": 35905,
        "SERIES": "Silent Hill"
      },
      {
        "RANK": 48,
        "TITLE": "LIMBO",
        "POINTS": 24,
        "PLATFORM": "PC",
        "YEAR": 2010,
        "DEVELOPER": "Playdead",
        "PUBLISHER": "Microsoft",
        "GENRE": "Action/Adv",
        "TYPE": "2D side scrolling puzzle / platformer",
        "EP": 8,
        "DIED": 133,
        "TIME": 15609,
        "SERIES": "Limbo"
      },
      {
        "RANK": 49,
        "TITLE": "ABE'S ODDYSEE",
        "POINTS": 23,
        "PLATFORM": "PlayStation",
        "YEAR": 1997,
        "DEVELOPER": "Oddworld Inhabitants",
        "PUBLISHER": "GT Interactive",
        "GENRE": "Action/Adv",
        "TYPE": "2D cinematic puzzle / platformer",
        "EP": 4,
        "DIED": 512,
        "TIME": 52915,
        "SERIES": "Oddworld"
      },
      {
        "RANK": 50,
        "TITLE": "TEKKEN",
        "POINTS": 22,
        "PLATFORM": "PlayStation",
        "YEAR": 1995,
        "DEVELOPER": "Namco",
        "PUBLISHER": "Namco",
        "GENRE": "Action",
        "TYPE": "Fighter",
        "EP": 50,
        "DIED": 151,
        "TIME": 19112,
        "SERIES": "Tekken"
      },
      {
        "RANK": 51,
        "TITLE": "MORTAL KOMBAT",
        "POINTS": 21,
        "PLATFORM": "Arcade",
        "YEAR": 1992,
        "DEVELOPER": "Midway",
        "PUBLISHER": "Midway",
        "GENRE": "Action",
        "TYPE": "Fighter",
        "EP": 59,
        "DIED": 31,
        "TIME": 9788,
        "SERIES": "Mortal Kombat"
      },
      {
        "RANK": 52,
        "TITLE": "VVVVVV",
        "POINTS": 20,
        "PLATFORM": "PC",
        "YEAR": 2010,
        "DEVELOPER": "Terry Cavanagh",
        "PUBLISHER": "Nicalis",
        "GENRE": "Action",
        "TYPE": "2D side scrolling puzzle / platformer",
        "EP": 35,
        "DIED": 921,
        "TIME": 17679,
        "SERIES": "VVVVVV"
      },
      {
        "RANK": 53,
        "TITLE": "SUNSET RIDERS",
        "POINTS": 19,
        "PLATFORM": "Arcade",
        "YEAR": 1991,
        "DEVELOPER": "Konami",
        "PUBLISHER": "Konami",
        "GENRE": "Action",
        "TYPE": "2D side scrolling run 'n' gun",
        "EP": 36,
        "DIED": 313,
        "TIME": 19866,
        "SERIES": "Sunset Riders"
      },
      {
        "RANK": 54,
        "TITLE": "TEENAGE MUTANT NINJA TURTLES",
        "POINTS": 18,
        "PLATFORM": "NES",
        "YEAR": 1989,
        "DEVELOPER": "Konami",
        "PUBLISHER": "Konami",
        "GENRE": "Action/Adv",
        "TYPE": "2D side scrolling action platformer",
        "EP": 65,
        "DIED": 62,
        "TIME": 35199,
        "SERIES": "Turtles"
      },
      {
        "RANK": 55,
        "TITLE": "MINIT",
        "POINTS": 17,
        "PLATFORM": "PC",
        "YEAR": 2018,
        "DEVELOPER": "JW, Kitty, Jukio & Dom",
        "PUBLISHER": "Devolver",
        "GENRE": "Adventure",
        "TYPE": "Top down puzzle / adventure",
        "EP": 43,
        "DIED": 183,
        "TIME": 12100,
        "SERIES": "Minit"
      },
      {
        "RANK": 56,
        "TITLE": "DISNEY'S ALADDIN",
        "POINTS": 16,
        "PLATFORM": "Mega Drive",
        "YEAR": 1993,
        "DEVELOPER": "Virgin",
        "PUBLISHER": "SEGA",
        "GENRE": "Action",
        "TYPE": "2D side scrolling action platformer",
        "EP": 34,
        "DIED": 68,
        "TIME": 13621,
        "SERIES": "Aladdin"
      },
      {
        "RANK": 57,
        "TITLE": "ROBOCOP",
        "POINTS": 15,
        "PLATFORM": "Arcade",
        "YEAR": 1988,
        "DEVELOPER": "Data East",
        "PUBLISHER": "Data East",
        "GENRE": "Action",
        "TYPE": "2D side scrolling run 'n' gun",
        "EP": 25,
        "DIED": 60,
        "TIME": 6823,
        "SERIES": "Robocop"
      },
      {
        "RANK": 58,
        "TITLE": "PARAPPA THE RAPPER",
        "POINTS": 14,
        "PLATFORM": "PlayStation",
        "YEAR": 1997,
        "DEVELOPER": "NanaOn-Sha",
        "PUBLISHER": "SONY",
        "GENRE": "Action",
        "TYPE": "Rhythm",
        "EP": 29,
        "DIED": 51,
        "TIME": 10639,
        "SERIES": "Parappa"
      },
      {
        "RANK": 59,
        "TITLE": "AERO FIGHTERS",
        "POINTS": 13,
        "PLATFORM": "Arcade",
        "YEAR": 1992,
        "DEVELOPER": "Video System",
        "PUBLISHER": "Tecmo",
        "GENRE": "Action",
        "TYPE": "Vertical scrolling shoot 'em up",
        "EP": 42,
        "DIED": 330,
        "TIME": 10367,
        "SERIES": "Aero Fighters"
      },
      {
        "RANK": 60,
        "TITLE": "ALIEN TRILOGY",
        "POINTS": 12,
        "PLATFORM": "PlayStation",
        "YEAR": 1996,
        "DEVELOPER": "Probe",
        "PUBLISHER": "Acclaim",
        "GENRE": "Action/Adv",
        "TYPE": "1st person shooter",
        "EP": 10,
        "DIED": 38,
        "TIME": 47052,
        "SERIES": "Alien"
      },
      {
        "RANK": 61,
        "TITLE": "FROG FRACTIONS",
        "POINTS": 11,
        "PLATFORM": "Flash",
        "YEAR": 2012,
        "DEVELOPER": "Twinbeard",
        "PUBLISHER": "Twinbeard",
        "GENRE": "Adventure",
        "TYPE": "Point and click adventure",
        "EP": 22,
        "DIED": 5,
        "TIME": 5998,
        "SERIES": "Frog Fractions"
      },
      {
        "RANK": 62,
        "TITLE": "ANOTHER WORLD",
        "POINTS": 10,
        "PLATFORM": "Amiga",
        "YEAR": 1991,
        "DEVELOPER": "Eric Chahi",
        "PUBLISHER": "Delphine",
        "GENRE": "Action/Adv",
        "TYPE": "2D cinematic puzzle / platformer",
        "EP": 53,
        "DIED": 295,
        "TIME": 29898,
        "SERIES": "Another World"
      },
      {
        "RANK": 63,
        "TITLE": "GALAXIAN",
        "POINTS": 9,
        "PLATFORM": "Arcade",
        "YEAR": 1979,
        "DEVELOPER": "Namco",
        "PUBLISHER": "Midway",
        "GENRE": "Action",
        "TYPE": "Fixed shoot 'em up",
        "EP": 24,
        "DIED": 314,
        "TIME": 13390,
        "SERIES": "Galaga"
      },
      {
        "RANK": 64,
        "TITLE": "CALIFORNIA GAMES",
        "POINTS": 8,
        "PLATFORM": "C64",
        "YEAR": 1987,
        "DEVELOPER": "Epyx",
        "PUBLISHER": "Epyx",
        "GENRE": "Sport",
        "TYPE": "Variety Event",
        "EP": 70,
        "DIED": 608,
        "TIME": 17717,
        "SERIES": "California Games"
      },
      {
        "RANK": 65,
        "TITLE": "ANIMAL QUEST",
        "POINTS": 7,
        "PLATFORM": "DOS",
        "YEAR": 1991,
        "DEVELOPER": "N Ayash, B Dedes",
        "PUBLISHER": "Alive",
        "GENRE": "Adventure",
        "TYPE": "Point and click educatoinal",
        "EP": 40,
        "DIED": 41,
        "TIME": 15474,
        "SERIES": "Animal Quest"
      },
      {
        "RANK": 66,
        "TITLE": "ELF: THE MOVIE",
        "POINTS": 6,
        "PLATFORM": "GBA",
        "YEAR": 2004,
        "DEVELOPER": "Human Soft",
        "PUBLISHER": "Crave",
        "GENRE": "Action",
        "TYPE": "2D platformer / mini-games",
        "EP": 26,
        "DIED": 10,
        "TIME": 4802,
        "SERIES": "Elf: The Movie"
      },
      {
        "RANK": 67,
        "TITLE": "STREET FIGHTER",
        "POINTS": 5,
        "PLATFORM": "Arcade",
        "YEAR": 1987,
        "DEVELOPER": "Capcom",
        "PUBLISHER": "Capcom",
        "GENRE": "Action",
        "TYPE": "Fighter",
        "EP": 66,
        "DIED": 127,
        "TIME": 10794,
        "SERIES": "Street Fighter"
      },
      {
        "RANK": 68,
        "TITLE": "TITENIC",
        "POINTS": 4,
        "PLATFORM": "NES",
        "YEAR": 1998,
        "DEVELOPER": "Hummer Team",
        "PUBLISHER": "ABAB Soft",
        "GENRE": "Action",
        "TYPE": "2D side scrolling action platformer",
        "EP": 61,
        "DIED": 120,
        "TIME": 12480,
        "SERIES": "Titenic"
      },
      {
        "RANK": 69,
        "TITLE": "HARRY'S LEGEND",
        "POINTS": 3,
        "PLATFORM": "NES",
        "YEAR": 2000,
        "DEVELOPER": "Hummer Team",
        "PUBLISHER": "Silicon Application Corp",
        "GENRE": "Action",
        "TYPE": "2D side scrolling action platformer",
        "EP": 64,
        "DIED": 68,
        "TIME": 10706,
        "SERIES": "Titenic"
      },
      {
        "RANK": 9999,
        "TITLE": "TELETUBBIES",
        "POINTS": 2,
        "PLATFORM": "PlayStation",
        "YEAR": 1999,
        "DEVELOPER": "Asylum",
        "PUBLISHER": "BBC",
        "GENRE": "Adventure",
        "TYPE": "Educational",
        "EP": 19,
        "DIED": 0,
        "TIME": 3832,
        "SERIES": "Teletubbies"
      },
      {
        "RANK": 10000,
        "TITLE": "ACTION 52",
        "POINTS": 1,
        "PLATFORM": "NES",
        "YEAR": 1991,
        "DEVELOPER": "Active Enterprises",
        "PUBLISHER": "Active Enterprises",
        "GENRE": "Action",
        "TYPE": "Various",
        "EP": 68,
        "DIED": 465,
        "TIME": 18789,
        "SERIES": "Action 52"
      }
     ]

     data.forEach(record => Records.insert(record));
  }
});