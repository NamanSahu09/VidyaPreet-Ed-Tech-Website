const collegeWebsites = {
  "Indian Institute of Technology Bombay": "https://www.iitb.ac.in/",
  "KIIT UNIVERSITY": "https://kiit.ac.in/",
  'SOA University': "https://soa.ac.in/",
  'Trident College': "#", // Replace "#" with the actual website URL if available
  'Silicon College': "#", // Replace "#" with the actual website URL if available
  'Amity University': "https://www.amity.edu/",
  'Manipal University': "https://manipal.edu/",
  'Jawaharlal Nehru University': "https://www.jnu.ac.in/",
  'VIT University': "https://vit.ac.in/",
  'SRM University': "https://www.srmist.edu.in/",
  'Biju Patnaik University of Technology': "https://www.bput.ac.in/",
  'Utkal university': "https://www.utkaluniversity.nic.in/",
  'Ravenshaw University': "https://www.ravenshawuniversity.ac.in/",
  'Sri Sri University': "https://srisriuniversity.edu.in/",
  'Odisha University of Agriculture and Technology, Bhubaneswar': "https://www.ouat.nic.in/",
  'Veer Surendra Sai University of Technology (VSSUT), Burla, Sambalpur': "http://vssut.ac.in/",
  'GIET University': "#" // Replace "#" with the actual website URL if available
};

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
