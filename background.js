function openTab(){
    chrome.tabs.create({
        url: 'https://lamp.ms.wits.ac.za/~branden/CGV/_book/index.html',
        active: true
    })
}

chrome.action.onClicked.addListener(openTab)