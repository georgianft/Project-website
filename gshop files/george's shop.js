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


const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const mtavaridiv = document.querySelector('.mtavaridiv');

const statement1 = new Statement('PRODUCT shirtw1', 'carouselExampleshirtw1', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$10")
const statement2 = new Statement('PRODUCT shirtw2', 'carouselExampleshirtw2', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$20")
const statement3 = new Statement('PRODUCT shirtw3', 'carouselExampleshirtw3', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$30")
const statement4 = new Statement('PRODUCT shirtw4', 'carouselExampleshirtw4', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$30")
const statement5 = new Statement('PRODUCT shirtw5', 'carouselExampleshirtw5', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$80")
const statement6 = new Statement('PRODUCT shirtw6', 'carouselExampleshirtw6', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$30")
const statement7 = new Statement('PRODUCT shirtw7', 'carouselExampleshirtw7', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$30")
const statement8 = new Statement('PRODUCT shirtw8', 'carouselExampleshirtw8', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$75")
const statement9 = new Statement('PRODUCT shirtw9', 'carouselExampleshirtw9', 'images/WOMAN/testimages/1.jpg', 'images/WOMAN/testimages/2.jpg', 'images/WOMAN/testimages/3.jpg', "$75")
const statement10 = new Statement('PRODUCT shirtw10', 'carouselExampleshirtw10', 'images/WOMAN/testimages/1.png', 'images/WOMAN/testimages/2.png', 'images/WOMAN/testimages/3.jpg', "$60")
const statementsArr = [statement1, statement2, statement3, statement4, statement5, statement6, statement7, statement8, statement9, statement10];


const Mshirts1 = new Mshirts('PRODUCT shirtm1', 'carouselExampleshirtm1', 'images/shirt1/1.jpg', 'images/shirt1/2.jpg', 'images/shirt1/3.jpg', "$10")
const Mshirts2 = new Mshirts('PRODUCT shirtm2', 'carouselExampleshirtm2', 'images/shirt2/1.jpg', 'images/shirt2/2.jpg', 'images/shirt2/3.jpg', "$20")
const Mshirts3 = new Mshirts('PRODUCT shirtm3', 'carouselExampleshirtm3', 'images/shirt1/1.jpg', 'images/shirt1/2.jpg', 'images/shirt1/3.jpg', "$30")
const Mshirts4 = new Mshirts('PRODUCT shirtm4', 'carouselExampleshirtm4', 'images/shirt2/1.jpg', 'images/shirt2/2.jpg', 'images/shirt2/3.jpg', "$60")
const Mshirts5 = new Mshirts('PRODUCT shirtm5', 'carouselExampleshirtm5', 'images/shirt1/1.jpg', 'images/shirt1/2.jpg', 'images/shirt1/3.jpg', "$80")
const Mshirts6 = new Mshirts('PRODUCT shirtm6', 'carouselExampleshirtm6', 'images/shirt2/1.jpg', 'images/shirt2/2.jpg', 'images/shirt2/3.jpg', "$30")
const Mshirts7 = new Mshirts('PRODUCT shirtm7', 'carouselExampleshirtm7', 'images/shirt1/1.jpg', 'images/shirt1/2.jpg', 'images/shirt1/3.jpg', "$30")
const Mshirts8 = new Mshirts('PRODUCT shirtm8', 'carouselExampleshirtm8', 'images/shirt2/1.jpg', 'images/shirt2/2.jpg', 'images/shirt2/3.jpg', "$75")
const Mshirts9 = new Mshirts('PRODUCT shirtm9', 'carouselExampleshirtm9', 'images/shirt1/1.jpg', 'images/shirt1/2.jpg', 'images/shirt1/3.jpg', "$100")
const Mshirts10 = new Mshirts('PRODUCT shirtm10', 'carouselExampleshirtm10', 'images/shirt1/1.jpg', 'images/shirt1/2.jpg', 'images/shirt1/3.jpg', "$60")
const MshirtssArr = [Mshirts1, Mshirts2, Mshirts3, Mshirts4, Mshirts5, Mshirts6, Mshirts7, Mshirts8, Mshirts9, Mshirts10];


const appendMshirts = (Mshirts) => {
  const MshirtsTemplate = `
  <div id="${Mshirts.id}" class="carousel slide" data-ride="carousel">
  <h2>${Mshirts.title}</h2>
  <ol class="carousel-indicators">
    <li data-target="#${Mshirts.id}" data-slide-to="0" class="active"></li>
    <li data-target="#${Mshirts.id}" data-slide-to="1"></li>
    <li data-target="#${Mshirts.id}" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${Mshirts.img}" class="d-block w-100" alt="..." width="380" height="340">
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${Mshirts.img2}" class="d-block w-100" alt="..." width="380" height="340">
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${Mshirts.img3}" class="d-block w-100" alt="..." width="380" height="340">
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#${Mshirts.id}" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#${Mshirts.id}" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <div id="">
    <a href=""></a>
  </div>
  <div id="shirt1AddtobagId">
    <a href="https://www.nokia.com/">Add to basket. Just for ${Mshirts.price}</a>
  </div>
</div>`;
  
mtavaridiv.innerHTML += MshirtsTemplate;
}

const appendAllMshirtss = (Mshirtss) => {
  for (const Mshirts of Mshirtss) {
      appendMshirts(Mshirts);
  }
}


// appendAllMshirtss(MshirtssArr);

// Gtranslate

for (let index = 0; index < MshirtssArr.length; index++) {
  const element = MshirtssArr[index];
  statementsArr.push(element)
}



const appendStatement = (statement) => {
  const statementTemplate = `
  <div id="${statement.id}" class="carousel slide" data-ride="carousel">
  <h2>${statement.title}</h2>
  <ol class="carousel-indicators">
    <li data-target="#${statement.id}" data-slide-to="0" class="active"></li>
    <li data-target="#${statement.id}" data-slide-to="1"></li>
    <li data-target="#${statement.id}" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${statement.img}" class="d-block w-100" alt="..." width="380" height="340">
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${statement.img2}" class="d-block w-100" alt="..." width="380" height="340">
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${statement.img3}" class="d-block w-100" alt="..." width="380" height="340">
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#${statement.id}" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#${statement.id}" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  <div id="">
    <a href=""></a>
  </div>
  <div id="shirt1AddtobagId">
    <a href="https://www.nokia.com/">Add to basket. Just for ${statement.price}</a>
  </div>
</div>`;
  
mtavaridiv.innerHTML += statementTemplate;
}

const appendAllStatements = (statements) => {
  for (const statement of statements) {
      appendStatement(statement);
  }
}

searchBtn.addEventListener('click', () => {
  mtavaridiv.innerHTML = '';
  if (searchInput.value === '') {
      appendAllStatements(statementsArr);
      return;
  }
  const filteredArr2 = statementsArr.filter((statement) => {
      // if (statement.title === searchInput.value) {
      //     return true;
      // } else {
      //     return false;
      // }
      return statement.title.includes(searchInput.value) || statement.price.includes(searchInput.value);
  });
  appendAllStatements(filteredArr2);
});

appendAllStatements(statementsArr);

// Gtranslate
console.log(MshirtssArr)
console.log(statementsArr)