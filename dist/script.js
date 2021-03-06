const teamColors = {
  arsenal: 'rgba(240,0,0,.5)',
  astonvilla: 'rgba(73,0,36,.5)',
  brentford: 'rgba(253,0,0,.5)',
  brighton: 'rgba(0,0,253,.5)',
  burnley: 'rgba(70,25,61,.5)',
  chelsea: 'rgba(10,69,145,.5)',
  crystalpalace: 'rgba(0,85,165,.5)',
  everton: 'rgba(0,51,153,.5)',
  leeds: 'rgba(21,47,123,.5)',
  leicester: 'rgba(39,62,138,.5)',
  liverpool: 'rgba(211,23,30,.5)',
  manchestercity: 'rgba(152,197,233,.5)',
  manchesterunited: 'rgba(199,1,1,.5)',
  newcastle: 'rgba(34,177,255,.5)',
  norwichcity: 'rgba(0,136,66,.5)',
  southampton: 'rgba(215,25,32,.5)',
  tottenham: 'rgba(12,32,75,.5)',
  watford: 'rgba(227,0,27,.5)',
  westham: 'rgba(84,0,26,.5)',
  wolves: 'rgba(252,137,28,.5)' };


const dropdown = document.getElementById('dropdown');

dropdown.addEventListener('change', e => {
  document.documentElement.style.setProperty('--formBGColor', teamColors[e.target.value]);
});