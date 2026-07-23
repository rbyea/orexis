/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image()
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2)
		}
		webP.src =
			"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? "webp" : "no-webp"
		document.documentElement.classList.add(className)
	})
}

/* Проверка мобильного браузера */
let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i)
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i)
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i)
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i)
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i)
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		)
	},
}
/* Добавление класса touch для HTML, если браузер мобильный */
function addTouchClass() {
	// Добавление класса _touch для HTML, если браузер мобильный
	if (isMobile.any()) document.documentElement.classList.add("touch")
}

// Добавление loaded для HTML после полной загрузки страницы
function addLoadedClass() {
	if (!document.documentElement.classList.contains("loading")) {
		window.addEventListener("load", function () {
			setTimeout(function () {
				document.documentElement.classList.add("loaded")
			}, 0)
		})
	}
}

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css */
isWebp()
/* Добавление класса touch для HTML если браузер мобильный */
addTouchClass()
/* Добавление loaded для HTML после полной загрузки страницы */
addLoadedClass()
