let themeSwitcher = document.getElementById('themeSwitcher')

themeSwitcher.onclick = function() { 
    let productModalStyles = document.getElementById("productModalStyles")
    let styles = document.getElementById("styles")
    let modalStyles = document.getElementById("modalStyles")

    if (styles.getAttribute("href") == "styles.css") {
        styles.href = "styles_dark.css"
        modalStyles.href = "modalStyles_dark.css"
        productModalStyles.href = "productModalStyles_dark.css"
    } else {
        styles.href = "styles.css"
        modalStyles.href = "modalStyles.css"
        productModalStyles.href = "productModalStyles.css"
    }
}