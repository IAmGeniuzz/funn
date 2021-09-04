let productModal = document.getElementById('productModal')
let product1 = document.getElementById('product1')
let product2 = document.getElementById('product2')
let product3 = document.getElementById('product3')
let product4 = document.getElementById('product4')
let product5 = document.getElementById('product5')
let product6 = document.getElementById('product6')
let product7 = document.getElementById('product7')
let product8 = document.getElementById('product8')
let product9 = document.getElementById('product9')
let product10 = document.getElementById('product10')
let product11 = document.getElementById('product11')
let product12 = document.getElementById('product12')
let product13 = document.getElementById('product13')
let product14 = document.getElementById('product14')
let product15 = document.getElementById('product15')

let modalProductCrosshair = document.getElementById('modalProductCrosshair')

let productModalImg = document.getElementById('productModalImg')
let modalProductTitle = document.getElementById("modalProductTitle")
let modalProductInfo = document.getElementById("modalProductInfo")
let productModalPrice = document.getElementById("productModalPrice")

function closeModals() { 
    profileModal.style.display = 'none'
    cartModal.style.display = 'none'
    aboutUsModal.style.display = 'none'
}

modalProductCrosshair.onclick = function() {
    productModal.style.display = "none"
}

productImg1.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_1_info.title
    productModalDescription.innerHTML = product_1_info.description
    productModalPrice.innerHTML = product_1_info.price
    productModalImg.src = product_1_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_1"
    document.productModal.appendChild(modalCartAdd_1)
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_1_info.image_1) { 
        productModalImg.src = product_1_info.image_2
    } else if (productModalImg.src == product_1_info.image_1) {
        productModalImg.src = product_1_info.image_3
    } else { 
        productModalImg.src = product_1_info.image_1
    }
}

productImg2.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_2_info.title
    productModalDescription.innerHTML = product_2_info.description
    productModalPrice.innerHTML = product_2_info.price
    productModalImg.src = product_2_info.image_2
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_2"
    document.productModal.appendChild(modalCartAdd_2)
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_2_info.image_2) { 
        productModalImg.src = product_2_info.image_2
    } else if (productModalImg.src == product_2_info.image_2) {
        productModalImg.src = product_2_info.image_3
    } else { 
        productModalImg.src = product_2_info.image_1
    }
}

productImg3.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_3_info.title
    productModalDescription.innerHTML = product_3_info.description
    productModalPrice.innerHTML = product_3_info.price
    productModalImg.src = product_3_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_3"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_3_info.image_1) { 
        productModalImg.src = product_3_info.image_2
    } else if (productModalImg.src == product_3_info.image_1) {
        productModalImg.src = product_3_info.image_3
    } else { 
        productModalImg.src = product_3_info.image_1
    }
}

productImg4.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_4_info.title
    productModalDescription.innerHTML = product_4_info.description
    productModalPrice.innerHTML = product_4_info.price
    productModalImg.src = product_4_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_4"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_4_info.image_1) { 
        productModalImg.src = product_4_info.image_2
    } else if (productModalImg.src == product_4_info.image_1) {
        productModalImg.src = product_4_info.image_3
    } else { 
        productModalImg.src = product_4_info.image_1
    }
}

productImg5.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_5_info.title
    productModalDescription.innerHTML = product_5_info.description
    productModalPrice.innerHTML = product_5_info.price
    productModalImg.src = product_5_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_5"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_5_info.image_1) { 
        productModalImg.src = product_5_info.image_2
    } else if (productModalImg.src == product_5_info.image_1) {
        productModalImg.src = product_5_info.image_3
    } else { 
        productModalImg.src = product_5_info.image_1
    }
}

productImg6.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_6_info.title
    productModalDescription.innerHTML = product_6_info.description
    productModalPrice.innerHTML = product_6_info.price
    productModalImg.src = product_6_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_6"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_6_info.image_1) { 
        productModalImg.src = product_6_info.image_2
    } else if (productModalImg.src == product_6_info.image_1) {
        productModalImg.src = product_6_info.image_3
    } else { 
        productModalImg.src = product_6_info.image_1
    }
}

