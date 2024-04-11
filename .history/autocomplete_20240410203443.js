let availableKeywords = [
" Indian Institute of Technology Bombay",
"KIIT UNIVERSITY",
'SOA University'
,'Trident College'
,'Silicon College'
,'Amity University',
'Manipal University'
,'Jawaharlal Nehru University',
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

const inputBox = document.querySelector('.input-box');

inputBox.onkeyup = function(){
  let result=[];
  let input = inputBox.ariaValueMax;
  if(input.length)
  {
    result = availableKeywords.filter(keyword =>
    {
      keyword.toLowerCase().includes(input.toLower);
    });
  }
}