// Sample Pokémon data
const pokemonList = [
  { name: "Bulbasaur", hp: 68, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif" },
  { name: "Ivysaur", hp: 97, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif"},
  { name: "Venusaur", hp: 134, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif" },
  { name: "Charmander", hp: 65, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" },
  { name: "Charmeleon", hp: 95, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif" },
  { name: "Charizard", hp: 129, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" },
  { name: "Squirtle", hp: 61, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif" },
  { name: "Wartorle", hp: 84, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif" },
  { name: "Blastoise", hp: 131, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif" },
  { name: "Caterpie", hp: 55, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif"},
  { name: "Metapod", hp: 65, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif"},
  { name: "Butterfree", hp: 84, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif"},
  { name: "Weedle", hp: 43, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif"},
  { name: "Kakuna", hp: 51, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif"},
  { name: "Beedrill", hp: 83, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif"},
  { name: "Pidgey", hp: 55, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif"},
  { name: "Pidgeotto", hp: 78, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif"},
  { name: "Pidgeot", hp: 118, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif"},
  { name: "Rattata", hp: 51, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif"},
  { name: "Raticate", hp: 78, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif"},
  { name: "Spearow", hp: 58, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif"},
  { name: "Fearow", hp: 106, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif"},
  { name: "Ekans", hp: 61, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif"},
  { name: "Arbok", hp: 86, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif"},
  { name: "Pikachu", hp: 56, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"},
  { name: "Raichu", hp: 94, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif"},
  { name: "Sandshrew", hp: 61, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif"},
  { name: "Sandslash", hp: 90, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif"},
  { name: "Nidoran(Female)", hp: 64, image: "https://images.uncyc.org/pt/4/48/Nidoran%E2%99%80Sprite.gif"},
  { name: "Nidorina", hp: 88, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif"},
  { name: "Nidoqueen", hp: 114, image: "http://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif"},
  { name: "Nidoran(Male)", hp: 62, image: "https://media1.tenor.com/m/O30oj9p5MyEAAAAC/nidoran-m-pokemon.gif"},
  { name: "Nidorino", hp: 90, image: "https://www.pkmnstats.com/static/sprites/3/esmeralda/033-nidorino.gif"},
  { name: "Nidoking", hp: 116, image: "https://www.smogon.com/dex/media/sprites/bw/nidoking.gif.m.1706150269"},
  { name: "Clefairy", hp: 81, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif"},
  { name: "Clefable", hp: 128, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif"},
  { name: "Vulpix", hp: 61, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif"},
  { name: "Ninetales", hp: 90, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif"},
  { name: "Jigglypuff", hp: 118, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif" },
  { name: "Wigglytuff", hp: 150, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif" },
  { name: "Zubat", hp: 53, image: "http://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif"},
  { name: "Golbat", hp: 83, image: "http://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif"},
  { name: "Oddish", hp: 61, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif"},
  { name: "Gloom", hp: 81, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif"},
  { name: "Vileplume", hp: 102, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif"},
  { name: "Paras", hp: 54, image: "https://www.pkmnstats.com/static/sprites/5/negro_blanco/046-paras.gif"},
  { name: "Parasect", hp: 76, image: "https://veekun.com/dex/media/pokemon/main-sprites/emerald/animated/47.gif"},
  { name: "Venonat", hp: 79, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52b1ad0c-e6e7-4c6b-8bd9-706562512f0d/dehxaqy-f82e6d6a-dec3-4df8-a1ad-de39457ac328.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyYjFhZDBjLWU2ZTctNGM2Yi04YmQ5LTcwNjU2MjUxMmYwZFwvZGVoeGFxeS1mODJlNmQ2YS1kZWMzLTRkZjgtYTFhZC1kZTM5NDU3YWMzMjguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.WOnlPmJgLJMEuDeGtyZRthGgxiX5XNZKkhBXvLAvW8U"},
  { name: "Venomoth", hp: 101, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/330fb4ca-7c2d-4382-b8d4-8efc6ffd4159/d53qarn-c8948238-d302-4835-9735-c1030bff0332.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMzMGZiNGNhLTdjMmQtNDM4Mi1iOGQ0LThlZmM2ZmZkNDE1OVwvZDUzcWFybi1jODk0ODIzOC1kMzAyLTQ4MzUtOTczNS1jMTAzMGJmZjAzMzIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ncT8aOL-B8dwT4TPbOIMBYaDrAFgsNHGJnH6ZPRrTsc"},
  { name: "Diglett", hp: 42, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif"},
  { name: "Dugtrio", hp: 66, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif"},
  { name: "Meowth", hp: 59, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif" },
  { name: "Persian", hp: 83, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif" },
  { name: "Psyduck", hp: 67, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif" },
  { name: "Golduck", hp: 102, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif" },
  { name: "Mankey", hp: 69, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif"},
  { name: "Primeape", hp: 97, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif"},
  { name: "Growlithe", hp: 66, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif"},
  { name: "Arcanine", hp: 113, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif" },
  { name: "Poliwag", hp: 70, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif"},
  { name: "Poliwhirl", hp: 91, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif"},
  { name: "Poliwrath", hp: 121, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif"},
  { name: "Abra", hp: 50, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif" },
  { name: "Kadabra", hp: 70, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif" },
  { name: "Alakazam", hp: 90, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif" },
  { name: "Machop", hp: 85, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif" },
  { name: "Machoke", hp: 95, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif" },
  { name: "Machamp", hp: 125, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif" },
  { name: "Bellsprout", hp: 74, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif"},
  { name: "Weepinbell", hp: 94, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif"},
  { name: "Victreebel", hp: 112, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif"},
  { name: "Tentacool", hp: 73, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif"},
  { name: "Tentacruel", hp: 106, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif"},
  { name: "Geodude", hp: 75, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif"},
  { name: "Graveler", hp: 88, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif"},
  { name: "Golem", hp: 103, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif"},
  { name: "Ponyta", hp: 69, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif"},
  { name: "Rapidash", hp: 87, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif"},
  { name: "Slowpoke", hp: 124, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif"},
  { name: "Slowbro", hp: 140, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif"},
  { name: "Magnemite", hp: 51, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif"},
  { name: "Magneton", hp: 76, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif"},
  { name: "Farfetch'd", hp: 82, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif"},
  { name: "Doduo", hp: 67, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif"},
  { name: "Dodrio", hp: 90, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif"},
  { name: "Seel", hp: 74, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif"},
  { name: "Dewgong", hp: 122, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif"},
  { name: "Grimer", hp: 108, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif"},
  { name: "Muk", hp: 126, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif"},
  { name: "Shellder", hp: 62, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif"},
  { name: "Cloyster", hp: 84, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif"},
  { name: "Gastly", hp: 62, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif" },
  { name: "Haunter", hp: 79, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif" },
  { name: "Gengar", hp: 95, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" },
  { name: "Onix", hp: 64, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif"},
  { name: "Drowzee", hp: 74, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif"},
  { name: "Hypno", hp: 113, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif"},
  { name: "Krabby", hp: 63, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif"},
  { name: "Kingler", hp: 86, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif"},
  { name: "Voltorb", hp: 73, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif"},
  { name: "Electrode", hp: 92, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif"},
  { name: "Exeggcute", hp: 81, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif"},
  { name: "Exeggutor", hp: 112, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif"},
  { name: "Cubone", hp: 68, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/23e3acbf-fae0-46ba-b908-6390d4169ea6/d2esptz-581ae5c2-9d4d-4220-b695-d15a2ac25961.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIzZTNhY2JmLWZhZTAtNDZiYS1iOTA4LTYzOTBkNDE2OWVhNlwvZDJlc3B0ei01ODFhZTVjMi05ZDRkLTQyMjAtYjY5NS1kMTVhMmFjMjU5NjEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.43NxQuLwuf4wFI88RW7GprM-SparKrtq1dFmB2dDrU8"},
  { name: "Marowak", hp: 91, image: "https://www.pkmnstats.com/static/sprites/2/cristal/105-marowak.gif"},
  { name: "Hitmonlee", hp: 81, image: "https://pokemondb.net/pokebase/qa-plugin/https-img-proxy/image.php?key=6c18f02453179667&url=http:%2F%2Fth200.photobucket.com%2Falbums%2Faa108%2Foverlordgnarly%2Fth_Hitmonlee.gif"},
  { name: "Hitmonchan", hp: 84, image: "https://www.pkmnstats.com/static/sprites/2/cristal/107-hitmonchan.gif"},
  { name: "Lickitung", hp: 117, image: "http://vignette2.wikia.nocookie.net/es.pokemon/images/0/09/Lickitung_cristal.gif/revision/latest?cb=20090710113006"},
  { name: "Koffing", hp: 64, image: "http://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif"},
  { name: "Weezing", hp: 88, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"},
  { name: "Rhyhorn", hp: 102, image: "http://veekun.com/dex/media/pokemon/main-sprites/emerald/animated/111.gif"},
  { name: "Rhydon", hp: 134, image: "https://images.uncyc.org/pt/f/f9/RhydonSprite.gif"},
  { name: "Chansey", hp: 227, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/090ed3b6-9c20-4d6b-96ac-aa7d01c19ffe/dahu2we-334f861e-15e0-43ff-9172-1827b6b0aec2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5MGVkM2I2LTljMjAtNGQ2Yi05NmFjLWFhN2QwMWMxOWZmZVwvZGFodTJ3ZS0zMzRmODYxZS0xNWUwLTQzZmYtOTE3Mi0xODI3YjZiMGFlYzIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GQbQtgPAZ3J0McU_zs1xJoRRtqRzAMegoXZBKo062Zs"},
  { name: "Tangela", hp: 79, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif"},
  { name: "Kangaskhan", hp: 118, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif"},
  { name: "Horsea", hp: 57, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98e3aced-e268-4935-96ce-97506cad8605/d3fnrfi-0762854a-015c-449b-b779-f35815c551a3.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4ZTNhY2VkLWUyNjgtNDkzNS05NmNlLTk3NTA2Y2FkODYwNVwvZDNmbnJmaS0wNzYyODU0YS0wMTVjLTQ0OWItYjc3OS1mMzU4MTVjNTUxYTMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.c16ffZtJKglpsHVpKgJDw36JR5qWv-a9ldASG9uYPcc"},
  { name: "Seadra", hp: 87, image: "https://www.pkmnstats.com/static/sprites/2/cristal/117-seadra.gif"},
  { name: "Goldeen", hp: 54, image: "https://www.pkmnstats.com/static/sprites/5/negro_blanco/118-goldeen.gif"},
  { name: "Seaking", hp: 97, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/seaking-f.gif"},
  { name: "Staryu", hp: 64, image: "https://www.pkmnstats.com/static/sprites/3/esmeralda/120-staryu.gif"},
  { name: "Starmie", hp: 84, image: "http://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif"},
  { name: "Mr. Mime", hp: 69, image: "https://www.pkmnstats.com/static/sprites/3/esmeralda/122-mr-mime.gif"},
  { name: "Scyther", hp: 83, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther-f.gif"},
  { name: "Jynx", hp: 93, image: "http://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif"},
  { name: "Electabuzz", hp: 85, image: "https://veekun.com/dex/media/pokemon/main-sprites/emerald/animated/125.gif"},
  { name: "Magmar", hp: 90, image: "https://www.pokepedia.fr/images/c/c3/Sprite_0126_E.gif"},
  { name: "Pinsir", hp: 87, image: "https://www.pkmnstats.com/static/sprites/2/cristal/127-pinsir.gif"},
  { name: "Tauros", hp: 103, image: "https://veekun.com/dex/media/pokemon/main-sprites/emerald/animated/128.gif"},
  { name: "Magikarp", hp: 45, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif"},
  { name: "Gyrados", hp: 123, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif" },
  { name: "Lapras", hp: 150, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c468a35-f99f-4f98-b943-749faba109a1/d55bq5t-56f67b9d-2d45-4311-8a9d-3ef1c7290ccc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjNDY4YTM1LWY5OWYtNGY5OC1iOTQzLTc0OWZhYmExMDlhMVwvZDU1YnE1dC01NmY2N2I5ZC0yZDQ1LTQzMTEtOGE5ZC0zZWYxYzcyOTBjY2MuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TDn-MjuRCfCY_1_SXzmxxTlA6wq1i_ifXkdlPlZs-vg"},
  { name: "Ditto", hp: 79, image: "https://images.uncyc.org/commons/6/69/DittoSprite.gif"},
  { name: "Eevee", hp: 86, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif" },
  { name: "Vaporeon", hp: 135, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif"},
  { name: "Jolteon", hp: 86, image: "https://www.smogon.com/dex/media/sprites/bw/jolteon.gif.m.1706150269"},
  { name: "Flareon", hp: 99, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif"},
  { name: "Porygon", hp: 94, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif"},
  { name: "Omanyte", hp: 70, image: "https://veekun.com/dex/media/pokemon/main-sprites/emerald/animated/138.gif"},
  { name: "Omastar", hp: 100, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a1ebd643-cce3-4ff5-8c31-6c49d6423ac5/d3b7nic-91d91df1-251b-4a06-9a9b-5f3f32102242.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExZWJkNjQzLWNjZTMtNGZmNS04YzMxLTZjNDlkNjQyM2FjNVwvZDNiN25pYy05MWQ5MWRmMS0yNTFiLTRhMDYtOWE5Yi01ZjNmMzIxMDIyNDIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jfYDBhXN7JSL1lBaAyIsI792va3293TZqNj7Z_foP9Q"},
  { name: "Kabuto", hp: 62, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif"},
  { name: "Kabutops", hp: 90, image: "https://www.pkmnstats.com/static/sprites/3/esmeralda/141-kabutops.gif"},
  { name: "Aerodactyl", hp: 102, image: "https://www.pkmnstats.com/static/sprites/5/negro_blanco/142-aerodactyl.gif"},
  { name: "Snorlax", hp: 182, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/.gif" },
  { name: "Articuno", hp: 124, image: "http://img.pokemondb.net/sprites/black-white/anim/normal/articuno.gif"},
  { name: "Zapdos", hp: 121, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif"},
  { name: "Moltres", hp: 123, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif"},
  { name: "Dratini", hp: 76, image: "http://www.greenchu.de/sprites/smaragd/147.gif"},
  { name: "Dragonair", hp: 94, image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a3fef65-3d0f-483e-9dcb-4a192f845323/d5lylhe-e067fb38-698d-4c82-8619-ed11465c46fc.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRhM2ZlZjY1LTNkMGYtNDgzZS05ZGNiLTRhMTkyZjg0NTMyM1wvZDVseWxoZS1lMDY3ZmIzOC02OThkLTRjODItODYxOS1lZDExNDY1YzQ2ZmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GDW3BoDlhlmL1S9Elf5gvPQ21EzZ6W8G3MgN2KpG7_M"},
  { name: "Dragonite", hp: 118, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif" },
  { name: "Mewtwo", hp: 136, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif" },
  { name: "Mew", hp: 134, image: "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif" },
];

// DOM Elements
const pokemon1Element = document.getElementById("pokemon1");
const pokemon2Element = document.getElementById("pokemon2");
const startBattleButton = document.getElementById("start-battle");
const battleLog = document.getElementById("battle-log");

// Track the battle interval
let battleInterval = null;

// Randomly select two unique Pokémon
function getTwoUniquePokemon() {
  let pokemon1 = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  let pokemon2 = pokemonList[Math.floor(Math.random() * pokemonList.length)];

  // Ensure the two Pokémon are unique
  while (pokemon1.name === pokemon2.name) {
    pokemon2 = pokemonList[Math.floor(Math.random() * pokemonList.length)];
  }

  return [pokemon1, pokemon2];
}

// Display Pokémon
function displayPokemon(pokemon, element) {
  element.querySelector(".pokemon-image").src = pokemon.image;
  element.querySelector(".pokemon-name").textContent = pokemon.name;
  element.querySelector(".pokemon-hp").textContent = `HP: ${pokemon.hp}`;
}

// Simulate battle with animations
function simulateBattle(pokemon1, pokemon2) {
  battleLog.innerHTML = ""; // Clear log
  let attacker = pokemon1;
  let defender = pokemon2;

  // Disable the button during battle
  startBattleButton.disabled = true;

  battleInterval = setInterval(() => {
    console.log(`${pokemon1.name}: ${pokemon1.hp} HP, ${pokemon2.name}: ${pokemon2.hp} HP`); // Debugging

    if (pokemon1.hp <= 0 || pokemon2.hp <= 0) {
      clearInterval(battleInterval); // Stop the battle if one Pokémon faints
      battleInterval = null;

      // Determine the winner
      const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;
      battleLog.innerHTML += `<strong>${winner.name} wins the battle!</strong>`;

      // Add victory animation to the winner
      const winnerElement = winner === pokemon1 ? pokemon1Element : pokemon2Element;
      winnerElement.classList.add("victory-animation");

      // Re-enable the button after the battle ends
      startBattleButton.disabled = false;

      return; // Exit the function
    }

    const damage = Math.floor(Math.random() * 10) + 1; // Random damage between 1 and 10
    defender.hp -= damage;
    battleLog.innerHTML += `${attacker.name} attacks ${defender.name} for ${damage} damage! ${defender.name} has ${defender.hp} HP left.<br>`;

    // Trigger attack animation on the attacker
    const attackerElement = attacker === pokemon1 ? pokemon1Element : pokemon2Element;
    attackerElement.classList.add("attack-animation");

    // Trigger damage animation on the defender
    const defenderElement = defender === pokemon1 ? pokemon1Element : pokemon2Element;
    defenderElement.classList.add("damage-animation");

    // Remove animations after they complete
    setTimeout(() => {
      attackerElement.classList.remove("attack-animation");
      defenderElement.classList.remove("damage-animation");
    }, 500); // Match the duration of the animations

    // Swap attacker and defender
    [attacker, defender] = [defender, attacker];
  }, 1000); // Simulate a turn every 1 second
}

// Start battle
startBattleButton.addEventListener("click", () => {
  // Clear any existing battle interval
  if (battleInterval) {
    clearInterval(battleInterval);
    battleInterval = null;
  }

  // Reset the battle log
  battleLog.innerHTML = "";

  // Get two unique Pokémon
  const [pokemon1, pokemon2] = getTwoUniquePokemon();

  // Reset HP to original values
  pokemon1.hp = pokemonList.find(p => p.name === pokemon1.name).hp;
  pokemon2.hp = pokemonList.find(p => p.name === pokemon2.name).hp;

  // Display Pokémon
  displayPokemon(pokemon1, pokemon1Element);
  displayPokemon(pokemon2, pokemon2Element);

  // Start the battle
  simulateBattle({ ...pokemon1 }, { ...pokemon2 }); // Pass copies to avoid modifying original data
});