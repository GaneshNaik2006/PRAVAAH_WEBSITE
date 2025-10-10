function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
}


const scene = document.querySelector('.scene');
        function createStars(count) {
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.classList.add('star_animation');

            // random position
            star.style.top = Math.random() * window.innerHeight + 'px';
            star.style.left = Math.random() * window.innerWidth + 'px';

            // random animation delay & duration
            star.style.animationDuration = (1 + Math.random() * 2) + 's';
            star.style.animationDelay = Math.random() * 2 + 's';

            scene.appendChild(star);
        }
        }
        createStars(700); 

        const items = document.querySelectorAll('.item');
            let angle = 0;

            function rotateCarousel() {
            items.forEach((item, i) => {
                let itemAngle = (i * 360 / items.length + angle) % 360;
                
                if (itemAngle > 60 && itemAngle < 300) {
                // Back side visible
                item.style.opacity = 1;
                item.style.transform = `rotateY(${itemAngle}deg) translateZ(120vw) translateX(0px)`;
                } else {
                // Front side disappearing
                item.style.opacity = 0;
                let sideX = itemAngle < 90 ? 300 : -300; // move to right/left
                item.style.transform = `rotateY(${itemAngle}deg) translateZ(120vw) translateX(${sideX}px)`;
                }
            });
            
            angle += 1; // rotation speed
            requestAnimationFrame(rotateCarousel);
            }

            rotateCarousel();

                    
