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


const searchBtnMshirts = document.getElementById('search-btn');
const searchInputMshirts = document.getElementById('search-input');
const mtavaridiv = document.querySelector('.mtavaridiv');

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

searchBtnMshirts.addEventListener('click', () => {
  mtavaridiv.innerHTML = '';
  if (searchInputMshirts.value === '') {
      appendAllMshirtss(MshirtssArr);
      return;
  }
  const filteredArr = MshirtssArr.filter((Mshirts) => {
      // if (Mshirts.title === searchInput.value) {
      //     return true;
      // } else {
      //     return false;
      // }
      return Mshirts.title.includes(searchInputMshirts.value) || Mshirts.price.includes(searchInputMshirts.value);
  });
  appendAllMshirtss(filteredArr);
});

appendAllMshirtss(MshirtssArr);

// Gtranslate