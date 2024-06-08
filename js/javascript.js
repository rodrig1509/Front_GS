window.onload=function(){
    document.querySelectorAll("#show-more").forEach(function (button) {
        button.addEventListener("click", function () {
          const parent = this.parentElement;
     
          if (parent.classList.contains("active")) {
            document.querySelector(".infos").classList.remove("expand");
            parent.classList.remove("active");
            this.classList.remove("fa-x")
            this.classList.add("fa-plus")
            return;
         
            }
           
          document.querySelector(".infos").classList.add("expand");
          parent.classList.add("active");
          this.classList.remove("fa-plus")
          this.classList.add("fa-x")
        });
      });
}
 
function openModal(){
  const modal = document.getElementById('modal-container')
  modal.classList.add('mostrar')
 
  modal.addEventListener('click', (e) =>{
      if (e.target.id == 'modal-container' || e.target.id == "show-more"){
          modal.classList.remove('mostrar')
          localStorage.fechaModal = 'modal-container'
      }
  })
}
 