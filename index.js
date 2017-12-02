const inputUrl = document.getElementById('url')
const button = document.querySelector('button')
const qrcodeContainer = document.getElementById('qrcode-container')

function generateQRCode (qrcodeContainer, url) {
    qrcodeContainer.innerHTML = ""
    const qrcode = new QRCode(qrcodeContainer, {
        text: url,
        width: 128,
        height: 128
    })
}

button.addEventListener('click', e => {
    generateQRCode(qrcodeContainer, inputUrl.value)
})
