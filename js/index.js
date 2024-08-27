console.log("This is my script");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "tushar01anand",
  email: "tushar01anand@gmail.com",
  score: 0.48,
  state: "unknown",
  domain: "gmail.com",
  reason: "no_connect",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault(); 
  console.log("Clicked!");
  resultCont.innerHTML = `<img width="123" src ="img/loading.svg" alt="">`

  let key = "ema_live_Z2jgg30jjQ5fup0if9Zrs1r2EcbJAorkSchk6EHk";
  let email = document.getElementById("username").value; 
  
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let apiResult = await res.json(); 
  let str = ``;

  for (let key of Object.keys(apiResult)) { 
    if (apiResult[key] !== "" && apiResult[key] !== " ") {
      str = str + `<div>${key}: ${apiResult[key]}</div>`;
    }
  }

  console.log(str);
  document.getElementById("resultCont").innerHTML = str; 
});
