// Music Control
const themeMusic = document.getElementById("pokemon-theme");
const musicToggle = document.getElementById("music-toggle");
let isMusicPlaying = false;

// Try to autoplay when page loads
window.addEventListener('DOMContentLoaded', () => {
  themeMusic.volume = 0.3;
  const playPromise = themeMusic.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      // Auto-play was prevented, show muted icon
      musicToggle.textContent = "🔇";
      isMusicPlaying = false;
    }).then(() => {
      // Auto-play worked
      musicToggle.textContent = "🔊";
      isMusicPlaying = true;
    });
  }
});

// Toggle music on/off
musicToggle.addEventListener("click", () => {
  if (isMusicPlaying) {
    themeMusic.pause();
    musicToggle.textContent = "🔇";
  } else {
    themeMusic.play();
    musicToggle.textContent = "🔊";
  }
  isMusicPlaying = !isMusicPlaying;
});

// Enable music on any user interaction
document.addEventListener('click', enableAudio, { once: true });
document.addEventListener('keydown', enableAudio, { once: true });

function enableAudio() {
  if (!isMusicPlaying) {
    themeMusic.play()
      .then(() => {
        musicToggle.textContent = "🔊";
        isMusicPlaying = true;
      })
      .catch(e => console.log("Audio play failed:", e));
  }
}
// Type effectiveness chart
const typeEffectiveness = {
  normal: { rock: 0.5, ghost: 0, steel: 0.5 },
  fire: { fire: 0.5, water: 0.5, grass: 2, ice: 2, bug: 2, rock: 0.5, dragon: 0.5, steel: 2 },
  water: { fire: 2, water: 0.5, grass: 0.5, ground: 2, rock: 2, dragon: 0.5 },
  electric: { water: 2, electric: 0.5, grass: 0.5, ground: 0, flying: 2, dragon: 0.5 },
  grass: { fire: 0.5, water: 2, grass: 0.5, poison: 0.5, ground: 2, flying: 0.5, bug: 0.5, rock: 2, dragon: 0.5, steel: 0.5 },
  ice: { fire: 0.5, water: 0.5, grass: 2, ice: 0.5, ground: 2, flying: 2, dragon: 2, steel: 0.5 },
  fighting: { normal: 2, ice: 2, poison: 0.5, flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2, ghost: 0, dark: 2, steel: 2, fairy: 0.5 },
  poison: { grass: 2, poison: 0.5, ground: 0.5, rock: 0.5, ghost: 0.5, steel: 0, fairy: 2 },
  ground: { fire: 2, electric: 2, grass: 0.5, poison: 2, flying: 0, bug: 0.5, rock: 2, steel: 2 },
  flying: { electric: 0.5, grass: 2, fighting: 2, bug: 2, rock: 0.5, steel: 0.5 },
  psychic: { fighting: 2, poison: 2, psychic: 0.5, dark: 0, steel: 0.5 },
  bug: { fire: 0.5, grass: 2, fighting: 0.5, poison: 0.5, flying: 0.5, psychic: 2, ghost: 0.5, dark: 2, steel: 0.5, fairy: 0.5 },
  rock: { fire: 2, ice: 2, fighting: 0.5, ground: 0.5, flying: 2, bug: 2, steel: 0.5 },
  ghost: { normal: 0, psychic: 2, ghost: 2, dark: 0.5 },
  dragon: { dragon: 2, steel: 0.5, fairy: 0 },
  dark: { fighting: 0.5, psychic: 2, ghost: 2, dark: 0.5, fairy: 0.5 },
  steel: { fire: 0.5, water: 0.5, electric: 0.5, ice: 2, rock: 2, steel: 0.5, fairy: 2 },
  fairy: { fire: 0.5, fighting: 2, poison: 0.5, dragon: 2, dark: 2, steel: 0.5 }
};

