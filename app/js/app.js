import { device_width, gsap_ease } from "@utils/constants.js"

document.addEventListener("DOMContentLoaded", () => {
	$(".program-block").matchHeight({
		byRow: true,
	})
	$(".advantages__item").matchHeight({
		byRow: true,
	})

	if (window.innerWidth < 1024) {
		new Swiper(".advantages__list-swiper", {
			slidesPerView: 3,
			spaceBetween: 8,
			slidesPerGroup: 3,
			breakpoints: {
				320: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
				640: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3,
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
	})

	new Swiper(".reviews-swiper", {
		slidesPerView: 2,
		spaceBetween: 20,
		slidesPerGroup: 1,
		navigation: {
			nextEl: ".gallery__control--next",
			prevEl: ".gallery__control--prev",
		},
	})
})
