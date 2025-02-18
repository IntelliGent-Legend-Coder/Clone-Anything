// Copy email functionality
document.getElementById("copyEmail").addEventListener("click", () => {
    const email = "kenzchy.design@gmail.com"
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err)
      })
  })
  
  // Infinite scroll for logos
  const logos = [
    "National Bank",
    "Mattered",
    "Coca-Cola",
    "Adobe",
    "Subway",
    "CodeAcademy",
    "Google",
    "Microsoft",
    "Apple",
    "Amazon",
    "Facebook",
    "Twitter",
  ]
  
  function createLogoItems() {
    const container = document.querySelector(".logo-container")
    logos.forEach((logo) => {
      const logoItem = document.createElement("div")
      logoItem.classList.add("logo-item")
      logoItem.textContent = logo
      container.appendChild(logoItem)
    })
    // Clone the logos to create a seamless loop
    const clone = container.cloneNode(true)
    document.querySelector(".logo-scroll").appendChild(clone)
  }
  
  createLogoItems()
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  