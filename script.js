const phrases = [
"Арсений — это мой лучший друг!",
"А вы знали, что идея сделать сервер была спонтанная?",
"Я учусь в 9-ом классе.",
"Иногда Minecraft — лучший способ просто отдохнуть.",
"Joyful.MC существует ради хорошего вайба.",
"Здесь можно строить что угодно.",
"Главное — не забыть, где поставил дом.",
"Кто-нибудь видел мои алмазы?",
"Этот сервер появился 02.10.2026.",
"Маленький сервер — большая атмосфера.",
"Уютный мир начинается с одного блока.",
"Никаких войн за территории. Спасибо.",
"Minecraft иногда лечит скуку лучше всего.",
"Здесь приветствуется дружба.",
"А если построить город?",
"Надо бы сделать красивый спавн.",
"Кто опять забрал все лодки?",
"Интересно, сколько чанков мы уже исследовали.",
"Солнце садится, а сервер продолжает жить.",
"Здесь даже ночь выглядит уютно.",
"Я просто зайду на пять минут.",
"Пять минут спустя: уже построен замок.",
"Каждый игрок оставляет след в мире.",
"Иногда самый лучший дом — самый странный.",
"Главный ресурс сервера — хорошие люди.",
"Можно просто зайти и посмотреть.",
"Joyful — потому что joyful.",
"Пусть этот мир будет немного добрее.",
"Никакого токсичного PvP-марафона.",
"В Minecraft всегда есть куда идти.",
"Сначала дерево. Потом уже всё остальное.",
"Крипер тоже часть экосистемы. Наверное.",
"Не трогай мой сад.",
"Кто-нибудь построит железную дорогу?",
"Нам определённо нужна ещё одна ферма.",
"Этот мир только начинает свою историю.",
"Каждый новый чан — маленькое приключение.",
"Вечер + Minecraft = классика.",
"Я бы хотел сделать сервер ещё уютнее.",
"А что, если добавить ещё одну деревню?",
"Главное — получай удовольствие.",
"Красивые постройки не требуют спешки.",
"Можно быть архитектором, фермером или исследователем.",
"Сегодня строим. Завтра исследуем.",
"Иногда лучший план — отсутствие плана.",
"Пусть музыка играет, а мир грузится.",
"Не забудь поставить точку возрождения.",
"Кто-то опять ушёл в шахту.",
"Интересно, что там за горизонтом.",
"Minecraft без лишней суеты.",
"Здесь можно быть собой.",
"Небольшой сервер с большими планами.",
"Каждый день может появиться новая постройка.",
"Сделаем этот мир запоминающимся.",
"Я люблю, когда сервер ощущается как своё место.",
"Уют — тоже механика.",
"Всё начинается с простого подключения.",
"Здесь не нужно никуда торопиться.",
"Может, построим маяк?",
"А потом сделаем вокруг него город.",
"Главное — не забыть про освещение.",
"Ночь наступила слишком быстро.",
"Кто-нибудь видел деревню поблизости?",
"Пора обновить карту.",
"У нас уже есть история.",
"Следующая глава ещё не написана.",
"Сервер живёт игроками.",
"Идеи иногда появляются совершенно случайно.",
"Мне нравится этот маленький цифровой мир.",
"Каждая база немного рассказывает о владельце.",
"Давайте сделаем красиво.",
"Можно просто сидеть у костра.",
"Почему бы не построить порт?",
"А рядом — маленькую библиотеку.",
"У каждого мира есть своё настроение.",
"Этот — про спокойствие.",
"Этот — про друзей.",
"Этот — про Minecraft.",
"И немного про хаос.",
"Linux Kernel звучит заманчиво.",
"Я бы хотел систему на ядре Linux Kernel.",
"Но совместимость приложений тоже важна, эх.",
"А так бы скачал Fedora.",
"Технологии тоже могут быть уютными.",
"Код, Minecraft и немного кофе.",
"Сайт тоже должен жить своим движением.",
"Почему фоновые фразы никогда не заканчиваются?",
"Потому что их много.",
"Очень много.",
"Ладно, ещё одна.",
"✦ Joyful.MC ✦",
"Спасибо, что заглянул.",
"Увидимся на сервере.",
"Не забудь IP.",
"joyfulmc.serveminecraft.net",
"02.10.2026 — начало маленькой истории.",
"Пусть всё будет спокойно.",
"Пусть будет весело.",
"Пусть будет красиво.",
"А главное — пусть будет по-дружески."
];

