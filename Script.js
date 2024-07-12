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
