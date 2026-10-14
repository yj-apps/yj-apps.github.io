// UI strings + language handling. Elements with data-i18n="key" get their text replaced.
window.YJ_STRINGS = {
  ko: {
    "hero.title": "가볍고, 빠르고, 편하게",
    "hero.sub": "모바일 앱과 게임, PC 프로그램을 만드는 yjapps입니다.",
    "group.app": "앱",
    "group.game": "게임",
    "group.pc": "PC",
    "btn.soon": "곧 출시",
    "footer.privacy": "개인정보처리방침",
    "privacy.title": "개인정보처리방침",
    "privacy.intro": "yjapps의 앱은 회원가입 없이 동작하며, 입력한 데이터는 기기에만 저장됩니다. 앱별 개인정보처리방침은 아래에서 확인하세요."
  },
  en: {
    "hero.title": "Light, fast, easy",
    "hero.sub": "yjapps makes mobile apps, games and PC software.",
    "group.app": "Apps",
    "group.game": "Games",
    "group.pc": "PC",
    "btn.soon": "Coming soon",
    "footer.privacy": "Privacy Policy",
    "privacy.title": "Privacy Policy",
    "privacy.intro": "yjapps apps work without an account, and the data you enter stays on your device. See each app's privacy policy below."
  },
  ja: {
    "hero.title": "軽く、速く、快適に",
    "hero.sub": "モバイルアプリ、ゲーム、PCソフトを作る yjapps です。",
    "group.app": "アプリ",
    "group.game": "ゲーム",
    "group.pc": "PC",
    "btn.soon": "近日公開",
    "footer.privacy": "プライバシーポリシー",
    "privacy.title": "プライバシーポリシー",
    "privacy.intro": "yjapps のアプリはアカウント登録なしで使え、入力したデータは端末内にのみ保存されます。各アプリのプライバシーポリシーは以下をご覧ください。"
  },
  zh: {
    "hero.title": "輕巧、快速、好用",
    "hero.sub": "yjapps 製作行動應用程式、遊戲與 PC 軟體。",
    "group.app": "應用程式",
    "group.game": "遊戲",
    "group.pc": "PC",
    "btn.soon": "即將推出",
    "footer.privacy": "隱私權政策",
    "privacy.title": "隱私權政策",
    "privacy.intro": "yjapps 的應用程式無需註冊即可使用，您輸入的資料只會儲存在您的裝置上。各應用程式的隱私權政策請見下方。"
  }
};

window.YJ_LANGS = ["ko", "en", "ja", "zh"];
var YJ_HTML_LANG = { ko: "ko", en: "en", ja: "ja", zh: "zh-Hant" };

(function () {
  function pickLang() {
    var ok = function (l) { return window.YJ_LANGS.indexOf(l) >= 0; };
    var q = new URLSearchParams(location.search).get("lang");
    if (ok(q)) return q;
    try {
      var saved = localStorage.getItem("yj-lang");
      if (ok(saved)) return saved;
    } catch (e) {}
    var nav = (navigator.language || "en").toLowerCase().slice(0, 2);
    return ok(nav) ? nav : "en";
  }

  window.YJ_LANG = pickLang();

  window.yjApplyLang = function (lang) {
    window.YJ_LANG = lang;
    try { localStorage.setItem("yj-lang", lang); } catch (e) {}
    document.documentElement.lang = YJ_HTML_LANG[lang];
    var s = window.YJ_STRINGS[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = s[el.getAttribute("data-i18n")];
      if (v) el.textContent = v;
    });
    // Blocks that exist in both languages (e.g. privacy policy body)
    document.querySelectorAll("[data-lang]").forEach(function (el) {
      el.hidden = el.getAttribute("data-lang") !== lang;
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.setLang === lang ? "true" : "false");
    });
    document.dispatchEvent(new CustomEvent("yj:lang", { detail: lang }));
  };

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      b.addEventListener("click", function () { window.yjApplyLang(b.dataset.setLang); });
    });
    window.yjApplyLang(window.YJ_LANG);
  });
})();
