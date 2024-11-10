var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertion
    var pictureElement = document.getElementById("picture");
    var nameElement = document.getElementById("name");
    var phoneNumberElement = document.getElementById("phoneNumber");
    var emailElement = document.getElementById("email");
    var educationElement = document.getElementById("education");
    var skillElement = document.getElementById("skill");
    var experienceElement = document.getElementById("experience");
    if (pictureElement && nameElement && phoneNumberElement && emailElement && educationElement && skillElement && experienceElement) {
        var picture = pictureElement.value;
        var name_1 = nameElement.value;
        var phoneNumber = phoneNumberElement.value;
        var email = emailElement.value;
        var education = educationElement.value;
        var skill = skillElement.value;
        var experience = experienceElement.value;
        // Creating the resume output
        var resumeOutput = "\n          <h2>Resume</h2>\n          <h3>Personal Information</h3>\n          <p>".concat(picture, "</p>\n          <p><strong>Name:</strong> ").concat(name_1, "</p>\n          <p><strong>Phone Number:</strong> ").concat(phoneNumber, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n          <h4>Skill</h4>\n          <p>").concat(skill, "</p>\n          <h3>Experience</h3>\n          <p>").concat(experience, "</p>");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The Resume Output element is missing");
        }
    }
    else {
        console.error("One or more form elements are missing.");
    }
    var workExperience = document.getElementById("workExperience");
    var workSkill = document.getElementById("workSkill");
    var workEducation = document.getElementById("workEducation");
    workExperience === null || workExperience === void 0 ? void 0 : workExperience.addEventListener("input", function (event) {
        var updateExperience = event.target.innerText;
        console.log(updateExperience);
    });
    workSkill === null || workSkill === void 0 ? void 0 : workSkill.addEventListener("input", function (event) {
        var updateSkill = event.target.innerText;
        console.log(updateSkill);
    });
    workEducation === null || workEducation === void 0 ? void 0 : workEducation.addEventListener("input", function (event) {
        var updateEducation = event.target.innerText;
        console.log(updateEducation);
    });
});
var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
});
var downloadPdf = document.getElementById("downloadpdf");
downloadPdf === null || downloadPdf === void 0 ? void 0 : downloadPdf.addEventListener("click", function () {
    window.print();
});