document.addEventListener("DOMContentLoaded", () => {

const phraseContainer = document.querySelector("#floating-phrases");
const cursor = document.querySelector("#cursor-glow");

const tabs = document.querySelectorAll(".tab");
const navButtons = document.querySelectorAll(".nav-btn");
const tabLinks = document.querySelectorAll("[data-tab]");

// ==========================================
// ЗАПРЕТ ВЫДЕЛЕНИЯ ТЕКСТА
// ==========================================

document.addEventListener("selectstart", (event) => {
if (!event.target.closest("#copy-ip")) {
event.preventDefault();
}
});

document.addEventListener("dragstart", (event) => {
if (!event.target.closest("#copy-ip")) {
event.preventDefault();
}
});

document.addEventListener("contextmenu", (event) => {
if (!event.target.closest("#copy-ip")) {
event.preventDefault();
}
});

// ==========================================
// ПЛАВАЮЩИЕ ФРАЗЫ
// ==========================================

if (phraseContainer) {

phrases.forEach((text) => {

  const el = document.createElement("span");

  el.className = "floating-phrase";
  el.textContent = text;

  el.style.left =
    `${Math.random() * 105 - 3}%`;

  el.style.setProperty(
    "--drift",
    `${Math.random() * 180 - 90}px`
  );

  el.style.setProperty(
    "--rot",
    `${Math.random() * 12 - 6}deg`
  );

  el.style.animationDuration =
    `${18 + Math.random() * 32}s`;

  el.style.animationDelay =
    `${-(Math.random() * 45)}s`;

  el.style.opacity =
    `${0.35 + Math.random() * 0.65}`;

  phraseContainer.appendChild(el);
});

}

// ==========================================
// ВКЛАДКИ
// ==========================================

function openTab(id) {

tabs.forEach((tab) => {

  tab.classList.toggle(
    "active",
    tab.id === id
  );

});

navButtons.forEach((button) => {

  button.classList.toggle(
    "active",
    button.dataset.tab === id
  );

});

window.scrollTo({
  top: 0,
  behavior: "smooth"
});

history.replaceState(
  null,
  "",
  `#${id}`
);

}

tabLinks.forEach((link) => {

link.addEventListener("click", (event) => {

  const id = link.dataset.tab;

  if (!id) {
    return;
  }

  event.preventDefault();

  openTab(id);

});

});

const initialTab =
location.hash.replace("#", "");

if (
initialTab &&
document.getElementById(initialTab)
) {
openTab(initialTab);
}

// ==========================================
// КОПИРОВАНИЕ IP
// ==========================================

const copyBtn =
document.querySelector("#copy-ip");

const toast =
document.querySelector("#copy-toast");

const ipElement =
document.querySelector("#server-ip");

if (copyBtn && ipElement) {

const ip =
  ipElement.textContent.trim();

copyBtn.addEventListener(
  "click",
  async () => {

    let copied = false;

    try {

      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {

        await navigator.clipboard.writeText(ip);

        copied = true;
      }

    } catch (error) {
      copied = false;
    }

    // Резервный способ.
    if (!copied) {

      const textarea =
        document.createElement("textarea");

      textarea.value = ip;

      textarea.style.position =
        "fixed";

      textarea.style.left =
        "-9999px";

      textarea.style.top =
        "-9999px";

      document.body.appendChild(
        textarea
      );

      textarea.focus();
      textarea.select();

      try {
        copied =
          document.execCommand("copy");
      } catch (error) {
        copied = false;
      }

      textarea.remove();
    }

    if (toast) {
      toast.classList.add("show");
    }

    const textSpan =
      copyBtn.querySelector(
        "span:last-child"
      );

    if (textSpan) {
      textSpan.textContent =
        copied
          ? "Скопировано!"
          : "Скопируй вручную";
    }

    setTimeout(() => {

      if (toast) {
        toast.classList.remove("show");
      }

      if (textSpan) {
        textSpan.textContent =
          "Скопировать";
      }

    }, 1800);

  }
);

}

// ==========================================
// СВЕЧЕНИЕ КУРСОРА
// ==========================================

if (cursor) {

window.addEventListener(
  "pointermove",
  (event) => {

    cursor.style.left =
      `${event.clientX}px`;

    cursor.style.top =
      `${event.clientY}px`;

  }
);

}

// ==========================================
// 3D КАРТОЧКИ
// ==========================================

document
.querySelectorAll(".tilt")
.forEach((card) => {

  card.addEventListener(
    "pointermove",
    (event) => {

      const rect =
        card.getBoundingClientRect();

      if (
        rect.width === 0 ||
        rect.height === 0
      ) {
        return;
      }

      const x =
        (event.clientX - rect.left)
        / rect.width;

      const y =
        (event.clientY - rect.top)
        / rect.height;

      const rotateX =
        (0.5 - y) * 5;

      const rotateY =
        (x - 0.5) * 7;

      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-3px)`;

    }
  );

  card.addEventListener(
    "pointerleave",
    () => {

      card.style.transform =
        "";

    }
  );

});

// ==========================================
// PARALLAX AURORA
// ==========================================

const aurora1 =
document.querySelector(".aurora-1");

const aurora2 =
document.querySelector(".aurora-2");

const aurora3 =
document.querySelector(".aurora-3");

window.addEventListener(
"pointermove",
(event) => {

  const x =
    event.clientX /
    window.innerWidth - 0.5;

  const y =
    event.clientY /
    window.innerHeight - 0.5;

  if (aurora1) {

    aurora1.style.marginLeft =
      `${x * 25}px`;

    aurora1.style.marginTop =
      `${y * 20}px`;

  }

  if (aurora2) {

    aurora2.style.marginLeft =
      `${x * -20}px`;

  }

  if (aurora3) {

    aurora3.style.marginTop =
      `${y * -25}px`;

  }

}

);

// ==========================================
// RIPPLE
// ==========================================

document
.querySelectorAll("button")
.forEach((button) => {

  button.addEventListener(
    "click",
    (event) => {

      const ripple =
        document.createElement("span");

      ripple.style.position =
        "absolute";

      ripple.style.pointerEvents =
        "none";

      ripple.style.width =
        "5px";

      ripple.style.height =
        "5px";

      ripple.style.borderRadius =
        "50%";

      ripple.style.background =
        "rgba(255,255,255,.35)";

      ripple.style.left =
        `${event.offsetX}px`;

      ripple.style.top =
        `${event.offsetY}px`;

      ripple.style.transform =
        "translate(-50%, -50%)";

      ripple.style.animation =
        "joyfulRipple .6s ease-out forwards";

      button.style.position =
        "relative";

      button.style.overflow =
        "hidden";

      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 650);

    }
  );

});

// ==========================================
// RIPPLE CSS
// ==========================================

const style =
document.createElement("style");

style.textContent = `

@keyframes joyfulRipple {

  from {
    width: 5px;
    height: 5px;
    opacity: 1;
  }

  to {
    width: 220px;
    height: 220px;
    opacity: 0;
  }

}

`;

document.head.appendChild(style);

});