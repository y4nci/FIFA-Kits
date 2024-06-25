// RUN AT FIFA KIT CREATOR PAGE

let markdownString = '';

Array.from(document.getElementsByClassName('selector-item-image'))
    .map(img => {
        markdownString += `<img alt="shirt" src="${img.src}" style="width: 180px; height: 180px" /> `;
    });

console.log(markdownString);
