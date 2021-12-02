window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.animation = 'slide-up .5s forwards';
        setTimeout(() => {
            typeWriter();
        }, 1000);
    }, 500);
});

let letters = 0;
let txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi perferendis, ad consequuntur itaque, necessitatibus repellendus obcaecati, nulla alias repellat vitae est consectetur fugiat sed? Ea voluptate dicta blanditiis tempore? Deserunt!';
let speed = 50;

function typeWriter() {
  if (letters < txt.length) {
    document.getElementById('type').innerHTML += txt.charAt(letters);
    letters++;
    setTimeout(typeWriter, speed);
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
