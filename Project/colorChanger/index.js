const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");
const h1 = document.querySelector("h1");


buttons.forEach((item)=>{
    item.addEventListener('click',(e)=>{
     
      switch (e.target.id) {
        case "grey":
          body.style.backgroundColor = e.target.id;
          h1.innerText = `You Clicked ${e.target.id} color`;
          break;

        case "white":
          body.style.backgroundColor = e.target.id;
          h1.innerText = `You Clicked ${e.target.id} color`;
          break;

        case "blue":
          body.style.backgroundColor = e.target.id;
          h1.innerText = `You Clicked ${e.target.id} color`;
          break;

        case "yellow":
          body.style.backgroundColor = e.target.id;
          h1.innerText = `You Clicked ${e.target.id} color`;
          
          break;

        default:
          break;
      }
    })
});