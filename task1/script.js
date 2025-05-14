let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        alert('Product added to cart!');
    });
});
const heroImages = [
    {
        src: 'image1.jpg', // Replace with actual image paths
        title: "Men's Collection",
        description: 'From t-shirts, jeans, shoes, bags...'
    },
    {
        src: 'image2.jpg',
        title: 'Exclusive Offers',
        description: 'Don’t miss out on our latest deals!'
    },
    {
        src: 'image3.jpg',
        title: 'Quality Products',
        description: 'Shop with confidence and satisfaction!'
    }
];

let currentIndex = 0;
const heroImage = document.getElementById('hero-image');
const heroText = document.getElementById('hero-text');

function changeHeroContent() {
    // Fade out image and text
    heroImage.classList.add('fade-out');
    heroText.classList.add('fade-out');

    setTimeout(() => {
        // Update content after fade out
        currentIndex = (currentIndex + 1) % heroImages.length;

        heroImage.src = heroImages[currentIndex].src;
        heroText.querySelector('h1').textContent = heroImages[currentIndex].title;
        heroText.querySelector('p').textContent = heroImages[currentIndex].description;

        // Fade in image and text
        heroImage.classList.remove('fade-out');
        heroText.classList.remove('fade-out');
    }, 1000); // Match this with CSS transition duration
}

// Change content every 5 seconds with fade effect
setInterval(changeHeroContent, 5000);