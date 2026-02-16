const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownContent = document.getElementById("my-dropdown");

const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

const menuBtn = document.getElementById('menu-btn');
const menuScreen = document.getElementById('menu-screen');

const editorialLink = document.getElementById('editorial-link');
const editorialContent = document.getElementById('editorial-content');



const backToTop = document.getElementById('back-to-top');

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });
}

if (editorialLink && editorialContent) {
    editorialLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        editorialContent.classList.toggle('show');
        editorialLink.classList.toggle('active');
    });
}



if (menuBtn && menuScreen) {
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menuScreen.classList.toggle('open');
        menuBtn.classList.toggle('active');
    });
}

if (dropdownBtn && dropdownContent) {
    dropdownBtn.addEventListener("click", function(e) {
        e.preventDefault(); 
        dropdownContent.classList.toggle("show");
    });
    
    window.addEventListener("click", function(e) {
        if (!dropdownBtn.contains(e.target)) {
            dropdownContent.classList.remove("show");
        }
    });
}





if (tabs.length > 0) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                tabs.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                tab.classList.add('active');
                targetContent.classList.add('active');
            }
        });
    });
}

function toggleExpand(btn) {
    const parent = btn.closest('.expand-section');
    parent.classList.toggle('active');
}