// Ждём загрузку контента
window.onload = function () {
  const parallax = document.querySelector(".invest");

  if (parallax) {
      const item1 = document.querySelector(".icons-invest__item_1");
      const item2 = document.querySelector(".icons-invest__item_2");
      const item3 = document.querySelector(".icons-invest__item_3");
      const item4 = document.querySelector(".icons-invest__item_4");
      const item5 = document.querySelector(".icons-invest__item_5");
      const item6 = document.querySelector(".icons-invest__item_6");
      const item7 = document.querySelector(".icons-invest__item_7");
      const item8 = document.querySelector(".icons-invest__item_8");
      const item9 = document.querySelector(".icons-invest__item_9");


    // Коэффициенты
      const forItem1 = 3;
      const forItem2 = 1;
      const forItem3 = 3;
      const forItem4 = 4;
      const forItem5 = 3;
      const forItem6 = 3;
      const forItem7 = 1;
      const forItem8 = 5;
      const forItem9 = 6;

    // Скорость анимации
  const speed = 0.05;

  // Объявление переменных
  let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;
    
    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      // Передаём стили в CSS
     
        item1.style.cssText = `transform: translate(${positionX / forItem1}%,${positionY / forItem1}%);`;
        item2.style.cssText = `transform: translate(${positionX / forItem2}%,${positionY / forItem2}%);`;
        item3.style.cssText = `transform: translate(${positionX / forItem3}%,${positionY / forItem3}%);`;
        item4.style.cssText = `transform: translate(${positionX / forItem4}%,${positionY / forItem4}%);`;
        item5.style.cssText = `transform: translate(${positionX / forItem5}%,${positionY / forItem5}%);`;
        item6.style.cssText = `transform: translate(${positionX / forItem6}%,${positionY / forItem6}%);`;
        item7.style.cssText = `transform: translate(${positionX / forItem7}%,${positionY / forItem7}%);`;
        item8.style.cssText = `transform: translate(${positionX / forItem8}%,${positionY / forItem8}%);`;
        item9.style.cssText = `transform: translate(${positionX / forItem9}%,${positionY / forItem9}%);`;
      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      // Получение ширины и высоты блока экрана
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      // Ноль по середине
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      // Получаем проценты
      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });

  }
}