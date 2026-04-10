const teamContainer = document.querySelector("#team");

for (let i = 0; i < teamMembers.length; i++) {

    const member = teamMembers[i];

    teamContainer.innerHTML += `
  
  <div class="card">
  
    <img src="${member.img}">
    
    <div class="card-info">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      <p class="email">${member.email}</p>
    </div>
    
  </div>
  
  `;
}