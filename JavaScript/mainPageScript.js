const myProfilePage = document.querySelector('.my-profile');
const myProjectsPage = document.querySelector('.my-projects');
const myContactsPage = document.querySelector('.my-contacts');
const scrollDownBtn = document.getElementById('scrollDownBtn');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');


//show resume
    function showProfile() {
        myProfilePage.classList.remove('hidden');
        myProjectsPage.classList.add('hidden');
        myContactsPage.classList.add('hidden');

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

//show my projects
    function showProjects() {
        myProfilePage.classList.add('hidden');
        myProjectsPage.classList.remove('hidden');
        myContactsPage.classList.add('hidden');

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

//show my contact info
    function showContacts() {
        myProfilePage.classList.add('hidden');
        myProjectsPage.classList.add('hidden');
        myContactsPage.classList.remove('hidden');

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
    
        // Show/hide the button based on the scroll position
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollToTopBtn.style.display = 'block';
            } else {
                scrollToTopBtn.style.display = 'none';
            }
        });
        

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!functions that are processing when site is being LOADED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    function scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    //----------------------Scroll to the top after a short delay--------------------------
    setTimeout(scrollToTop, 5);


    //-------------------------------scroll up button------------------------------------
    scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    //-------------------------------scroll down button------------------------------------
    setTimeout(function() {
    
        // Function to handle scroll events
        function showButton() {
            if (window.scrollY === 0) {
                // If at the top of the page, show the button
                scrollDownBtn.style.opacity = '1';
            } else {
                // If not at the top, hide the button
                scrollDownBtn.style.opacity = '0';
            }
        }
    
        // Show the button after a delay (adjust the delay time as needed)
        setTimeout(function() {
            scrollDownBtn.style.display = 'block';
            scrollDownBtn.style.opacity = '1';
            showButton(); // Initial check when the page loads
        }, 5000);
    
        // Scroll event listener
        window.addEventListener('scroll', showButton);
    }, 700); // Set the timeout for the entire script (adjust the delay time as needed)

    
    // Function to scroll down by 100vh with smooth scrolling (for scroll down button)
    scrollDownBtn.addEventListener('click', function scrollDown() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });