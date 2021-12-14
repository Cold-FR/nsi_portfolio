const typingEvent = new Event('typing');
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.animation = 'slide-up .5s forwards';
        setTimeout(() => {
          timeout = setTimeout(() => typeWriter(), 1000);
        }, 1000);
    }, 1000);
});

let txt = [];
let letters = 0;
let sentence = 0;
let speed = 50;
let timeout = null;

function typeWriter() {
  if (letters < txt[sentence].length) {
    document.getElementById('type').innerHTML += txt[sentence][letters];
    letters++;
    timeout = setTimeout(typeWriter, speed);
    if(letters === txt[sentence].length) {
      letters = 0;
      clearTimeout(timeout);
      if(sentence + 1 !== txt.length) {
        sentence += 1;
        setTimeout(() => {
          document.getElementById('type').innerHTML += '<br/>';
          timeout = setTimeout(() => typeWriter(), 1000);
        }, 500);
      }
    }
  }
}

document.getElementById('speed-up').addEventListener('click', () => changeSpeed('up'));
document.getElementById('speed-reset').addEventListener('click', () => changeSpeed('reset'))
document.getElementById('speed-down').addEventListener('click', () => changeSpeed('down'));

function changeSpeed(action) {
  if(action === 'down') {
    speed > 10 ? speed -= 10 : speed = 10;
  } else if (action === 'up') {
    speed += 10;
  } else if (action === 'reset') {
    speed = 50;
  }
  return document.getElementById('speed-reset').innerText = `${speed}ms`;
}

particlesJS("particles", {
  "particles": {
    "number": {
      "value": 50,
      "density": {
        "enable": true,
        "value_area": 750
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});