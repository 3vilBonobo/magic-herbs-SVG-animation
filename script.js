import { gsap } from "/gsap";
let sage = document.getElementById("sage");
let mandrake = document.getElementById("mandrake");
let belladonna = document.getElementById("belladonna");
let henbane = document.getElementById("henbane");
const tl = gsap.timeline();

let onSageClick = () => {
	tl
		.to(sage, {
			keyframes: [
				{ rotation: 35, x: -170, duration: 1 },
				{ y: 300, duration: 1, delay: 0.5 },
				{ opacity: 0, duration: 0.5, delay: -0.7 },
				{ rotation: 0, y: 0, x: 0, duration: 1, delay: 3 },
				{ opacity: 1, duration: 0.5, delay: 1 }
			],
			ease: "power4.inOut"
		})
		.to(".liquid", { fill: "#002266", delay: -3.5 })
		.to(".wave", { stroke: "#006166", delay: -3.5 });
};

let onMandrakeClick = () => {
	tl
		.to(mandrake, {
			keyframes: [
				{ rotation: -10, x: 270, duration: 1 },
				{ y: 300, duration: 0.8, delay: 0.5 },
				{ opacity: 0, duration: 0.5, delay: -0.5 },
				{ rotation: 0, y: 0, x: 0, duration: 1, delay: 3 },
				{ opacity: 1, duration: 0.5, delay: 1 }
			],
			ease: "power4.inOut"
		})
		.to(".liquid", { fill: "#cca300", delay: -3.5 })
		.to(".wave", { stroke: "#fff530", delay: -3.5 });
};

let onBelladonnaClick = () => {
	tl
		.to(belladonna, {
			keyframes: [
				{ rotation: 15, y: -270, x: 350, duration: 1 },
				{ y: 300, duration: 1.5, delay: 0.5 },
				{ opacity: 0, duration: 0.5, delay: -1.5 },
				{ rotation: 0, y: 0, x: 0, duration: 1, delay: 3 },
				{ opacity: 1, duration: 0.5, delay: 1 }
			],
			ease: "power4.inOut"
		})
		.to(".liquid", { fill: "#b30000", delay: -3.5 })
		.to(".wave", { stroke: "#ff4242", delay: -3.5 });
};

let onHenbaneClick = () => {
	tl
		.to(henbane, {
			keyframes: [
				{ y: -260, x: -320, duration: 1 },
				{ y: 300, duration: 1, delay: 0.5 },
				{ opacity: 0, duration: 0.5, delay: -1 },
				{ rotation: 0, y: 0, x: 0, duration: 1, delay: 3 },
				{ opacity: 1, duration: 0.5, delay: 1 }
			],
			ease: "power4.inOut"
		})
		.to(".liquid", { fill: "#800080", delay: -3.5 })
		.to(".wave", { stroke: "#f74ff7", delay: -3.5 });
};

sage.addEventListener("click", onSageClick);
mandrake.addEventListener("click", onMandrakeClick);
belladonna.addEventListener("click", onBelladonnaClick);
henbane.addEventListener("click", onHenbaneClick);
