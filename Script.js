    <script>
        // JavaScript for the modal
        document.addEventListener('DOMContentLoaded', () => {
            const modal = document.getElementById('modal');
            const openModalBtn = document.getElementById('openModalBtn');
            const closeModalBtn = document.getElementById('closeModalBtn');
            const newsletterForm = document.getElementById('newsletterForm');

            openModalBtn.addEventListener('click', () => {
                modal.style.display = 'flex';
            });

            closeModalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            });

            newsletterForm.addEventListener('submit', (event) => {
                event.preventDefault();
                alert('Thank you for subscribing!');
                modal.style.display = 'none';
            });
        });

        // JavaScript for slideshow
        var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  // Hide all slides
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}  // Reset index if it exceeds the number of slides
            slides[slideIndex - 1].style.display = "block";  // Display the current slide
            setTimeout(showSlides, 8000);  // Change slide every 8 seconds
        }

        function plusSlides(n) {
            slideIndex += n;
            if (slideIndex > document.getElementsByClassName("mySlides").length) {slideIndex = 1}
            if (slideIndex < 1) {slideIndex = document.getElementsByClassName("mySlides").length}
            showSlides();
        }

        
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const newsletterForm = document.getElementById('newsletterForm');
 
    setTimeout(() => {
        modal.style.display = 'flex';
    }, 6000
);
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for subscribing!');
        modal.style.display = 'none';
    });
});

    </script>
