document.addEventListener('DOMContentLoaded', function () {
  setupSmoothScroll();
  setupModal();
  setupPhoneInput();
});

function setupSmoothScroll() {
  // Поиск всех ссылок с классом 'nav-item' и добавление обработчика событий на каждую ссылку
  const scrollLinks = document.querySelectorAll('.nav-item');

  scrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault(); // Предотвращение стандартного поведения ссылки
          const id = this.getAttribute('href').substring(1);
          const section = document.getElementById(id);

          if (section) {
              // Плавный скролл к секции
              section.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
}

function setupModal() {
  // Переменные для работы с модальным окном
  const modal = document.getElementById('feedbackModal');
  const btn = document.getElementById('openModal');
  const span = document.getElementsByClassName('close')[0];

  // Открытие модального окна
  btn.onclick = function() {
      modal.style.display = "block";
  };

  // Закрытие модального окна
  span.onclick = function() {
      modal.style.display = "none";
  };

  // Закрытие модального окна при клике вне его содержимого
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };
}

document.addEventListener('DOMContentLoaded', function () {
  setupFormSubmit();
  // Предыдущие функции setupSmoothScroll, setupModal, setupPhoneInput...
});

function setupFormSubmit() {
  const form = document.getElementById('feedbackForm');
  
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем стандартную отправку формы

      // Ваш код для валидации и сбора данных формы
      // Например, можно здесь добавить AJAX запрос для отправки данных формы без перезагрузки страницы

      alert('Заявка успешно отправлена!');

      // Опционально: очистка формы после отправки
      form.reset();
  });
}


