const wrapper = document.querySelector(".wrapper");
const startbtn = document.querySelector(".startbtn");
const backbtn = document.querySelector(".back-btn");
const clas1Tog = document.querySelector(".class1");
const clas2Tog = document.querySelector(".class2");
const clas3Tog = document.querySelector(".class3");
const classbackBtn = document.querySelector(".classback-btn");
const classbackBtnTwo = document.querySelector(".classback-btn_two");
const classbackBtnThree = document.querySelector(".classback-btn_three");

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



startbtn.addEventListener("click", toggleScreen);
backbtn.addEventListener("click", toggleScreen);


clas1Tog.addEventListener("click", toggleScreenPage1);
classbackBtn.addEventListener("click",toggleScreenPage1);


clas2Tog.addEventListener("click", toggleScreenPage2);
classbackBtnTwo.addEventListener("click", toggleScreenPage2);


clas3Tog.addEventListener("click", toggleScreenPage3);
classbackBtnThree.addEventListener("click", toggleScreenPage3);
