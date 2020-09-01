document.addEventListener('mousemove', e => {
    gsap.to('img', {
        x: e.x, 
        y: e.y, 
        xPercent: -50, 
        yPercent: -50,
        stagger: .05
    })
})



const helperTween = gsap.to('.helper-text', {opacity: 1, yoyo: true, repeat: -1, repeatDelay: 2, duration: .75}) 


gsap.utils.toArray('.categories p')
.forEach(category => {
    let {label} = category.dataset
    
    category.addEventListener('mouseenter', () => {
        gsap.to(`img[data-image=${label}]`, {opacity: 1, scale: 1})
        gsap.set(`img[data-image=${label}]`, {zIndex: 1})
        gsap.set(`p[data-label=${label}]`, {zIndex: 2})
        // helperTween.seek(1)
    })
    
    category.addEventListener('mouseleave', () => {
        gsap.to(`img[data-image=${label}]`, {opacity: 0, zIndex: -1, scale: .80})
        gsap.set(`p[data-label=${label}]`, {zIndex: 0})
    })
})
