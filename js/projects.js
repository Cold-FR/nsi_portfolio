txt = [
  '"Projects": {',
  '   "CityWish": {',
  '       "Description": "CityWish est un site de fans officiel du rétro-serveur HabboCity.',
  '       "URL": "https://citywish.fr"',
  '       "Screenshot:" "citywish.png"',
  '   }',
  '   "Heart Release": {',
  '       "Description": "Heart Release est un simulateur de tchat."',
  '       "URL": "https://heart-release.netlify.app"',
  '       "Screenshot:" "heartrelease.png"',
  '   }',
  '   "Avatar ???": {',
  '       "Description": "Avatar ??? est un projet de jeu en ligne',
  '       sur l\'univers d\'Avatar Le Dernier Maître de l\'Air."',
  '       "URL": "Indisponible"',
  '       "Screenshot:" "avatar.png"',
  '   }',
  '   "ENT_BOT": {',
  '       "Description": "ENT_BOT est un projet de Bot Discord relié à un ENT."',
  '       "URL": "https://github.com/Cold-FR/ENT_BOT"',
  '       "Screenshot:" "Indisponible"',
  '   }',
  '}'
];

document.addEventListener('writtingLasted', () => {
  const body = document.getElementById('type');
  body.innerHTML = body.innerHTML.replace('"https://citywish.fr"', '<a href="https://citywish.fr" target"_blank">"https://citywish.fr"</a>');
  body.innerHTML = body.innerHTML.replace('"https://heart-release.netlify.app"', '<a href="https://heart-release.netlify.app" target"_blank">"https://heart-release.netlify.app"</a>');
  body.innerHTML = body.innerHTML.replace('"https://github.com/Cold-FR/ENT_BOT"', '<a href="https://github.com/Cold-FR/ENT_BOT" target"_blank">"https://github.com/Cold-FR/ENT_BOT"</a>');

  body.innerHTML = body.innerHTML.replace('"citywish.png"', '<br/>        <img src="./imgs/citywish.png"/>');
  body.innerHTML = body.innerHTML.replace('"heartrelease.png"', '<br/>        <img src="./imgs/heartrelease.png"/>');
  body.innerHTML = body.innerHTML.replace('"avatar.png"', '<br/>        <img src="./imgs/avatar.png"/>');
});