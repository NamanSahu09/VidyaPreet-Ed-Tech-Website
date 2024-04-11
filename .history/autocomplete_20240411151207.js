let availableKeywords = [
  "Indian Institute of Technology Bombay",
  "KIIT UNIVERSITY",
  'SOA University',
  'Trident College',
  'Silicon College',
  'Amity University',
  'Manipal University',
  'Jawaharlal Nehru University',
  'VIT University',
  'SRM University',
  'Biju Patnaik University of Technology',
  'Utkal university',
  'Ravenshaw University',
  'Sri Sri University',
  'Odisha University of Agriculture and Technology, Bhubaneswar',
  'Veer Surendra Sai University of Technology (VSSUT), Burla, Sambalpur',
  'GIET University'
];

const resultBox = document.querySelector('.result-box');
const inputBox = document.querySelector('#input-box');

inputBox.onkeyup = function() {
  let input = inputBox.value;
  let result = [];

  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }

  const content = result.map((list) => {
    return `<li onclick=selectInput(this)>${list}</li>`;
  });

  resultBox.innerHTML = '<ul>' + content.join('') + '</ul>';
}

function selectInput(this)
{
  inputBox.value = list.innerHTML;
  // resultBox.innerHTML ='';
}