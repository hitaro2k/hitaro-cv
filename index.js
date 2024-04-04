
document.addEventListener('DOMContentLoaded', () => {
    const leftTitles = document.querySelectorAll('.left .title, .left .subtitle');
    let maxDelay = 0;
  
    leftTitles.forEach((element, index) => {
      const delay = (index + 1) * 500; // Задержка для плавного появления каждого элемента
      setTimeout(() => element.classList.add('show'), delay);
      maxDelay = delay;
    });

    setTimeout(() => {
      const rightElements = document.querySelectorAll('.right .social_circle');
      rightElements.forEach((element, index) => {
        setTimeout(() => element.classList.add('show'), index * 500); // Постепенное появление каждого элемента
      });
    }, maxDelay + 1500);
    
    
   
    const smoothScrollLinks = document.querySelectorAll('.link-swipe');

    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    function zoomImg(){
      const img = document.querySelectorAll(".img-project")
      
      img.forEach(item =>{
        item.onmouseenter = ()=>{
      
          item.style.width = "100" + "%"
        }
        item.onmouseleave = ()=>{
          item.style.width = "60" + "%"
        }
      }) 
    }
    function zoomImg_stack(){
      const imgList = document.querySelectorAll(".special_img")
      imgList.forEach(item => {
        item.onclick = () => {
            imgList.forEach(img => {
                img.style.width = "30%";
                img.classList.remove("active");
            });

            item.style.width = "90%";
            item.classList.add("active");
        };
    });
    }
    zoomImg_stack()
    zoomImg()
})

function createStar() {
    const star = document.createElement('div');
    star.classList.add('shooting-star');
    document.body.appendChild(star);
  
    // Задаем начальную горизонтальную позицию звезды и верхнюю позицию выше верхней границы экрана
    const startx = Math.random() * window.innerWidth;
    star.style.left = startx + 'px';
    star.style.top = '-5px'; // Начинаем чуть выше видимой области
  
    const duration = 3000; // 3 секунды
  
    // Исправленная анимация: теперь звезда будет двигаться сверху вниз
    star.animate([
      { transform: 'translateY(0)' }, // Начальное положение
      { transform: 'translateY(100vh)' } // Конечное положение
    ], {
      duration: duration,
      easing: 'linear',
      fill: 'forwards' // Удерживает состояние анимации на последнем кадре
    }).onfinish = () => star.remove(); // Удаляем звезду после завершения анимации
}
  
setInterval(() => {
    const starCount = 7 + Math.floor(Math.random() * 4);
    for (let i = 0; i < starCount; i++) {
      setTimeout(createStar, i * 300);
    }
}, 6000);

createStar()

