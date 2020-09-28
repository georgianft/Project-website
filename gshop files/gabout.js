const changeThemeBtn = document.querySelector('#changeThemeBtn');
const body = document.querySelector('body');
const form = document.querySelector('form');
// const par = document.querySelector('.dark-body p');
let isInDarkMode = false;

const toggleTheme = () => {
  body.classList.toggle('dark-body');
  form.classList.toggle('dark-form');
  // par.classList.toggle('.dark-body p');
  isInDarkMode = !isInDarkMode;
  if (isInDarkMode) {
      changeThemeBtn.textContent = 'Change To Light Theme';
  } else {
      changeThemeBtn.textContent = 'Change To Dark Theme';
  }
}

changeThemeBtn.addEventListener('click', toggleTheme);

$(function() {
    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
      event.preventDefault();
      event.stopPropagation();
  
      $(this).siblings().toggleClass("show");
  
  
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
  
    });
  });


const searchBtngabout = document.getElementById('search-btn-gabout');
const searchInputgabout = document.getElementById('search-input-gabout');
const mtavaridivgabout = document.querySelector('.mtavaridivgabout');


// const statement10 = new Statement('PRODUCT shirtw10', 'carouselExampleshirtw10', 'images/WOMAN/testimages/1.png', 'images/WOMAN/testimages/2.png', 'images/WOMAN/testimages/3.jpg', "$60")
// const statementsArr = [statement1, statement2, statement3, statement4, statement5, statement6, statement7, statement8, statement9, statement10];

const textclass1 = new textclass('ABOUT US', 'Modern Mall is the first and largest unique development in the Southern Caucasus to meet globally recognized standards. It is the first modern center combining leisure, retail and entertainment in the region. Like all RAKEEN projects, Modern Mall blends innovative, ecologically green architecture with the natural habitat. Its architectural concept is both contemporary and suitable for its surroundings, reflecting the culture and contemporary demands of the country. Located within easy reach of the city center, Modern Mall provides a new, exciting family destination experience for Georgiaâ€™s residents and tourists and offers a broad range of high street and internationally famous brands. The Mall occupies a total of four floors and spans approximately over 74,000 mÂ². It comprises up to 250 retail units, 2,000 parking spaces, a 15,000 mÂ² hypermarket and a 1,000 mÂ² entertainment center'

+'The outlets of well-known retail brands, department stores and banking facilities line the concourse. Other features include a multi-screen cinema, distinguished food court and a family entertainment center on the upper levels. Modern Mall also benefits from a multi-story free-of-charge car park, spread over four underground levels.'

+ 'Modern Mall changes your shopping experience, allowing customers of any age and interest to spend valuable and interesting time in the mall. Here, you can spend loving, playful, chic and adventurous days by yourself or with your friends and family.' )
const textclass2 = new textclass('WORKING HOURS:', 'Modern MALL: Every Day from 10:00 to 22:00')
const textclassArr = [textclass1, textclass2];


const appendStatement = (textclass) => {
  const textclassTemplate = `
    <h1>${textclass.h1}</h1
    <p>${textclass.p}</p
    `
  
    mtavaridivgabout.innerHTML += textclassTemplate;
}

const appendAllStatements = (textclasss) => {
  for (const textclass of textclasss) {
      appendStatement(textclass);
  }
}

searchBtngabout.addEventListener('click', () => {
  mtavaridivgabout.innerHTML = '';
  if (searchInputgabout.value === '') {
      appendAllStatements(textclassArr);
      return;
  }
  const filteredArr = textclassArr.filter((textclass) => {
      // if (statement.title === searchInput.value) {
      //     return true;
      // } else {
      //     return false;
      // }
      return textclass.h1.includes(searchInputgabout.value) || textclass.p.includes(searchInputgabout.value);
  });
  appendAllStatements(filteredArr);
});

appendAllStatements(textclassArr);

// Gtranslate