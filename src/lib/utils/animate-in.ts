export function animateIn(node: HTMLElement, { margin = '0px', duration = 500, delay = 500, transform = 'translateY(30px)', repeat = true } = {}) {
	const options = {
		root: null,
		rootMargin: '0px 0px ' + margin + ' 0px',
		threshold: 0
	};

	// Extract existing opacity, duration, and delay classes
	const existingClasses = node.className.split(' ');
	const opacityClass = existingClasses.find(c => c.match(/^opacity-\d+$/));
	const durationClass = existingClasses.find(c => c.match(/^duration-\d+$/));
	const delayClass = existingClasses.find(c => c.match(/^delay-\d+$/));
	const targetOpacity = opacityClass ? Number(opacityClass.split('-')[1]) / 100 : 1;

	const originalClasses = node.className;

	const resetStyles = () => {
		node.style.transition = 'none';
		node.style.opacity = '0';
		node.style.transform = transform;
	};

	const animateStyles = () => {
		setTimeout(() => {
			node.style.transition = 'all';
			node.style.transitionDuration = duration + 'ms';
			node.style.transitionDelay = '0ms';
			node.className = originalClasses;
			setTimeout(() => {
				node.style.opacity = String(targetOpacity);
				node.style.transform = 'translateY(0px)';
				// Restore duration and delay classes after intro animation
				if (durationClass || delayClass) {
					setTimeout(() => {
						node.style.transitionDuration = '';
						node.style.transitionDelay = '';
					}, duration);
				}
			}, delay);
		}, 1);
	};

	resetStyles();

	const observer = new IntersectionObserver((entries) => {
		const entry = entries[0];
		if (repeat) {
			resetStyles();
		}
		if (entry.isIntersecting) {
			animateStyles();
			if (!repeat) {
				observer.unobserve(node);
			}
		}
	}, options);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}