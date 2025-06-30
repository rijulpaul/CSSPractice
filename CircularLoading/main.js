const loader = document.querySelector("#loader");

let progress = 0,
  end = 360;

let load = setInterval(() => {
  progress++;

  loader.style.background = `conic-gradient(red ${progress}deg, black ${progress}deg)`;

  if (progress == end) {
    clearInterval(load);
  loader.style.background = "green";
  }
}, 20);
