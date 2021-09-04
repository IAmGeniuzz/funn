let body = document.getElementById('body')
let html = document.getElementById('html')
let aboutUS = document.getElementById('aboutUs')
let aboutUsCrosshair = document.getElementById('aboutUsCrosshair')
let modalWindow = document.getElementsByClassName('modalWindow')
let profileModal = document.getElementById('profileModal')
let profileBtn = document.getElementById('profileBtn')
let profileCrosshair = document.getElementById('profileCrosshair')
let cartModal = document.getElementById('cartModal')
let cartCrosshair = document.getElementById('cartCrosshair')
let cartBtn = document.getElementById('cartBtn')

aboutUS.onclick = function() { 
    aboutUsModal.style.display = 'block'
    profileModal.style.display = 'none'
    cartModal.style.display = 'none'
    
}

aboutUsCrosshair.onclick = function() { 
    aboutUsModal.style.display = 'none'
}

profileBtn.onclick = function() {
    profileModal.style.display = 'block'
    aboutUsModal.style.display = 'none'
    cartModal.style.display = 'none'
}

profileCrosshair.onclick = function() { 
    profileModal.style.display = 'none'
}

cartBtn.onclick = function() { 
    cartModal.style.display = 'block'
    profileModal.style.display = 'none'
    aboutUsModal.style.display = 'none'
}

cartCrosshair.onclick = function() { 
    cartModal.style.display = 'none'
}
