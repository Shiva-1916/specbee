document.addEventListener('DOMContentLoaded', () => {
  const carouselTrack = document.querySelector('.carousel-track');
  const modal = document.getElementById('selectedSpeaker');
  
  document.querySelectorAll('.speaker-card').forEach(card => {
    card.addEventListener('click', () => {
      
      document.getElementById('modalName').textContent = card.dataset.name;
      document.getElementById('modalTitle').textContent = card.dataset.title;
      document.getElementById('modalCompany').textContent = card.dataset.company;
      document.getElementById('modalDescription').textContent = card.dataset.description;
      document.getElementById('modalImage').src = card.querySelector('img').src;
      document.getElementById('description').textContent = "Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage.";

     
      modal.hidden = false;
    });
  });

  document.querySelector('.carousel-control.left').addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -200, behavior: 'smooth' });
  });

  document.querySelector('.carousel-control.right').addEventListener('click', () => {
    carouselTrack.scrollBy({ left: 200, behavior: 'smooth' });
  });
});

function closeModal() {
  document.getElementById('selectedSpeaker').hidden = true;
}
