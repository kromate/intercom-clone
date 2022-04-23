const scriptURL = 'https://script.google.com/macros/s/AKfycbwNddRBf6fJHnual0bmKRm6ExEHf6520FRv_2t66FO28tUBj4AiZlkr0lk2-p3iDAmf8g/exec';
const color = 'rgb(55, 131, 55)';
const openIcon = `<rect x="0.900146" y="4.5" width="22.2" height="15" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
<path d="M22.5 5.25L12.8719 12.1272C12.3503 12.4998 11.6497 12.4998 11.1281 12.1272L1.5 5.25" stroke="currentColor" stroke-width="1.5"/>`
const closeIcon = `
<path d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>å
`
// const color = 'purple';



functionality = function () {
    document.querySelector('.closebtn').addEventListener('click', () => {
          document.getElementById('c123').innerHTML = openIcon
          document.getElementById('box123').style.display = 'none'
       document.getElementById('b123').classList.add('animateB123')
    })
  document.getElementById('b123').addEventListener('click', () => {
    box = document.getElementById('box123').style.display
    if (box == 'block') {
        document.getElementById('c123').innerHTML = openIcon
          document.getElementById('box123').style.display = 'none'
       document.getElementById('b123').classList.add('animateB123')
    } else {
      document.getElementById('c123').innerHTML = closeIcon
        document.getElementById('box123').style.display = 'block'
         document.getElementById('b123').classList.remove('animateB123')
    }

  })

  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    document.querySelector('#SUB123').disabled = true;
    document.querySelector('#SUB123').innerHTML = 'Sending...'
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => { formSubmit() })
      .catch(error => formError())
  })

  formSubmit = function () {
    form.innerHTML = `
                      <h3>Form Submitted</h3>
              <button onclick='showForm()' class='shrrr'>Send Another</button>
        `
  }
  formError = function () {
    form.innerHTML = `
                      <h3>An Error Occurred <br> please send again</h3>
              <button onclick='showForm()' class='shrrr'>Retry</button>
        `
  }

    showForm = function () {
    form.innerHTML = `
                       <div class="v123"></div>
         <input type="text" placeholder="* Name" name="Product" value='KT' style='visibility: hidden; height:0px; padding:0px'> 
        <input type="text" placeholder="* Name" name="Name" required>

        <div class="v123"></div>
        <input type="email" placeholder="* Email" name="Email" required>

        <div class="v123"></div>
        <textarea id="" name="Message" placeholder="* Message" rows="8" required></textarea>

        <button id="SUB123" class="shrrr">Submit </button>
        `
  }

}

loaded = function () {
  let head = document.querySelector('head')
  let body = document.querySelector('body')
  let style = document.createElement('style')
  let contentBody = document.createElement('div')
  contentBody.className = 'body123'


  style.innerHTML = `
  
        @keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
}

.body123 *{
    font-family: sans-serif;
}
.body123 h3{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
  button {
    background-color: purple;
    cursor: pointer;
    color: white;
    transition: all .35s linear;
  }
  button.animateB123 {
     animation: float 5s ease-in-out infinite;
  }

  header {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    outline-offset: -5px;
    padding: 24px 24px 0px 50px;
    box-sizing: border-box;
    background: purple;
    color: white;
    min-height: 130px;

  }

  form {
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    margin-top: 150px;
    text-align: center;
  }

  textarea {
    resize: none;
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
    outline: none;
  }

  input {
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    padding: 1rem;
      margin-top: 1rem;
    outline: none;
  }
.box123 input:hover, .box123 textarea:hover{
  box-shadow: 0 0 5pt 0.5pt #D3D3D3;
}
.box123 input:focus, .box123 textarea:focus {
  box-shadow: 0 0 5pt 2pt #D3D3D3;
  outline-width: 0px;
}
  ::placeholder {
    font-size: larger;
  }


  button.shrrr {
    border: none;
    outline: none;
    border-radius: 5px;
    min-height: 50px;
    padding: 1rem ;
    color: white;
    margin-top: 1rem;
  }
  button.shrrr:disabled {
    color: white;
    cursor: not-allowed;
    background-color: grey !important;
  }

  #b123 {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    cursor: pointer;
    transform-origin: center center;
    backface-visibility: hidden;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  .box123 {
    z-index: 200000;
    position: fixed;
    bottom: 100px;
    right: 20px;
    height: calc(100% - 120px);
    width: 376px;
    min-height: 250px;
    max-height: 704px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
    opacity: 1;
    border-radius: 8px;
    overflow: hidden;
    transition: width 200ms ease 0s, height ease 0s, max-height ease 0s;
  }
  .closebtn{
      position: absolute;
      top: 24px;
      right: 24px;
      width: 15px;
      display: none;
  }
  @media  (max-width: 450px) {
       .box123{
    width: 100%;
    height: 100%;
    max-height: none;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    border-radius: 0px;
    background: #fff;
       }
       .closebtn{
           display: block;
       }
  }
  `
  contentBody.innerHTML = `
     <div class="body123">
    <div id="box123" class="box123" style="display: none;">
      <header>
        <h3>Company Title</h3>
        <p>Description text goes here</p>
        <svg width="20" height="20" class="closebtn" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.5L22.8627 22.5627" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.8625 1.5L1.49986 22.5627" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


      </header>

      <form action="" name="submit-to-google-sheet">
        <div class="v123"></div>
         <input type="text" placeholder="* Name" name="Product" value='KT' style='visibility: hidden; height:0px; padding:0px'> 
        <input type="text" placeholder="* Name" name="Name" required>

        <div class="v123"></div>
        <input type="email" placeholder="* Email" name="Email" required>

        <div class="v123"></div>
        <textarea id="" name="Message" placeholder="* Message" rows="8" required></textarea>

        <button id="SUB123" class="shrrr">Submit </button>

      </form>

      
    </div>

    <button id="b123" class="animateB123"
      style="width: 60px; height: 60px; outline: none; border-radius: 50%; border:none; padding-top:5px;">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="c123">
<rect x="0.900146" y="4.5" width="22.2" height="15" rx="1.5" stroke="currentColor" stroke-width="1.8"/>
<path d="M22.5 5.25L12.8719 12.1272C12.3503 12.4998 11.6497 12.4998 11.1281 12.1272L1.5 5.25" stroke="currentColor" stroke-width="1.5"/>
</svg>


  </div>
  `


  head.appendChild(style)
  body.appendChild(contentBody)

  functionality()
  
}

document.addEventListener('DOMContentLoaded', loaded)