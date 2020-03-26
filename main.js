function debounce(func, wait = 20, immediate = true) {
	let timeout;
	return function () {
		let context = this, args = arguments;
		const later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		let callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

const btnScrollTop = document.querySelector('#scroll-to-top');
const showcase = document.querySelector('.showcase');

const scrollAction = () => {
	//check if the showcase section has been scrolled by atleast 20 percent.
	const showcaseScroll = showcase.offsetTop - (showcase.offsetHeight * 0.2);
	const y = window.scrollY;

	if(y > showcaseScroll) {
		btnScrollTop.classList.add('active');
	} else {
		btnScrollTop.classList.remove('active');
	}
}

const scrollToTop = () => {
	const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	if (scrollPosition > 0) {
		window.scroll({
			top: 0,
			left: 0,
			behaviour: 'smooth'
		});
	}
}

window.addEventListener('scroll', debounce(scrollAction));
btnScrollTop.addEventListener('click', scrollToTop);