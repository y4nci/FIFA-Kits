// RUN AT FIFA KIT CREATOR PAGE

let markdownString = '';

Array.from(document.getElementsByClassName('selector-item-image'))
    .map(img => {
        markdownString += `![shirt](${img.src})\n`;
    });

console.log(markdownString);
