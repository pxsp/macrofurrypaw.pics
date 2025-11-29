window.onload = () => {
  const playlist = [
    { src: "https://cdn.pixelatedaria.space/audio/music-playlist-website-thingy/mevsyourfriendstheflatstanleys.mp3", name: "Me vs Your Friends - The Flat Stanleys" },
    { src: "https://cdn.pixelatedaria.space/audio/music-playlist-website-thingy/mrsmiththirdperiodforeverbluefoster.mp3", name: "Mr. Smith, 3rd period, Forever! - Blue Foster" },
    { src: "https://cdn.pixelatedaria.space/audio/music-playlist-website-thingy/mementomoriwillwood.mp3", name: "Memento Mori: the most important thing in the world - Will Wood" },
    { src: "https://cdn.pixelatedaria.space/audio/music-playlist-website-thingy/shotgun.mp3", name: "shotgun - overtonight" },
    { src: "https://cdn.pixelatedaria.space/audio/music-playlist-website-thingy/twinsizemattresstfb.mp3", name: "Twin Size Mattress - The Front Bottoms" }
  ];

  const audio = document.getElementById("holyshitthisisloud");
  const display = document.querySelector(".sub-sub");
  let current = 0;
  const targetVolume = 0.025;

  function playCurrent() {
    audio.src = playlist[current].src;
    display.textContent = "song: " + playlist[current].name;
    audio.volume = 0;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        display.textContent = "~ click anywhere for music ~";
      });
    }

    
    let vol = 0;
    const fadeIn = setInterval(() => {
      vol += 0.002;
      if (vol >= targetVolume) {
        vol = targetVolume;
        clearInterval(fadeIn);
      }
      audio.volume = vol;
    }, 50);
  }

  function nextSong() {
    
    let vol = audio.volume;
    const fadeOut = setInterval(() => {
      vol -= 0.002;
      if (vol <= 0) {
        clearInterval(fadeOut);
        current++;
        if (current >= playlist.length) current = 0;
        playCurrent();
      } else {
        audio.volume = vol;
      }
    }, 50);
  }

  
  audio.addEventListener("ended", nextSong);

  playCurrent();

  
  document.body.addEventListener("click", () => {
    audio.play();
    display.textContent = "song: " + playlist[current].name;
  });
};
