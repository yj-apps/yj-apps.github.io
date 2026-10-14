(function () {
  function groupOf(app) {
    if (app.platform === "pc") return "pc";
    return app.category === "game" ? "game" : "app";
  }

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function item(app, lang, s) {
    var row = el(app.url ? "a" : "div", "item");
    if (app.url) {
      row.href = app.url;
      row.target = "_blank";
      row.rel = "noopener";
    }

    var icon = el("div", "item-icon" + (app.pixel ? " pixel" : ""));
    if (/\.(png|jpe?g|webp|svg)$/i.test(app.icon)) {
      var img = el("img");
      img.src = "/" + app.icon;
      img.alt = "";
      img.loading = "lazy";
      icon.appendChild(img);
    } else {
      icon.style.background = "linear-gradient(135deg," + app.color[0] + "," + app.color[1] + ")";
      icon.textContent = app.icon;
    }
    row.appendChild(icon);

    var text = el("div", "item-text");
    var title = el("h3", null, app.name[lang] || app.name.en);
    if (!app.url) title.appendChild(el("span", "soon", s["btn.soon"]));
    text.appendChild(title);
    text.appendChild(el("p", null, app.desc[lang] || app.desc.en));
    row.appendChild(text);

    return row;
  }

  function render() {
    var lang = window.YJ_LANG;
    var s = window.YJ_STRINGS[lang];
    document.querySelectorAll(".list").forEach(function (list) {
      list.textContent = "";
      window.YJ_APPS.forEach(function (app) {
        if (groupOf(app) === list.dataset.group) list.appendChild(item(app, lang, s));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
  });

  document.addEventListener("yj:lang", render);
})();
