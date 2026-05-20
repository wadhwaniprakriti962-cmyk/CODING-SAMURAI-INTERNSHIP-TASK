let destinations=[
    {
        name:"Tirthan Valley",
        tagline:"Where silence meets the river",
        image:"./images/tirthan.jpg",
        location:"Himachal Pradesh",
        bestTime:"March to June",
        reach:"Via Bhuntar Airport",
        budget:"₹8k - ₹12k",
        theme:  "rgba(120,170,140,0.15)",
        highlights:[
   "🌲 Riverside camping beside the Tirthan River",
   "🌄 Hidden waterfalls and forest hikes",
   "🌌 Peaceful stargazing nights in the valley"
],
       spots:[
   {
      name:"Jalori Pass",
      image:"images/jalori.jpg"
   },
   {
      name:"Chehni Kothi",
      image:"images/chehni.jpg"
   },
   {
      name:"Great Himalayan National Park",
      image:"images/ghnp.webp"
   }
],
    tip:"💡 Perfect escape for riverside camping and peaceful mornings."
    },
    {
        name:"Varkala",
        tagline:"Cliffs,waves and sunsets",
        image:"./images/varkala.jpg",
        location:"Kerala",
        bestTime:"October to March",
        reach:"Via Trivandrum Airport",
        budget:"₹10k - ₹15k",
        theme:"rgba(255,170,120,0.15)",
        highlights:[
   "🌅 Sunset views from dramatic sea cliffs",
   "🏄 Surfing and beachside cafes",
   "🎶 Relaxed coastal nightlife and music vibes"
],     
        spots:[
   {
      name:"Varkala Cliff",
      image:"images/varkala-cliff.avif"
   },
   {
      name:"Black Sand Beach",
      image:"images/black-sand.jpg"
   },
   {
      name:"Janardanaswamy Temple",
      image:"images/temple.jpg"
   }
],
    tip:"💡 Sunset views from the cliffside cafés are unforgettable."
    },
    {
        name:"Spiti Valley",
        tagline:"Land of raw beauty",
        image:"./images/spiti.jpg",    
        location:"Himachal Pradesh",
        bestTime:"May to September",
        reach:"Via Manali or Shimla route",
        budget:"₹15k - ₹25k",
        theme:"rgba(170,190,210,0.15)",
        highlights:[
   "🏔 Stunning Himalayan desert landscapes",
   "🌌 Crystal-clear night skies for stargazing",
   "🛕 Ancient monasteries and remote villages"
],
       spots:[
   {
      name:"Key Monastery",
      image:"images/key.jpg"
   },
   {
      name:"Chandratal Lake",
      image:"images/chandratal.jpg"
   },
   {
      name:"Langza Village",
      image:"images/langza.jpg"
   }
  ],
    tip:"💡 Carry warm layers — nights here get extremely cold."
    },
    {
        name:"Mandu",
        tagline:"Echoes of timeless history",
        image:"./images/mandu.jpg",
        location:"Madhya Pradesh",
        bestTime:"July to March",
        reach:"Via Indore Airport",
        budget:"₹6k - ₹10k",
        theme:"rgba(190,160,120,0.15)",highlights:[
   "🏰 Grand Afghan-era forts and palaces",
   "🌧 Monsoon views over historic ruins",
   "🎵 Echo points and timeless architecture"
]  ,
      spots:[
   {
      name:"Jahaz Mahal",
      image:"images/jahaz.webp"
   },
   {
      name:"Rani Roopmati Pavilion",
      image:"images/roopmati.jpg"
   },
   {
      name:"Hoshang Shah Tomb",
      image:"images/tomb.jpg"
   }
],
    tip:"💡 Visit during monsoon to witness Mandu at its greenest beauty."
    }
]
let container=document.querySelector(".card-container")
    destinations.forEach(function(place){

    container.innerHTML += `
        <div class="card" style="background-image:url('${place.image}')">
            
            <div class="card-content">
                <h1>${place.name}</h1>
                <p>${place.tagline}</p>
                <button onclick='openModal(${JSON.stringify(place)})'>
                    Explore
                </button>
            </div>

        </div>
    `;
});
const modal = document.getElementById("modal");
const modalContent = document.querySelector(".modal-content");
function scrollToCards(){
    document.getElementById("cards").scrollIntoView({
        behavior: "smooth"
    });;
}
function openModal(place){
    let highlightsHTML="";
    place.highlights.forEach(function(item){

        highlightsHTML += `
        <div class="highlight-item">
            ${item}
        </div>
        `;

    });
    let spotsHTML="";
    place.spots.forEach(function(spot){
      spotsHTML+=`
      <div  class="spot-card">
        <div class="spot-image"
         style="background-image:url('${spot.image}')">
        </div>
        <h3>${spot.name}</h3>
      </div>
      `
    })
    modalContent.style.backgroundImage = `
         linear-gradient(
          rgba(0,0,0,0.35),
          rgba(0,0,0,0.45)
           ),
          url('${place.image}')
          `;

    modalContent.innerHTML=`
    <div class="modal-hero" style=background-image:url("${place.image}")>
      <div class="hero-top">
        <button onclick='goBack()'>  ← Back</button>
      </div>
      <div class="hero-bottom">
        <h1>${place.name}</h1>
        <p>${place.tagline}</p>
      </div>
    </div>
    <div class="info-grid" style="background:${place.theme}">
     <div class="info-card">
       <span class="icon">📍</span>
       <h3>Location</h3>
       <p>${place.location}</p>
     </div>
     <div class="info-card">
       <span class="icon">🗓</span>
       <h3>Best Time</h3>
       <p>${place.bestTime}</p>
     </div>
     <div class="info-card">
       <span class="icon">✈️</span>
       <h3>How To Reach</h3>
       <p>${place.reach}</p>
     </div>
     <div class="info-card">
       <span class="icon">💰</span>
       <h3>Budget</h3>
       <p>${place.budget}</p>
     </div>
    </div>
     <div class="highlights-section">
        <h2>Highlights</h2>
        ${highlightsHTML}
     </div>
     <div class="spots-section">
       <h2>Must visit places</h2>
       <div class="spots-container">
      ${spotsHTML}
     </div>
     </div>
     <p class="destination-tip">
             ${place.tip} 
     </p>

`;
    modal.classList.add("show");
}
function goBack(){
    modal.classList.remove("show");
}
