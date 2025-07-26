
console.log("Ext. is up and running")

const btn = document.createElement('button');
btn.textContent = "Open CGV";
btn.style.position = 'fixed';
btn.style.zIndex = 10000;
btn.style.bottom = '20px';
btn.style.right = '20px';
btn.style.borderRadius = '5px';
btn.onclick = () => {
    window.open('https://lamp.ms.wits.ac.za/~branden/CGV/_book/index.html', '_blank')
}

/* *******************************************
    Uncomment below line to stick a button on 
        every tab to access the cgv book 
****************************************** */

// document.body.appendChild(btn)