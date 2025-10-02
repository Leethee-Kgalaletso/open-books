
const url1 = 'https://lamp.ms.wits.ac.za/~branden/CGV/_book/index.html';
const url2 = `https://lamp.ms.wits.ac.za/~branden/AAA/_book/project-outline.html`;
const url3 = 'https://courses.ms.wits.ac.za/~steve/aaa/book/large/';

const btn1 = document.getElementById('openCGV');
const btn2 = document.getElementById('openAAA-project');
const btn3 = document.getElementById('openAAA-steve');

function openTab(link) {
    if(!link.startsWith('http://') && !link.startsWith('https://')) {
        link = 'https://' + link;
    }
    window.open(link, '_blank');
}

btn1.addEventListener("click", () => {
    openTab(url1);
});

btn2.addEventListener("click", () => {
    openTab(url2);
});

btn3.addEventListener("click", () => {
    openTab(url3);
});

/* testing */

const saveBtn = document.getElementById('save');
const nameInput = document.getElementById('btn-name');
const urlInput = document.getElementById('url');
const container = document.getElementById('container');

// load saved buttons
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const newBtn = document.createElement('button');
    newBtn.innerText = key; 
    document.body.appendChild(newBtn);

    newBtn.onclick = () => {
        openTab(value);
    }

    // delete buttons
    newBtn.oncontextmenu = (e) => {
        e.preventDefault();
        const confirmDelete = confirm(`Delete the button "${key}"?`);
        if (confirmDelete) {
            localStorage.removeItem(key);
            document.body.removeChild(newBtn);
        }
    }

} // for loop

// save new button 

if(saveBtn){
    saveBtn.onclick = () => {
        const name = nameInput.value;
        const url = urlInput.value;

        if (name && url) {
            localStorage.setItem(name, url);

            const newBtn = document.createElement('button');
            newBtn.innerText = name;

            document.body.appendChild(newBtn);

            newBtn.onclick = () => {
                openTab(url);
            } // new added button with a link

            nameInput.value = '';
            urlInput.value = '';

            // clear inputs
        }
    }
} else {
    console.log("uhm... np save btn");
}


