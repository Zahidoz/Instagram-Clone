const slider = document.querySelector(".slider-img");
const btnLogon =document.querySelector('#btn-login')
const errMessage = document.querySelector('.err-message')


const changeBanner = () => {
  //Qisa yol ile sekli deyismek
  //Lakin animasiyali etmek ucun opacity clasi elave etmek lazim
  let current = 2;
  setInterval(() => {
    slider.src = `http://127.0.0.1:5500/img/banner${current}.png`;
    current != 4 ? current++ : (current = 1);
  }, 6000);
}
const checkLoginBtn = () => {
  let username = document.querySelector(`#login-username`);
  let pass = document.querySelector(`#login-pass`);
  let btnLogin = document.querySelector(`#btn-login`);
  username.value.length>5 && pass.value.length>5
    ? btnLogin.disabled = false
    : btnLogin.disabled = true;
  console.log('check')
};
const changeInput = (classname,input) => {
  let x = document.querySelector(`#${classname}`);
  input.value.length > 0
    ? x.classList.add("inpt-focused")
    : x.classList.remove("inpt-focused"); 
    checkLoginBtn()
};


changeBanner()