// Pokémon data
const pokemonList = [
  { name: "Bulbasaur", hp: 68, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif" },
  { name: "Ivysaur", hp: 97, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif" },
  { name: "Venusaur", hp: 134, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif" },
  { name: "Charmander", hp: 65, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif" },
  { name: "Charmeleon", hp: 95, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charmeleon.gif" },
  { name: "Charizard", hp: 129, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif" },
  { name: "Squirtle", hp: 61, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif" },
  { name: "Wartortle", hp: 84, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif" },
  { name: "Blastoise", hp: 131, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif" },
  { name: "Caterpie", hp: 55, types: ["bug"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif"},
  { name: "Metapod", hp: 65, types: ["bug"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/metapod.gif"},
  { name: "Butterfree", hp: 84, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/butterfree.gif"},
  { name: "Weedle", hp: 43, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/weedle.gif"},
  { name: "Kakuna", hp: 51, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kakuna.gif"},
  { name: "Beedrill", hp: 83, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/beedrill.gif"},
  { name: "Pidgey", hp: 55, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgey.gif"},
  { name: "Pidgeotto", hp: 78, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeotto.gif"},
  { name: "Pidgeot", hp: 118, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif"},
  { name: "Rattata", hp: 51, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/rattata.gif"},
  { name: "Raticate", hp: 78, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/raticate.gif"},
  { name: "Spearow", hp: 58, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/spearow.gif"},
  { name: "Fearow", hp: 106, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif"},
  { name: "Ekans", hp: 61, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ekans.gif"},
  { name: "Arbok", hp: 86, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/arbok.gif"},
  { name: "Pikachu", hp: 56, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"},
  { name: "Raichu", hp: 94, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/raichu.gif"},
  { name: "Sandshrew", hp: 61, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandshrew.gif"},
  { name: "Sandslash", hp: 90, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/sandslash.gif"},
  { name: "Nidoran(Female)", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-f.gif"},
  { name: "Nidorina", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorina.gif"},
  { name: "Nidoqueen", hp: 114, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoqueen.gif"},
  { name: "Nidoran(Male)", hp: 62, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoran-m.gif"},
  { name: "Nidorino", hp: 90, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidorino.gif"},
  { name: "Nidoking", hp: 116, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif"},
  { name: "Clefairy", hp: 81, types: ["fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefairy.gif"},
  { name: "Clefable", hp: 128, types: ["fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/clefable.gif"},
  { name: "Vulpix", hp: 61, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/vulpix.gif"},
  { name: "Ninetales", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ninetales.gif"},
  { name: "Jigglypuff", hp: 118, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif" },
  { name: "Wigglytuff", hp: 150, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/wigglytuff.gif" },
  { name: "Zubat", hp: 53, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif"},
  { name: "Golbat", hp: 83, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif"},
  { name: "Oddish", hp: 61, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/oddish.gif"},
  { name: "Gloom", hp: 81, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gloom.gif"},
  { name: "Vileplume", hp: 102, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/vileplume.gif"},
  { name: "Paras", hp: 54, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/paras.gif"},
  { name: "Parasect", hp: 76, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/parasect.gif"},
  { name: "Venonat", hp: 79, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/venonat.gif"},
  { name: "Venomoth", hp: 101, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/venomoth.gif"},
  { name: "Diglett", hp: 42, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/diglett.gif"},
  { name: "Dugtrio", hp: 66, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dugtrio.gif"},
  { name: "Meowth", hp: 59, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif" },
  { name: "Persian", hp: 83, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/persian.gif" },
  { name: "Psyduck", hp: 67, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/psyduck.gif" },
  { name: "Golduck", hp: 102, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/golduck.gif" },
  { name: "Mankey", hp: 69, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/mankey.gif"},
  { name: "Primeape", hp: 97, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/primeape.gif"},
  { name: "Growlithe", hp: 66, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/growlithe.gif"},
  { name: "Arcanine", hp: 113, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/arcanine.gif" },
  { name: "Poliwag", hp: 70, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwag.gif"},
  { name: "Poliwhirl", hp: 91, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwhirl.gif"},
  { name: "Poliwrath", hp: 121, types: ["water", "fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/poliwrath.gif"},
  { name: "Abra", hp: 50, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif"},
  { name: "Kadabra", hp: 70, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kadabra.gif" },
  { name: "Alakazam", hp: 90, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/alakazam.gif" },
  { name: "Machop", hp: 85, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif" },
  { name: "Machoke", hp: 95, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/machoke.gif" },
  { name: "Machamp", hp: 125, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif" },
  { name: "Bellsprout", hp: 74, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/bellsprout.gif"},
  { name: "Weepinbell", hp: 94, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/weepinbell.gif"},
  { name: "Victreebel", hp: 112, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/victreebel.gif"},
  { name: "Tentacool", hp: 73, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacool.gif"},
  { name: "Tentacruel", hp: 106, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/tentacruel.gif"},
  { name: "Geodude", hp: 75, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/geodude.gif"},
  { name: "Graveler", hp: 88, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/graveler.gif"},
  { name: "Golem", hp: 103, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/golem.gif"},
  { name: "Ponyta", hp: 69, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ponyta.gif"},
  { name: "Rapidash", hp: 87, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/rapidash.gif"},
  { name: "Slowpoke", hp: 124, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowpoke.gif"},
  { name: "Slowbro", hp: 140, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/slowbro.gif"},
  { name: "Magnemite", hp: 51, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/magnemite.gif"},
  { name: "Magneton", hp: 76, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/magneton.gif"},
  { name: "Farfetch'd", hp: 82, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/farfetchd.gif"},
  { name: "Doduo", hp: 67, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/doduo.gif"},
  { name: "Dodrio", hp: 90, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dodrio.gif"},
  { name: "Seel", hp: 74, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/seel.gif"},
  { name: "Dewgong", hp: 122, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dewgong.gif"},
  { name: "Grimer", hp: 108, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/grimer.gif"},
  { name: "Muk", hp: 126, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/muk.gif"},
  { name: "Shellder", hp: 62, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif"},
  { name: "Cloyster", hp: 84, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/cloyster.gif"},
  { name: "Gastly", hp: 62, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif" },
  { name: "Haunter", hp: 79, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif" },
  { name: "Gengar", hp: 95, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" },
  { name: "Onix", hp: 64, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif"},
  { name: "Drowzee", hp: 74, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/drowzee.gif"},
  { name: "Hypno", hp: 113, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/hypno.gif"},
  { name: "Krabby", hp: 63, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif"},
  { name: "Kingler", hp: 86, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kingler.gif"},
  { name: "Voltorb", hp: 73, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/voltorb.gif"},
  { name: "Electrode", hp: 92, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/electrode.gif"},
  { name: "Exeggcute", hp: 81, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggcute.gif"},
  { name: "Exeggutor", hp: 112, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/exeggutor.gif"},
  { name: "Cubone", hp: 68, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif"},
  { name: "Marowak", hp: 91, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/marowak.gif"},
  { name: "Hitmonlee", hp: 81, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonlee.gif"},
  { name: "Hitmonchan", hp: 84, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/hitmonchan.gif"},
  { name: "Lickitung", hp: 117, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/lickitung.gif"},
  { name: "Koffing", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/koffing.gif"},
  { name: "Weezing", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/weezing.gif"},
  { name: "Rhyhorn", hp: 102, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/rhyhorn.gif"},
  { name: "Rhydon", hp: 134, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/rhydon.gif"},
  { name: "Chansey", hp: 227, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/chansey.gif"},
  { name: "Tangela", hp: 79, types: ["grass"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/tangela.gif"},
  { name: "Kangaskhan", hp: 118, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kangaskhan.gif"},
  { name: "Horsea", hp: 57, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/horsea.gif"},
  { name: "Seadra", hp: 87 ,types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/seadra.gif"},
  { name: "Goldeen", hp: 54, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/goldeen.gif"},
  { name: "Seaking", hp: 97, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/seaking.gif"},
  { name: "Staryu", hp: 64, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/staryu.gif"},
  { name: "Starmie", hp: 84, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/starmie.gif"},
  { name: "Mr. Mime", hp: 69, types: ["psychic", "fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/mr-mime.gif"},
  { name: "Scyther", hp: 83, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/scyther.gif"},
  { name: "Jynx", hp: 93, types: ["ice", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/jynx.gif"},
  { name: "Electabuzz", hp: 85, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/electabuzz.gif"},
  { name: "Magmar", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/magmar.gif"},
  { name: "Pinsir", hp: 87, types: ["bug"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/pinsir.gif"},
  { name: "Tauros", hp: 103, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/tauros.gif"},
  { name: "Magikarp", hp: 45, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif"},
  { name: "Gyrados", hp: 123, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados.gif" },
  { name: "Lapras", hp: 150, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif"},
  { name: "Ditto", hp: 79, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/ditto.gif"},
  { name: "Eevee", hp: 86, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/eevee.gif" },
  { name: "Vaporeon", hp: 135, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/vaporeon.gif"},
  { name: "Jolteon", hp: 86, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/jolteon.gif"},
  { name: "Flareon", hp: 99, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/flareon.gif"},
  { name: "Porygon", hp: 94, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/porygon.gif"},
  { name: "Omanyte", hp: 70, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/omanyte.gif"},
  { name: "Omastar", hp: 100, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/omastar.gif"},
  { name: "Kabuto", hp: 62, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kabuto.gif"},
  { name: "Kabutops", hp: 90, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/kaputops.gif"},
  { name: "Aerodactyl", hp: 102, types: ["rock", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/aerodactyl.gif"},
  { name: "Snorlax", hp: 182, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif" },
  { name: "Articuno", hp: 124, types: ["ice", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/arcticuno.gif"},
  { name: "Zapdos", hp: 121, types: ["electric", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/zapdos.gif"},
  { name: "Moltres", hp: 123, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/moltres.gif"},
  { name: "Dratini", hp: 76, types: ["dragon"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif"},
  { name: "Dragonair", hp: 94, types: ["dragon"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonair.gif"},
  { name: "Dragonite", hp: 118, types: ["dragon", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif" },
  { name: "Mewtwo", hp: 136, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif" },
  { name: "Mew", hp: 134, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/normal/mew.gif" },
  { name: "Bulbasaur", hp: 68, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/bulbasaur.gif" },
  { name: "Ivysaur", hp: 97, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/ivysaur.gif" },
  { name: "Venusaur", hp: 134, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/venusaur.gif" },
  { name: "Charmander", hp: 65, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/charmander.gif" },
  { name: "Charmeleon", hp: 95, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/charmeleon.gif" },
  { name: "Charizard", hp: 129, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/charizard.gif" },
  { name: "Squirtle", hp: 61, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/squirtle.gif" },
  { name: "Wartortle", hp: 84, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/wartortle.gif" },
  { name: "Blastoise", hp: 131, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/blastoise.gif" },
  { name: "Caterpie", hp: 55, types: ["bug"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/caterpie.gif"},
  { name: "Metapod", hp: 65, types: ["bug"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/metapod.gif"},
  { name: "Butterfree", hp: 84, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/butterfree.gif"},
  { name: "Weedle", hp: 43, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/weedle.gif"},
  { name: "Kakuna", hp: 51, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/kakuna.gif"},
  { name: "Beedrill", hp: 83, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/beedrill.gif"},
  { name: "Pidgey", hp: 55, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/pidgey.gif"},
  { name: "Pidgeotto", hp: 78, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/pidgeotto.gif"},
  { name: "Pidgeot", hp: 118, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/pidgeot.gif"},
  { name: "Rattata", hp: 51, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/rattata.gif"},
  { name: "Raticate", hp: 78, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/raticate.gif"},
  { name: "Spearow", hp: 58, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/spearow.gif"},
  { name: "Fearow", hp: 106, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/fearow.gif"},
  { name: "Ekans", hp: 61, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/ekans.gif"},
  { name: "Arbok", hp: 86, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/arbok.gif"},
  { name: "Pikachu", hp: 56, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/pikachu.gif"},
  { name: "Raichu", hp: 94, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/raichu.gif"},
  { name: "Sandshrew", hp: 61, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/sandshrew.gif"},
  { name: "Sandslash", hp: 90, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/sandslash.gif"},
  { name: "Nidoran(Female)", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/nidoran-f.gif"},
  { name: "Nidorina", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/nidorina.gif"},
  { name: "Nidoqueen", hp: 114, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/nidoqueen.gif"},
  { name: "Nidoran(Male)", hp: 62, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/nidoran-m.gif"},
  { name: "Nidorino", hp: 90, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/nidorino.gif"},
  { name: "Nidoking", hp: 116, types: ["poison", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/nidoking.gif"},
  { name: "Clefairy", hp: 81, types: ["fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/clefairy.gif"},
  { name: "Clefable", hp: 128, types: ["fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/clefable.gif"},
  { name: "Vulpix", hp: 61, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/vulpix.gif"},
  { name: "Ninetales", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/ninetales.gif"},
  { name: "Jigglypuff", hp: 118, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/jigglypuff.gif" },
  { name: "Wigglytuff", hp: 150, types: ["normal", "fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/wigglytuff.gif" },
  { name: "Zubat", hp: 53, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/zubat.gif"},
  { name: "Golbat", hp: 83, types: ["poison", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/golbat.gif"},
  { name: "Oddish", hp: 61, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/oddish.gif"},
  { name: "Gloom", hp: 81, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/gloom.gif"},
  { name: "Vileplume", hp: 102, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/vileplume.gif"},
  { name: "Paras", hp: 54, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/paras.gif"},
  { name: "Parasect", hp: 76, types: ["bug", "grass"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/parasect.gif"},
  { name: "Venonat", hp: 79, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/venonat.gif"},
  { name: "Venomoth", hp: 101, types: ["bug", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/venomoth.gif"},
  { name: "Diglett", hp: 42, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/diglett.gif"},
  { name: "Dugtrio", hp: 66, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/dugtrio.gif"},
  { name: "Meowth", hp: 59, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/meowth.gif" },
  { name: "Persian", hp: 83, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/persian.gif" },
  { name: "Psyduck", hp: 67, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/psyduck.gif" },
  { name: "Golduck", hp: 102, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/golduck.gif" },
  { name: "Mankey", hp: 69, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/mankey.gif"},
  { name: "Primeape", hp: 97, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/primeape.gif"},
  { name: "Growlithe", hp: 66, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/growlithe.gif"},
  { name: "Arcanine", hp: 113, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/arcanine.gif" },
  { name: "Poliwag", hp: 70, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/poliwag.gif"},
  { name: "Poliwhirl", hp: 91, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/poliwhirl.gif"},
  { name: "Poliwrath", hp: 121, types: ["water", "fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/poliwrath.gif"},
  { name: "Abra", hp: 50, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/abra.gif"},
  { name: "Kadabra", hp: 70, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/kadabra.gif" },
  { name: "Alakazam", hp: 90, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/alakazam.gif" },
  { name: "Machop", hp: 85, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/machop.gif" },
  { name: "Machoke", hp: 95, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/machoke.gif" },
  { name: "Machamp", hp: 125, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/machamp.gif" },
  { name: "Bellsprout", hp: 74, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/bellsprout.gif"},
  { name: "Weepinbell", hp: 94, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/weepinbell.gif"},
  { name: "Victreebel", hp: 112, types: ["grass", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/victreebel.gif"},
  { name: "Tentacool", hp: 73, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/tentacool.gif"},
  { name: "Tentacruel", hp: 106, types: ["water", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/tentacruel.gif"},
  { name: "Geodude", hp: 75, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/geodude.gif"},
  { name: "Graveler", hp: 88, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/graveler.gif"},
  { name: "Golem", hp: 103, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/golem.gif"},
  { name: "Ponyta", hp: 69, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/ponyta.gif"},
  { name: "Rapidash", hp: 87, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/rapidash.gif"},
  { name: "Slowpoke", hp: 124, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/slowpoke.gif"},
  { name: "Slowbro", hp: 140, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/slowbro.gif"},
  { name: "Magnemite", hp: 51, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/magnemite.gif"},
  { name: "Magneton", hp: 76, types: ["electric", "steel"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/magneton.gif"},
  { name: "Farfetch'd", hp: 82, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/farfetchd.gif"},
  { name: "Doduo", hp: 67, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/doduo.gif"},
  { name: "Dodrio", hp: 90, types: ["normal", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/dodrio.gif"},
  { name: "Seel", hp: 74, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/seel.gif"},
  { name: "Dewgong", hp: 122, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/dewgong.gif"},
  { name: "Grimer", hp: 108, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/grimer.gif"},
  { name: "Muk", hp: 126, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/muk.gif"},
  { name: "Shellder", hp: 62, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/shellder.gif"},
  { name: "Cloyster", hp: 84, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/cloyster.gif"},
  { name: "Gastly", hp: 62, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/gastly.gif" },
  { name: "Haunter", hp: 79, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/haunter.gif" },
  { name: "Gengar", hp: 95, types: ["ghost", "poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/gengar.gif" },
  { name: "Onix", hp: 64, types: ["rock", "ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/onix.gif"},
  { name: "Drowzee", hp: 74, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/drowzee.gif"},
  { name: "Hypno", hp: 113, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/hypno.gif"},
  { name: "Krabby", hp: 63, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/krabby.gif"},
  { name: "Kingler", hp: 86, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/kingler.gif"},
  { name: "Voltorb", hp: 73, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/voltorb.gif"},
  { name: "Electrode", hp: 92, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/electrode.gif"},
  { name: "Exeggcute", hp: 81, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/exeggcute.gif"},
  { name: "Exeggutor", hp: 112, types: ["grass", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/exeggutor.gif"},
  { name: "Cubone", hp: 68, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/cubone.gif"},
  { name: "Marowak", hp: 91, types: ["ground"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/marowak.gif"},
  { name: "Hitmonlee", hp: 81, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/hitmonlee.gif"},
  { name: "Hitmonchan", hp: 84, types: ["fighting"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/hitmonchan.gif"},
  { name: "Lickitung", hp: 117, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/lickitung.gif"},
  { name: "Koffing", hp: 64, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/koffing.gif"},
  { name: "Weezing", hp: 88, types: ["poison"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/weezing.gif"},
  { name: "Rhyhorn", hp: 102, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/rhyhorn.gif"},
  { name: "Rhydon", hp: 134, types: ["ground", "rock"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/rhydon.gif"},
  { name: "Chansey", hp: 227, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/chansey.gif"},
  { name: "Tangela", hp: 79, types: ["grass"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/tangela.gif"},
  { name: "Kangaskhan", hp: 118, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/kangaskhan.gif"},
  { name: "Horsea", hp: 57, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/horsea.gif"},
  { name: "Seadra", hp: 87 ,types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/seadra.gif"},
  { name: "Goldeen", hp: 54, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/goldeen.gif"},
  { name: "Seaking", hp: 97, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/seaking.gif"},
  { name: "Staryu", hp: 64, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/staryu.gif"},
  { name: "Starmie", hp: 84, types: ["water", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/starmie.gif"},
  { name: "Mr. Mime", hp: 69, types: ["psychic", "fairy"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/mr-mime.gif"},
  { name: "Scyther", hp: 83, types: ["bug", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/scyther.gif"},
  { name: "Jynx", hp: 93, types: ["ice", "psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/jynx.gif"},
  { name: "Electabuzz", hp: 85, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/electabuzz.gif"},
  { name: "Magmar", hp: 90, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/magmar.gif"},
  { name: "Pinsir", hp: 87, types: ["bug"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/pinsir.gif"},
  { name: "Tauros", hp: 103, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/tauros.gif"},
  { name: "Magikarp", hp: 45, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/magikarp.gif"},
  { name: "Gyrados", hp: 123, types: ["water", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/gyarados.gif" },
  { name: "Lapras", hp: 150, types: ["water", "ice"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/lapras.gif"},
  { name: "Ditto", hp: 79, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/ditto.gif"},
  { name: "Eevee", hp: 86, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/eevee.gif" },
  { name: "Vaporeon", hp: 135, types: ["water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/vaporeon.gif"},
  { name: "Jolteon", hp: 86, types: ["electric"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/jolteon.gif"},
  { name: "Flareon", hp: 99, types: ["fire"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/flareon.gif"},
  { name: "Porygon", hp: 94, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/porygon.gif"},
  { name: "Omanyte", hp: 70, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/omanyte.gif"},
  { name: "Omastar", hp: 100, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/omastar.gif"},
  { name: "Kabuto", hp: 62, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/kabuto.gif"},
  { name: "Kabutops", hp: 90, types: ["rock", "water"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/kaputops.gif"},
  { name: "Aerodactyl", hp: 102, types: ["rock", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/aerodactyl.gif"},
  { name: "Snorlax", hp: 182, types: ["normal"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/snorlax.gif" },
  { name: "Articuno", hp: 124, types: ["ice", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/arcticuno.gif"},
  { name: "Zapdos", hp: 121, types: ["electric", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/zapdos.gif"},
  { name: "Moltres", hp: 123, types: ["fire", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/moltres.gif"},
  { name: "Dratini", hp: 76, types: ["dragon"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/dratini.gif"},
  { name: "Dragonair", hp: 94, types: ["dragon"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/dragonair.gif"},
  { name: "Dragonite", hp: 118, types: ["dragon", "flying"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/dragonite.gif" },
  { name: "Mewtwo", hp: 136, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/mewtwo.gif" },
  { name: "Mew", hp: 134, types: ["psychic"], image: "https://img.pokemondb.net/sprites/black-white/anim/shiny/mew.gif" },
];

// DOM Elements
const pokemon1Element = document.getElementById("pokemon1");
const pokemon2Element = document.getElementById("pokemon2");
const startBattleButton = document.getElementById("start-battle");
const battleLog = document.getElementById("battle-log");

// Game state
let battleInterval = null;
let currentPokemon1 = null;
let currentPokemon2 = null;

// Helper functions
function getRandomPokemon() {
  return pokemonList[Math.floor(Math.random() * pokemonList.length)];
}

function getTwoUniquePokemon() {
  let pokemon1 = getRandomPokemon();
  let pokemon2 = getRandomPokemon();
  
  while (pokemon1.name === pokemon2.name) {
    pokemon2 = getRandomPokemon();
  }
  
  return [pokemon1, pokemon2];
}

function calculateEffectiveness(attackerTypes, defenderTypes) {
  let effectiveness = 1;
  
  attackerTypes.forEach(atkType => {
    defenderTypes.forEach(defType => {
      if (typeEffectiveness[atkType] && typeEffectiveness[atkType][defType] !== undefined) {
        effectiveness *= typeEffectiveness[atkType][defType];
      }
    });
  });

  return effectiveness;
}

function getEffectivenessMessage(effectiveness) {
  if (effectiveness === 0) return "It has no effect!";
  if (effectiveness < 1) return "It's not very effective...";
  if (effectiveness > 1) return "It's super effective!";
  return "";
}

function displayPokemon(pokemon, element) {
  const img = element.querySelector(".pokemon-image");
  const name = element.querySelector(".pokemon-name");
  const types = element.querySelector(".pokemon-types");
  const hp = element.querySelector(".pokemon-hp");
  
  img.src = pokemon.image;
  img.alt = pokemon.name;
  name.textContent = pokemon.name;
  hp.textContent = `HP: ${pokemon.hp}`;
  
  // Clear previous types
  types.innerHTML = "";
  
  // Add new type badges
  pokemon.types.forEach(type => {
    const typeBadge = document.createElement("span");
    typeBadge.className = `type-badge type-${type}`;
    typeBadge.textContent = type.charAt(0).toUpperCase() + type.slice(1);
    types.appendChild(typeBadge);
  });
  
  // Remove all animation classes
  element.classList.remove("attack-animation", "damage-animation", "victory-animation", "faint-animation");
}

function simulateBattle(pokemon1, pokemon2) {
  // Reset battle log
  battleLog.innerHTML = "";
  
  // Disable start button
  startBattleButton.disabled = true;
  
  // Reset Pokémon display
  displayPokemon(pokemon1, pokemon1Element);
  displayPokemon(pokemon2, pokemon2Element);
  
  let attacker = pokemon1;
  let defender = pokemon2;
  let attackerElement = pokemon1Element;
  let defenderElement = pokemon2Element;
  
  battleInterval = setInterval(() => {
    if (pokemon1.hp <= 0 || pokemon2.hp <= 0) {
      endBattle(pokemon1, pokemon2);
      return;
    }
    
    // Calculate damage with type effectiveness
    const baseDamage = Math.floor(Math.random() * 10) + 1;
    const effectiveness = calculateEffectiveness(attacker.types, defender.types);
    const damage = Math.max(1, Math.floor(baseDamage * effectiveness));
    
    defender.hp -= damage;
    
    // Update HP display
    defenderElement.querySelector(".pokemon-hp").textContent = `HP: ${Math.max(0, defender.hp)}`;
    
    // Log the attack
    let logMessage = `${attacker.name} attacks! `;
    logMessage += getEffectivenessMessage(effectiveness);
    logMessage += ` ${defender.name} takes ${damage} damage! (${defender.hp > 0 ? defender.hp : 0} HP left)<br>`;
    battleLog.innerHTML += logMessage;
    battleLog.scrollTop = battleLog.scrollHeight;
    
    // Animations
    attackerElement.classList.add("attack-animation");
    defenderElement.classList.add("damage-animation");
    
    // Remove animations after they complete
    setTimeout(() => {
      attackerElement.classList.remove("attack-animation");
      defenderElement.classList.remove("damage-animation");
      
      // Check if defender fainted
      if (defender.hp <= 0) {
        defenderElement.classList.add("faint-animation");
        endBattle(pokemon1, pokemon2);
      }
    }, 500);
    
    // Switch roles for next turn
    [attacker, defender] = [defender, attacker];
    [attackerElement, defenderElement] = [defenderElement, attackerElement];
    
  }, 1500); // 1.5 seconds between turns
}

function endBattle(pokemon1, pokemon2) {
  clearInterval(battleInterval);
  battleInterval = null;
  
  const winner = pokemon1.hp > 0 ? pokemon1 : pokemon2;
  const winnerElement = winner === pokemon1 ? pokemon1Element : pokemon2Element;
  
  battleLog.innerHTML += `<strong>${winner.name} wins the battle!</strong><br>`;
  battleLog.scrollTop = battleLog.scrollHeight;
  
  winnerElement.classList.add("victory-animation");
  
  // Re-enable start button
  startBattleButton.disabled = false;
}

// Event listeners
startBattleButton.addEventListener("click", () => {
  // Stop any ongoing battle
  if (battleInterval) {
    clearInterval(battleInterval);
    battleInterval = null;
  }
  
  // Get new Pokémon
  const [pokemon1, pokemon2] = getTwoUniquePokemon();
  
  // Reset their HP
  const originalPokemon1 = pokemonList.find(p => p.name === pokemon1.name);
  const originalPokemon2 = pokemonList.find(p => p.name === pokemon2.name);
  
  currentPokemon1 = { ...originalPokemon1 };
  currentPokemon2 = { ...originalPokemon2 };
  
  // Start battle
  simulateBattle(currentPokemon1, currentPokemon2);
});

// Initialize with random Pokémon
const [initialPokemon1, initialPokemon2] = getTwoUniquePokemon();
currentPokemon1 = { ...initialPokemon1 };
currentPokemon2 = { ...initialPokemon2 };
displayPokemon(currentPokemon1, pokemon1Element);
displayPokemon(currentPokemon2, pokemon2Element);
