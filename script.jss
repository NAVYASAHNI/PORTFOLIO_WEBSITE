function toggleMenu()
{
    const menu =document.querySelector(".menu-links");
    const menu =document.querySelector(".navy-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

document.getElementById('aboutLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth' // Enable smooth scrolling
    });
});


