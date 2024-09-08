var _a;
(_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var school = document.getElementById('school').value;
    var degree = document.getElementById('degree').value;
    var gradYear = document.getElementById('grad-year').value;
    var company = document.getElementById('company').value;
    var role = document.getElementById('role').value;
    var years = document.getElementById('years').value;
    var skills = document.getElementById('skills').value;
    document.getElementById('resume-name').textContent = "Name: ".concat(name);
    document.getElementById('resume-email').textContent = "Email: ".concat(email);
    document.getElementById('resume-phone').textContent = "Phone: ".concat(phone);
    document.getElementById('resume-school').textContent = "School: ".concat(school);
    document.getElementById('resume-degree').textContent = "Degree: ".concat(degree);
    document.getElementById('resume-grad-year').textContent = "Graduation Year: ".concat(gradYear);
    document.getElementById('resume-company').textContent = "Company: ".concat(company);
    document.getElementById('resume-role').textContent = "Role: ".concat(role);
    document.getElementById('resume-years').textContent = "Years: ".concat(years);
    document.getElementById('resume-skills-list').textContent = "Skills: ".concat(skills);
    // Show the resume and hide the form
    document.getElementById('resume').style.display = 'block';
    document.getElementById('resume-form').style.display = 'none';
});
