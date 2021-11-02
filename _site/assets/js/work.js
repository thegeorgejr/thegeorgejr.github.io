window.addEventListener('DOMContentLoaded', () => {
    let nextBtn = document.querySelector("#next-btn")
    let secondSlider = document.querySelector(".category-wrapper.second")
    let sliderText = document.querySelector("#slider-text")

    let updateWorkSlider = () => { 
        secondSlider.classList.toggle("active")

        if(secondSlider.classList.contains('active')){
            console.log('active');

            sliderText.innerHTML = "Hobbiest"
        }

        else{
            sliderText.innerHTML = ""
        }
    }

    nextBtn.addEventListener("click", ()=>{
        updateWorkSlider()
    })
})