productImg7.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_7_info.title
    productModalDescription.innerHTML = product_7_info.description
    productModalPrice.innerHTML = product_7_info.price
    productModalImg.src = product_7_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_7"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_7_info.image_1) { 
        productModalImg.src = product_7_info.image_2
    } else if (productModalImg.src == product_7_info.image_1) {
        productModalImg.src = product_7_info.image_3
    } else { 
        productModalImg.src = product_7_info.image_1
    }
}

productImg8.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_8_info.title
    productModalDescription.innerHTML = product_8_info.description
    productModalPrice.innerHTML = product_8_info.price
    productModalImg.src = product_8_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_8"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_8_info.image_1) { 
        productModalImg.src = product_8_info.image_2
    } else if (productModalImg.src == product_8_info.image_1) {
        productModalImg.src = product_8_info.image_3
    } else { 
        productModalImg.src = product_8_info.image_1
    }
}

productImg9.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_9_info.title
    productModalDescription.innerHTML = product_9_info.description
    productModalPrice.innerHTML = product_9_info.price
    productModalImg.src = product_9_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_9"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_9_info.image_1) { 
        productModalImg.src = product_9_info.image_2
    } else if (productModalImg.src == product_9_info.image_1) {
        productModalImg.src = product_9_info.image_3
    } else { 
        productModalImg.src = product_9_info.image_1
    }
}

productImg10.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_10_info.title
    productModalDescription.innerHTML = product_10_info.description
    productModalPrice.innerHTML = product_10_info.price
    productModalImg.src = product_10_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_10"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_10_info.image_1) { 
        productModalImg.src = product_10_info.image_2
    } else if (productModalImg.src == product_10_info.image_1) {
        productModalImg.src = product_10_info.image_3
    } else { 
        productModalImg.src = product_10_info.image_1
    }
}

productImg11.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_11_info.title
    productModalDescription.innerHTML = product_11_info.description
    productModalPrice.innerHTML = product_11_info.price
    productModalImg.src = product_11_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_11"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_11_info.image_1) { 
        productModalImg.src = product_11_info.image_2
    } else if (productModalImg.src == product_11_info.image_1) {
        productModalImg.src = product_11_info.image_3
    } else { 
        productModalImg.src = product_11_info.image_1
    }
}

productImg12.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_12_info.title
    productModalDescription.innerHTML = product_12_info.description
    productModalPrice.innerHTML = product_12_info.price
    productModalImg.src = product_12_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_12"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_12_info.image_1) { 
        productModalImg.src = product_12_info.image_2
    } else if (productModalImg.src == product_12_info.image_1) {
        productModalImg.src = product_12_info.image_3
    } else { 
        productModalImg.src = product_12_info.image_1
    }
}

productImg13.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_13_info.title
    productModalDescription.innerHTML = product_13_info.description
    productModalPrice.innerHTML = product_13_info.price
    productModalImg.src = product_13_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_13"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_13_info.image_1) { 
        productModalImg.src = product_13_info.image_2
    } else if (productModalImg.src == product_13_info.image_1) {
        productModalImg.src = product_13_info.image_3
    } else { 
        productModalImg.src = product_13_info.image_1
    }
}

productImg14.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_14_info.title
    productModalDescription.innerHTML = product_14_info.description
    productModalPrice.innerHTML = product_14_info.price
    productModalImg.src = product_14_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_14"
    closeModals()
}

productModalImg.onclick = function() { 
    if (productModalImg.src == product_14_info.image_1) { 
        productModalImg.src = product_14_info.image_2
    } else if (productModalImg.src == product_14_info.image_1) {
        productModalImg.src = product_14_info.image_3
    } else { 
        productModalImg.src = product_14_info.image_1
    }
}

productImg15.onclick = function() { 
    productModal.style.display = 'block'
    modalProductTitle.innerHTML = product_15_info.title
    productModalDescription.innerHTML = product_15_info.description
    productModalPrice.innerHTML = product_15_info.price
    productModalImg.src = product_15_info.image_1
    productModal.style.top = `0`
    modalCartAdd.id = "modalCartAdd_15"
    closeModals()
}

