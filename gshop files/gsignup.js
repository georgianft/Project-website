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


// suratis chasma egreve  
$("input").change(function(e) {

    for (const i = 0; i < e.originalEvent.srcElement.files.length; i++) {
        
        const file = e.originalEvent.srcElement.files[i];
        
        const img = document.createElement("img");
        const reader = new FileReader();
        reader.onloadend = function() {
             img.src = reader.result;
        }
        reader.readAsDataURL(file);
        $("input").after(img);
    }
});