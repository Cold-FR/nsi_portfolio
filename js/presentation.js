txt = [
  '"Name": "Clément",', 
  '"Age": 16,', 
  '"Hobbies": ["Technologie", "Informatique", "Jeux vidéos"],',
  '"Computer Science Amateuring": {',
  '   "Languages": {',
  '       "HTML": true,',
  '       "CSS": true,',
  '       "JS": true,',
  '       "PHP": true',
  '   }',
  '},',
  '"Description": "Je m\'appelle Clément, j\'ai 16 ans,',
  'je me passionne pour le numérique et l\'informatique depuis ma 6ème.",',
  '"Contact": {',
  '   "GitLab": "@ColdFR",',
  '   "GitHub": "@Cold-FR"',
  '}'        
];

document.addEventListener('writtingLasted', () => {
  const body = document.getElementById('type');
  body.innerHTML = body.innerHTML.replace('"GitLab": "@ColdFR"', '<a href="https://gitlab.com/ColdFR" target="_blank">"GitLab": "@ColdFR"</a>');
  body.innerHTML = body.innerHTML.replace('"GitHub": "@Cold-FR"', '<a href="https://github.com/Cold-FR" target="_blank">"GitHub": "@Cold-FR"</a>');
});

