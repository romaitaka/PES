// Функция для плавного скроллинга
function setupSmoothScroll() {
  const scrollLinks = document.querySelectorAll('.nav-item');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Функция настройки модального окна
function setupModal() {
  const modal = document.getElementById('feedbackModal');
  const btn = document.getElementById('openModal');
  const span = document.getElementsByClassName('close')[0];

  btn.onclick = function() {
    modal.style.display = "block";
  };

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// Функция настройки отправки формы
function setupFormSubmit() {
  const form = document.getElementById('feedbackForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Заявка успешно отправлена!');
    form.reset();
  });
}

// Функция для настройки галереи изображений
function setupGallery() {
  const mainImage = document.querySelector('.feature__slider-main img');
  const thumbnails = document.querySelectorAll('.feature__slider-mini-img');
  const nextButton = document.querySelector('.feature__slider-button');
  const prevButton = document.querySelector('.feature__slider-button_left');
  let activeIndex = Array.from(thumbnails).findIndex(thumb => thumb.classList.contains('active'));

  function setActiveImage(index) {
    thumbnails.forEach(thumb => {
      thumb.classList.remove('active');
    });
    thumbnails[index].classList.add('active');
    mainImage.src = thumbnails[index].src;
    mainImage.alt = thumbnails[index].alt;
    activeIndex = index;
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => setActiveImage(index));
  });

  nextButton.addEventListener('click', () => {
    let newIndex = activeIndex + 1;
    if (newIndex >= thumbnails.length) {
      newIndex = 0; // Переход к первому изображению
    }
    setActiveImage(newIndex);
  });

  prevButton.addEventListener('click', () => {
    let newIndex = activeIndex - 1;
    if (newIndex < 0) {
      newIndex = thumbnails.length - 1; // Переход к последнему изображению
    }
    setActiveImage(newIndex);
  });
}

// Объединение всех функций под одним событием DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  setupSmoothScroll();
  setupModal();
  setupFormSubmit();
  setupGallery();
  // Здесь можно вызвать setupPhoneInput(), если она определена где-то в другом месте вашего скрипта
});

document.addEventListener('DOMContentLoaded', function () {
  // Получаем основные элементы для работы слайдера
  const mainImages = document.querySelectorAll('.feature__slider-main-img');
  const thumbnails = document.querySelectorAll('.feature__slider-mini-img');
  const nextButton = document.querySelector('.feature__slider-button_right');
  const prevButton = document.querySelector('.feature__slider-button_left');

  let currentSlideIndex = Array.from(mainImages).findIndex(img => img.classList.contains('show'));

  // Функция для установки текущего слайда
  function setSlide(index) {
    // Убираем класс 'show' и 'active' со всех элементов
    mainImages.forEach(img => img.classList.remove('show'));
    thumbnails.forEach(thumb => thumb.classList.remove('active'));

    // Добавляем класс 'show' и 'active' нужному элементу
    mainImages[index].classList.add('show');
    thumbnails[index].classList.add('active');

    // Обновляем индекс текущего слайда
    currentSlideIndex = index;
  }

  // Обработчики для кнопок перелистывания
  nextButton.addEventListener('click', function() {
    let newIndex = (currentSlideIndex + 1) % mainImages.length; // Перелистываем вперёд
    setSlide(newIndex);
  });

  prevButton.addEventListener('click', function() {
    let newIndex = (currentSlideIndex - 1 + mainImages.length) % mainImages.length; // Перелистываем назад
    setSlide(newIndex);
  });

  // Обработчики для миниатюр
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function() {
      setSlide(index); // Устанавливаем выбранный слайд
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('fullImage');
  const captionText = document.getElementById('caption');
  const close = document.getElementsByClassName('close-img')[0];

  // Получаем все изображения и добавляем обработчик клика
  document.querySelectorAll('.feature__slider-main-img').forEach(img => {
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  });

  // Обработчик клика на крестик, чтобы закрыть модальное окно
  close.onclick = function() { 
    modal.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const mainImages = document.querySelectorAll('.feature__slider-main-img');
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('fullImage');
  const captionText = document.getElementById('caption');
  const closeButton = document.querySelector('.close-img');
  const nextButton = document.querySelector('.modal-slider-button_right');
  const prevButton = document.querySelector('.modal-slider-button_left');
  let currentImageIndex = 0;

  function openModal(index) {
    modal.style.display = "block";
    modalImg.src = mainImages[index].src;
    captionText.innerHTML = mainImages[index].alt;
    currentImageIndex = index;
  }

  mainImages.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
  });

  function changeImage(step) {
    currentImageIndex = (currentImageIndex + step + mainImages.length) % mainImages.length;
    modalImg.src = mainImages[currentImageIndex].src;
    captionText.innerHTML = mainImages[currentImageIndex].alt;
  }

  nextButton.addEventListener('click', () => changeImage(1));
  prevButton.addEventListener('click', () => changeImage(-1));

  closeButton.addEventListener('click', () => modal.style.display = "none");

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

