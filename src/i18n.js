import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            openToWork: "Open to work",
            basedIn: "Based in Poland",
            selectedWorks: "Selected works",
            slupianChessLigue: "Slupian Chess Ligue",
            getInTouch: "Get in touch",
            linkedin: "Linkedin",
            github: "GitHub",
            name: "Maksym Tiupa",
            minesweeperDesc: "A multiplayer version of the classic Minesweeper game, where players can compete against each other in real-time. The game features a dynamic grid, where players can reveal tiles and flag mines, with the first player to clear their grid winning the game.",
            minesweeperLink: "Go to website",
            slsDesc: "Slupian Chess Ligue is a web application designed for chess enthusiasts, allowing players to engage in offline tournaments, track their progress, and participate in chess events. The platform features real-time game updates, player statistics, and a user-friendly interface for an immersive chess experience.",
            slsLink: "GitHub Repo"
        }
    },
    pl: {
        translation: {
            openToWork: "Gotowy do pracy",
            basedIn: "Mieszkam w Polsce",
            selectedWorks: "Wybrane projekty",
            slupianChessLigue: "Słupska Liga Szachowa",
            getInTouch: "Skontaktuj się",
            linkedin: "Linkedin",
            github: "GitHub",
            name: "Maksym Tiupa",
            minesweeperDesc: "Klasyczna gra Saper z trybem wieloosobowym. Gra oferuje dynamiczną planszę, na której gracze odkrywają pola i oznaczają miny. Wygrywa ten, kto pierwszy oczyści swoją planszę.",
            minesweeperLink: "Przejdź do strony",
            slsDesc: "Słupska Liga Szachowa to aplikacja internetowa dla miłośników szachów, umożliwiająca śledzenie postępów oraz udział w turniejach offline. Platforma oferuje aktualizacje gier w czasie rzeczywistym, statystyki graczy i przyjazny interfejs dla pełnego doświadczenia szachowego.",
            slsLink: "Repozytorium GitHub"
        }
    },
    ua: {
        translation: {
            openToWork: "Відкритий до роботи",
            basedIn: "Живу в Польщі",
            selectedWorks: "Вибрані роботи",
            slupianChessLigue: "Слупська шахова ліга",
            getInTouch: "Зв'язатися",
            linkedin: "Linkedin",
            github: "GitHub",
            name: "Максим Тюпа",
            minesweeperDesc: "Багатокористувацька версія класичної гри \"Сапер\", де гравці змагаються один з одним у реальному часі. Гра має динамічне поле, на якому можна відкривати клітинки та позначати міни. Перемагає той, хто першим очистить своє поле.",
            minesweeperLink: "Перейти на сайт",
            slsDesc: "Слупська шахова ліга — це веб-додаток для любителів шахів міста Слупськ, який дозволяє відстежувати прогрес та брати участь у оффлайн турнірах. Платформа має оновлення ігор у реальному часі, статистику гравців і зручний інтерфейс для повного шахового досвіду.",
            slsLink: "GitHub Репозиторій"
        }
    },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'querystring', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;