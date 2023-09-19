const makeDark = () => {
    const frame = document.getElementsByTagName('iframe')[0]

    const innerDoc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document

    const divs = innerDoc.getElementsByTagName('div')

    for (div of divs) {
        if (div.id === 'chatIndividualMessageContentDiv') {
            div.style.padding = '0'
            continue
        }
        if (/share*/.test(div.className) || /pdf*/.test(div.className) || /whiteboard*/.test(div.className) || /wb*/.test(div.className)) {
            continue
        }
        div.style.backgroundColor = '#edcbd4'
        div.style.borderColor = '#DFBEC7'
        div.style.scrollbarColor = '#d48198'
        div.style.color = 'white'
    }
}

console.log("test")

chrome.runtime.onMessage.addListener((message) => {
    makeDark()
})
