
    const modal1 = document.getElementById('modal1');
    const modal2 = document.getElementById('modal2');
    // const openModal1Btn = document.getElementById('openModal1Btn');
    const openModal2Btn = document.getElementById('burger-icon');
    const closeModal1Btn = document.getElementById('closeModal1Btn');
    const closeModal2Btn = document.getElementById('closeModal2Btn');
    const navLinks = document.querySelectorAll('.nav-link, .benefits-link');
    const body = document.querySelector('body')

    const openModal1 = () => {
        modal1.style.display = 'flex';
        setTimeout(() => modal1.style.opacity = '1', 10); 
    };

    const closeModal1 = () => {
        modal1.style.opacity = '0';
        setTimeout(() => modal1.style.display = 'none', 250);  
    };

    const openModal2 = () => {
        modal2.style.display = 'flex';
        body.style.overflow = 'hidden';
        setTimeout(() => modal2.style.opacity = '1', 10); 
    };

    const closeModal2 = () => {
        modal2.style.opacity = '0';
        body.style.overflow = 'scroll';
        setTimeout(() => modal2.style.display = 'none', 250);  
    };

    // openModal1Btn.addEventListener('submit', openModal1);
    closeModal1Btn.addEventListener('click', closeModal1);
    openModal2Btn.addEventListener('click', openModal2);
    closeModal2Btn.addEventListener('click', closeModal2);

    window.addEventListener('click', (event) => {
        if (event.target === modal1) {
            closeModal1();
        }
        if (event.target === modal2) {
            closeModal2();
        }
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal1();
            closeModal2();
        }
    });
// -=========================================================0000000000
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });

            if (modal1.style.display === 'flex') {
                closeModal1();
            }

            if (modal2.style.display === 'flex') {
                closeModal2();
            }
        });
    });

export default openModal1;
