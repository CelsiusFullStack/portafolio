const menuHamburger = document.querySelector(".hamburger-icon");
const navbar = document.querySelector('.navbar');
menuHamburger.addEventListener('click', ()=> {
    navbar.toggleAttribute('hidden');
})
const skills = document.querySelector(".skills");
const experiences = document.querySelector(".experiences");
let html_skills = '';
let html_experience = '';
experiences.innerHTML = loadHtml(1);
skills.innerHTML = loadHtml(2);

function loadHtml(sectionHtml){
    let localSection = sectionHtml;
    let contentHtml='';
    const  varLorem= "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident rerum est sit ducimus fugiat vel excepturi eius, deleniti eligendi saepe iste repudiandae ullam illum consequuntur commodi, perspiciatis aliquid error reprehenderit.";
    
    const mySections = [
        {typeSection:1,title:'',description:'',company: 'Amazon', icon: "./assets/img/ant-design_amazon-outlined.svg", role: "UX Designer", duration: "2 años", period: "2015 - 2017"},
        {typeSection:1,title:'',description:'',company: 'Airbnb', icon: "./assets/img/cib_airbnb.svg", role: "Senior UX/UI", duration: "1 año", period: "2017 - 2018"},
        {typeSection:1,title:'',description:'',company: 'Google', icon: "./assets/img/akar-icons_google-fill.svg", role: "Product Designer", duration: "2 años", period: "2018 - actualidad"},
        {typeSection:2,title:'UX/UI Design',description:varLorem,company: '', icon: "./assets/img/light-bulb.svg", role: "", duration: "", period: ""},
        {typeSection:2,title:'Product Designer',description:varLorem,company: '', icon: "./assets/img/ruler.svg", role: "", duration: "", period: ""},
        {typeSection:2,title:'Interactive Design',description:varLorem,company: '', icon: "./assets/img/mobile-phone.svg", role: "", duration: "", period: ""}
    ];
    for (let index = 0; index < mySections.length; index++) {
        if ( localSection === 1 && mySections[index].typeSection === 1){
            contentHtml += `
                <div class="experience">
                    <div>
                        <img class="company-icon" src="${mySections[index].icon}" alt="${mySections[index].company}">
                    </div>
                    <div class="company">
                        <p class="black subsection bold">${mySections[index].company}</p>
                        <p>${mySections[index].role}</p>
                        <p class=" subsection bold">${mySections[index].period}</p>
                    </div>
                    <div>
                        <p class="black subsection bold">${mySections[index].duration}</p>
                    </div>
                </div>
                `;
       }
       if (localSection === 2 && mySections[index].typeSection === 2) {
            contentHtml += `
            <div class="skill justify">
                <div class="subtitle bold black">
                <img class="skill-icon" src="${mySections[index].icon}" alt="${mySections[index].title}">
                    <p class="subsection">${mySections[index].title}</p>
                </div>
                <p class="subtitle" >${mySections[index].description}</p>
            </div>   
            `;
       }  
    }
    return(contentHtml);
}

