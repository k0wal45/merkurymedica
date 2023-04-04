const lekarzebtn = document.getElementById('lekarzeBtn')

lekarzebtn.addEventListener('click', MenuAppear)

function MenuAppear() {
  document.getElementById('lekarzeMenu').classList.toggle('hidden')
}

