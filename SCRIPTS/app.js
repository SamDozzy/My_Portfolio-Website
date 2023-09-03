

const navLinks = document.querySelectorAll('.links')
navLinks.forEach((navLink)=>{
  navLink.addEventListener('click', (e)=>{
    event.preventDefault();
   const links = e.target.innerHTML; 
   //navLink.classList.add('active')
  })
})

const aboutInfo = [
  {
    birthday: "Sorry not Available Yet",
    phone: "+2349061329923",
    email: "chidoziesamuel84@gmail.com",
    from: "Anambra State, Nigeria",
    language: "English, Igbo",
    freelance: "Available"
  }
]

const info = document.querySelector('.info_container')

aboutInfo.forEach((detail)=>{
 info.innerHTML = `
    <div class="info">
              <div class="info_text birthday">
                <p>Birthday</p>
                <span>${detail.birthday}</span>
              </div>
              <div class="info_text Phone">
                <p>Phone</p>
                <span>${detail.phone}</span>
              </div>
              <div class="info_text email">
                <p>Email</p>
                <span>${detail.email}</span>
              </div> 
              <div class="info_text from">
                <p>From</p>
                <span>${detail.from}</span>
              </div> 
              <div class="info_text language">
                <p>Language</p>
                <span>${detail.language}</span>
              </div> 
              <div class="info_text freelance">
                <p>Freelance</p>
                <span>${detail.freelance}</span>
              </div>
             </div>

  `;
})

const CvBtn = document.querySelector('.cv_container');

CvBtn.addEventListener('click', (e)=>{
  event.preventDefault();
  const message = document.querySelector('.cv_message')
   if(message.classList.contains('message_active')){
      message.classList.remove('message_active')
   }
   else{
    message.classList.add('message_active') 
    
    const messageClose = document.querySelector('.cv_message span');

    messageClose.addEventListener('click', ()=>{
      message.classList.remove('message_active')
    })
   }
   
 
})

const servicesInfo = [
  {
    icon: "bi bi-diagram-3",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam molestias, sit voluptatem repellendus nulla nam fuga odit ratione magni!"
  },
  {
    icon: "bi bi-app",
    title: "Web App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam molestias, sit voluptatem repellendus nulla nam fuga odit ratione magni!"
  },
  {
    icon: "bi bi-person-fill-gear",
    title: "Freelancing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quibusdam molestias, sit voluptatem repellendus nulla nam fuga odit ratione magni!"
  },
];

const servicesCont = document.querySelector('.services_wrapper');



servicesInfo.forEach((detail)=>{
 servicesCont.innerHTML += `
        <div class="services_container">
          <div class="services_box">
            <div class="services_icon">
              <i class="${detail.icon}"></i>
            </div>
            <div class="services_title">
              <h3>${detail.title}</h3>
            </div>
            <div class="services_desc">
              <p>${detail.desc}</p>
            </div>
          </div>
        </div>
          
        
 `;

})

//Testimonial

const testimonialInfo = [
  {
    img: "/ASSETS/IMG/my_image.jpeg",
    name: "Moses",
    text: " I'm So glad to have you develop my Website, It's so cool and wonderful, you also care for your Customers Keep it up"
  },
  {
    img: "/ASSETS/IMG/moses.jpg",
    name: "Daniel",
    text: " Best Developer i have Seen, Keep up the Good Work"
  },
  {
    img: "/ASSETS/IMG/miracle.JPG",
    name: "Miracle",
    text: " When i came across to you, My life have been better, Thanks Bro"
  }
];

const testBtns = document.querySelectorAll('.testi_btn')

testBtns.forEach((testBtn)=>{
  testBtn.addEventListener('click', ()=>{
    if(testBtn.classList.contains('forward')){
      currentItem++;
       

      if (currentItem > testimonialInfo.length - 1) {
      currentItem = 0;
      
      }
      testiBoxCon()
    }

    else if(testBtn.classList.contains('backward')){
      currentItem--;
      if (currentItem < 0) {
       currentItem = testimonialInfo.length - 1;
      }
      testiBoxCon();
    }

   
  })
})


const testiBox = document.querySelector('.testi_wrapper')

let currentItem = 0;
window.addEventListener("DOMContentLoaded", ()=>{
 testiBoxCon()
})

const testiBoxCon = (()=>{
  const items = testimonialInfo[currentItem];
    testiBox.innerHTML = `
      <div class="testi_box">
        <div class="testi_img">
          <img src="${items.img}" alt="">
        </div>
        <article>
          <div class="testi_name">
          <h4>${items.name}</h4>
          </div>

          <div class="testi_text">
            <p>
              ${items.text}
            </p>
          </div>
        </article>

      </div>
    `;
})

//Menu Bar Toggling

const toggleItem = document.querySelector('.links')
const menuUp = document.querySelector('.burger_up');
const menuDown = document.querySelector(".burger_down");

let toggleUp = ()=>{
    if (toggleItem.classList.contains("toggle_menu")) {
      toggleItem.classList.remove("toggle_menu");
       menuDown.classList.remove("rotate");
    }
    else{
      toggleItem.classList.add('toggle_menu')
      menuDown.classList.add("rotate");
    }
}

let toggleDown = () =>{
  if(toggleItem.classList.contains('toggle_menu')){
    toggleItem.classList.add("toggle_menu");
    menuDown.classList.remove('toggle')
    menuUp.classList.add('toggle')
    
  }

}




 
