import { device_width, gsap_ease } from "@utils/constants.js"

document.addEventListener("DOMContentLoaded", () => {
	$(".program-block").matchHeight({
		byRow: true,
	})
	$(".advantages__item").matchHeight({
		byRow: true,
	})

	$(".reviews__item").matchHeight({
		byRow: true,
	})

	$(".community-height").matchHeight({
		byRow: true,
	})

	$(".header__burger").on("click", function (e) {
		e.preventDefault()

		console.log("true")

		$(this).toggleClass("active")

		$(".header-dropdown").toggleClass("active")
	})

	if (window.innerWidth < 1350) {
		$(".programs__list .swiper-slide").wrapAll(
			'<div class="swiper-wrapper"></div>',
		)
		new Swiper(".programs-swiper", {
			slidesPerView: 3.2,
			spaceBetween: 8,
			slidesPerGroup: 1,
			navigation: {
				nextEl: ".programs__control--next",
				prevEl: ".programs__control--prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1.05,
				},
				640: {
					slidesPerView: 1.05,
				},
				768: {
					slidesPerView: 2.05,
				},
				1024: {
					slidesPerView: 3.2,
				},
			},
		})
	}

	if (window.innerWidth < 1024) {
		$(".advantages__list .swiper-slide").wrapAll(
			'<div class="swiper-wrapper"></div>',
		)
		new Swiper(".advantages__list-swiper", {
			slidesPerView: 3.1,
			spaceBetween: 8,
			slidesPerGroup: 1,
			navigation: {
				nextEl: ".advantages__control--next",
				prevEl: ".advantages__control--prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
				},
				640: {
					slidesPerView: 1.2,
				},
				768: {
					slidesPerView: 2.2,
				},
				1024: {
					slidesPerView: 3.1,
				},
			},
		})
	}

	new Swiper(".community-swiper", {
		slidesPerView: 2,
		spaceBetween: 20,
		slidesPerGroup: 1,
		navigation: {
			nextEl: ".gallery__control--next",
			prevEl: ".gallery__control--prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
			468: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 2,
			},
		},
	})

	new Swiper(".reviews-swiper", {
		slidesPerView: 2,
		spaceBetween: 20,
		slidesPerGroup: 1,
		navigation: {
			nextEl: ".reviews__control--next",
			prevEl: ".reviews__control--prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1.2,
				spaceBetween: 12,
			},
			650: {
				slidesPerView: 2,
				spaceBetween: 12,
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 12,
			},
		},
	})
})
