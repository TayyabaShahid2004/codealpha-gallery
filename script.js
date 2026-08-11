let images=document.querySelectorAll(".gallery img");
let lightbox=document.querySelector(".lightbox");
let lightboximg=document.querySelector(".lightbox img");
let closebtn=document.querySelector(".close");
let nextbtn=document.querySelector(".next");
let previousbtn=document.querySelector(".prev");
let currentindex=0;

images.forEach((image,index)=>{
    image.addEventListener("click",()=>{
        currentindex=index;
        lightboximg.src=image.src;
        lightbox.classList.add("show");
    });
});

nextbtn.addEventListener("click",()=>{
    currentindex++;
    if(currentindex>=images.length){
        currentindex=0;
    }
        lightboximg.src=images[currentindex].src;
    
});
closebtn.addEventListener("click",()=>{
    lightbox.classList.remove("show");
});
previousbtn.addEventListener("click",()=>{
    currentindex--;
    if(currentindex<0){
        currentindex=images.length-1;
    }
        lightboximg.src=images[currentindex].src;
    
});
//filters
let filters=document.querySelectorAll(".filter");
filters.forEach((filter)=>{
    filter.addEventListener("click",()=>{
        let category=filter.getAttribute("data-category");
        images.forEach((image)=>{
            let imagecategory=image.getAttribute("data-category");
            if(category==="all"|| imagecategory===category){
                image.style.display="block";
            }
            else{
                image.style.display="none";
            }
    
        })
    })
})