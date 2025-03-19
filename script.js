const wrapper = document.querySelector(".wrapper");
const startbtn = document.querySelector(".startbtn");
const backbtn = document.querySelector(".back-btn");
const clas1Tog = document.querySelector(".class1");
const clas2Tog = document.querySelector(".class2");
const clas3Tog = document.querySelector(".class3");
const clas4Tog = document.querySelector(".class4");
const classbackBtn = document.querySelector(".classback-btn");
const classbackBtnTwo = document.querySelector(".classback-btn_two");
const classbackBtnThree = document.querySelector(".classback-btn_three");
const classbackBtnfour = document.querySelector(".classback-btn_four");



const faqs = document.querySelectorAll(".faq");


const toggleScreen = () =>{
    wrapper.classList.toggle("show-category")
};
const toggleScreenPage1 = () =>{
    wrapper.classList.toggle("show-page1")
};
const toggleScreenPage2 = () =>{
    wrapper.classList.toggle("show-page2")
};

const toggleScreenPage3 = () =>{
    wrapper.classList.toggle("show-page3")
};

const toggleScreenPage4 = () =>{
    wrapper.classList.toggle("show-page4")
};
const toggleScreenEnquery = () =>{
    wrapper.classList.toggle("inqueries-btn")
};


startbtn.addEventListener("click", toggleScreen);
backbtn.addEventListener("click", toggleScreen);


clas1Tog.addEventListener("click", toggleScreenPage1);
classbackBtn.addEventListener("click",toggleScreenPage1);


clas2Tog.addEventListener("click", toggleScreenPage2);
classbackBtnTwo.addEventListener("click", toggleScreenPage2);


clas3Tog.addEventListener("click", toggleScreenPage3);
classbackBtnThree.addEventListener("click", toggleScreenPage3);

//clas4Tog.addEventListener("click", toggleScreenPage4);
//classbackBtnfour.addEventListener("click", toggleScreenPage4);





faqs.forEach((faq) =>{
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    });
}) ;