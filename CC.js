const scriptURL = 'https://script.google.com/macros/s/AKfycbyRYNRZoGfWdRHwf_bZchesJT14y-mU-SAaaRABc7jKMtLFcsY/exec';
const color = 'rgb(55, 131, 55)';
// const color = 'purple';



functionality = function () {
  document.getElementById('b123').addEventListener('click', () => {
    box = document.getElementById('box123').style.display
    if (box == 'block') {
      document.getElementById('c123').innerHTML = 'chat'
      document.getElementById('box123').style.display = 'none'
    } else {
      document.getElementById('c123').innerHTML = 'close'
      document.getElementById('box123').style.display = 'block'
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
              <button onclick='showForm()' class='shrrr'>Send Again</button>
        `
  }
  formError = function () {
    form.innerHTML = `
                      <h3>An Error Occurred <br> please send again</h3>
              <button onclick='showForm()' class='shrrr'>Send Again</button>
        `
  }

  showForm = function () {
    form.innerHTML = `
                           <div class="v123"></div>
        <input type="text" placeholder="* Name" name="Product" value='KT' style='display:none;'>
        <input type="text" placeholder="* Name" name="Name" required>

        <div class="v123"></div>
        <input type="email" placeholder="* Email" name="Email" required>

        <div class="v123"></div>
        <textarea name="" id="" cols="30" rows="5" name="Message" placeholder="* Message" required></textarea>

        <button id="SUB123" class='shrrr'>Submit</button>
        <span>Powered By <a href="http://thekrom.tech">Kromtech</a> </span> 
        `
  }

}

loaded = function () {
  let head = document.querySelector('head')
  let body = document.querySelector('body')
  let link = document.createElement('link')
  let style = document.createElement('style')
  let contentBody = document.createElement('div')
  contentBody.className = 'body123'

  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'

  style.innerHTML = `
  
  .box123456789 {
    max-width: 300px;
    height: fit-content;
    background-color: rgb(255, 255, 255);
    margin-bottom: 5px;
    border-radius: 10px;
    border: 1px solid #d0d0d0;
  }

  button {
    background-color: ${color};
    cursor: pointer;
  }

  header {
    text-align: center;
    /* background-color: rgb(33, 151, 33); */
    border-bottom: 1px solid white;
  }

  form {
    display: flex;
    flex-direction: column;
    border: 0.1px solid #d0d0d0;
    padding: 20px;
    margin: 20px 10px;
    border-radius: px;
    text-align: center;
  }

  textarea {
    resize: none;
    border: 2px solid #d0d0d0;
    border-radius: 5px;
    padding: 11px 0;
    margin: 5px;
    padding-left: 5px;
    outline: none;
  }

  input {
    border: 2px solid #d0d0d0;
    border-radius: 5px;
    padding: 11px 0;
    padding-left: 5px;
    margin: 5px;
    outline: none;
  }

  ::placeholder {
    font-size: larger;
  }
a{
  display: inline;
  text-decoration: none;
  color: green;
}

  button.shrrr {
    border: none;
    outline: none;
    border-radius: 5px;
    min-height: 42px;
    padding: 7px 15px 8px 15px;
    color: white;
  }
  button.shrrr:disabled {
    border: none;
    outline: none;
    border-radius: 5px;
    min-height: 42px;
    padding: 7px 15px 8px 15px;
    color: white;
    background-color: grey;
  }

  #b123 {
    float: right !important;
  }

  .body123 {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-family: cursive;
  }
  `
  contentBody.innerHTML = `
    <div class="body123">
    <div id="box123" class="box123456789" style="display: none;">
      <header>
        <h3 style=" margin: 0;">Hello</h3>
        <p>Please fill out the form below and we will get back to you as soon as possible.</p>
      </header>

      <form action="" name="submit-to-google-sheet">
        <div class="v123"></div>
        <!-- <input type="text" placeholder="* Name" name="Product" value='KT' style='visibility: hidden;'> -->
        <input type="text" placeholder="* Name" name="Name" required>

        <div class="v123"></div>
        <input type="email" placeholder="* Email" name="Email" required>

        <div class="v123"></div>
        <textarea name="" id="" cols="30" rows="5" name="Message" placeholder="* Message" required></textarea>

        <button id="SUB123" class="shrrr">Submit </button>
        <span>Powered By <a href="http://thekrom.tech">Kromtech</a> </span> 

      </form>

      
    </div>

    <button id="b123"
      style="width: 60px; height: 60px; outline: none; border-radius: 50%; border:none; padding-top:5px;">
      <i class="material-icons" id="c123" style="color: white;">chat</i> </button>

  </div>
  `


  head.appendChild(link)
  head.appendChild(style)
  body.appendChild(contentBody)

  functionality()
  
}


document.addEventListener('DOMContentLoaded', loaded)