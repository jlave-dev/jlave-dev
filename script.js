document.addEventListener('DOMContentLoaded', () => {
	const starCount = 200; // Number of stars
	const starContainer = document.getElementById('star-container');

	// Function to create stars
	function createStars() {
		for (let i = 0; i < starCount; i++) {
			const star = document.createElement('div');
			star.className = 'star';
			star.style.width = `${Math.random() * 2 + 1}px`;
			star.style.height = star.style.width;
			star.style.top = `${Math.random() * 100}%`;
			star.style.left = `${Math.random() * 100}%`;
			star.style.animation = `twinkle ${
				Math.random() * 5 + 5
			}s infinite alternate`;
			starContainer.appendChild(star);
		}
	}

	// Create initial stars
	createStars();
});
