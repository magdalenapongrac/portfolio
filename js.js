let active = null;

function toggle(img) {
  if (active === img) {
    img.classList.remove('scale-150', 'blur-0', 'opacity-100', 'z-10');
    img.classList.add('scale-75', 'blur-sm', 'opacity-50');
    active = null;
    return;
  }

  if (active) {
    active.classList.remove('scale-150', 'blur-0', 'opacity-100', 'z-10');
    active.classList.add('scale-75', 'blur-sm', 'opacity-50');
  }

  img.classList.remove('scale-75', 'blur-sm', 'opacity-50');
  img.classList.add('scale-150', 'blur-0', 'opacity-100', 'z-10');

  img.scrollIntoView({
    behavior: 'smooth',
    inline: 'center',
    block: 'nearest'
  });

  active = img;
}

function openSection(id) {
  document.querySelectorAll('.radovi-section').forEach(sec => {
    sec.classList.add('hidden');
  });

  const target = document.getElementById(id);
  target.classList.remove('hidden');

  target.scrollIntoView({ behavior: 'smooth' });
}


function sakrivaj() {
  const arrow = document.getElementById('gore');
  const naslovna = document.getElementById('naslovna');

  // Ako smo na naslovnoj, sakrij strelicu
  if (window.scrollY === 0) {
    arrow.style.display = 'none';
  } else {
    arrow.style.display = 'inline-block'; // pokaži strelicu na drugim sekcijama
  }
}

// pozovi funkciju na load i scroll
window.addEventListener('load', sakrivaj);
window.addEventListener('scroll', sakrivaj);




window.onload = function() {

  // Kreiraj modal div u body-u
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center hidden z-50';
  modal.innerHTML = `
    <img id="modal-img" src="" class="max-h-[90vh] max-w-[90vw] object-contain cursor-pointer">
  `;
  document.body.appendChild(modal);

  // Funkcija za otvaranje slike
  window.openModal = function(img) {
    const modalImg = document.getElementById('modal-img');
    modalImg.src = img.src;
    modal.classList.remove('hidden');
  }

  // Klikom na modal sliku zatvori
  modal.addEventListener('click', () => {
    modal.classList.add('hidden');
  });


};










