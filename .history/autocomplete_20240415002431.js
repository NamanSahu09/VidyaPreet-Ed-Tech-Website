let availableKeywords = [
  "Indian Institute of Technology Bombay",
  "KIIT UNIVERSITY",
  'SOA University',
  'Trident College',
  'Silicon College',
  'BCA Colleges',
  'BSc. Colleges',
  'B. Tech Colleges',
  'BBA Colleges',
  'MBA Colleges',
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

function selectInput(element) {
  inputBox.value = element.innerHTML;
  resultBox.innerHTML = '';
}

function searchGoogle() {
  const inputBox = document.getElementById('input-box');
  const searchTerm = inputBox.value.trim();
  
  // Check if input contains "bca" or "BCA College" continuously
  const regex = /bca/i;
  if (regex.test(searchTerm) || searchTerm.toLowerCase() === "bca college") {
    window.location.href = 'bca.html'; // Redirect to bca.html
    return;
  }
  
  
  const regexMCA = /mca/i;
  if (regex.test(searchTerm) || searchTerm.toLowerCase() === "mca college") {
    window.location.href = 'mca.html'; 
    return;
  }





  const regexBSc = /bsc/i;
  if (regexBSc.test(searchTerm)) {
    window.location.href = 'bsc.html'; 
    return;
  }
  
  if (searchTerm !== '') {
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
    window.location.href = searchUrl;
  }
}


















 // const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
