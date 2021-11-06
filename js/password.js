var password = document.getElementById('fakePassword');
var toggler = document.getElementById('toggler');

showHidePassword = () => {
  if (password.type == 'password') {
    password.setAttribute('type', 'text');
    toggler.innerHTML = "hide";
  } else {
    toggler.innerHTML = "show";
    password.setAttribute('type', 'password');
  }
};

toggler.addEventListener('click', showHidePassword);