let userInput = document.querySelector('.container .userInput');
let generateBtn = document.querySelector('.container .generate-btn');
let barcode = document.querySelector('.container .barcode-box #barcode');
let container = document.querySelector('.container');

let generateBarcode = () => {
        container.classList.add('active');
        setTimeout(() => {
            JsBarcode("#barcode", userInput.value, {
                background: "white",
                lineColor: "black",
            });
    
            // Show the download button after generating the barcode
            document.getElementById('downloadBtn').style.display = 'inline-block';
        }, 200);
    }

generateBtn.addEventListener('click', () => {
        if (userInput.value != '') {
                generateBarcode();
        }
})
    
let downloadBarcode = () => {
        let svgString = new XMLSerializer().serializeToString(barcode);
        let blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        let url = URL.createObjectURL(blob);
        let link = document.createElement('a');
        link.href = url;
        link.download = 'barcode.svg';
        link.click();
    
        URL.revokeObjectURL(url);
    }
    
    