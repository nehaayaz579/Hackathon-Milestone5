document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Type assertion
    const pictureElement = document.getElementById("picture") as HTMLInputElement;
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const phoneNumberElement = document.getElementById("phoneNumber") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
   
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const skillElement = document.getElementById("skill") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
  
    if (pictureElement && nameElement && phoneNumberElement && emailElement && educationElement && skillElement && experienceElement) {
        const picture = pictureElement.value; 
        const name = nameElement.value;
        const phoneNumber = phoneNumberElement.value;
        const email = emailElement.value;
        const education = educationElement.value;
        const skill = skillElement.value;
        const experience = experienceElement.value;
  
        // Creating the resume output
        const resumeOutput = `
          <h2>Resume</h2>
          <h3>Personal Information</h3>
          <p>${picture}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Education</h3>
          <p>${education}</p>
          <h4>Skill</h4>
          <p>${skill}</p>
          <h3>Experience</h3>
          <p>${experience}</p>`;
        
        const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("The Resume Output element is missing");
        }
    } else {
        console.error("One or more form elements are missing.");
    }
    const workExperience = document.getElementById("workExperience");
    const workSkill = document.getElementById("workSkill");
    const workEducation = document.getElementById("workEducation");
    workExperience?.addEventListener("input",(event)=>{
        const updateExperience =(event.target as HTMLElement).innerText;
        console.log(updateExperience)
    })
    workSkill?.addEventListener("input",(event)=>{
        const updateSkill =(event.target as HTMLElement).innerText;
        console.log(updateSkill)
    })
    workEducation?.addEventListener("input",(event)=>{
        const updateEducation =(event.target as HTMLElement).innerText;
        console.log(updateEducation)
    })
  });
  const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement
  shareableLink?.addEventListener("click",()=>{

  })
const downloadPdf = document.getElementById("downloadpdf") as HTMLAnchorElement
downloadPdf?.addEventListener("click",()=>{
    window.print()
})
 
 













