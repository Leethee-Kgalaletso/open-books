
const url1 = 'https://lamp.ms.wits.ac.za/~branden/CGV/_book/index.html';
const url2 = `https://lamp.ms.wits.ac.za/~branden/AAA/_book/project-outline.html`;
const url3 = 'https://courses.ms.wits.ac.za/~steve/aaa/book/large/';

const btn1 = document.getElementById('openCGV');
const btn2 = document.getElementById('openAAA-project');
const btn3 = document.getElementById('openAAA-steve');

function openTab(link) {
    window.open(link, '_blank');
}

btn1.onclick = () => {
    openTab(url1);
}; // cgv

btn2.onclick = () => {
    openTab(url2);
}; // aaa project

btn3.onclick = () => {
    openTab(url3);
}; // steve's aaa