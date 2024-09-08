document.getElementById('generate-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const gradYear = (document.getElementById('grad-year') as HTMLInputElement).value;
    
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const role = (document.getElementById('role') as HTMLInputElement).value;
    const years = (document.getElementById('years') as HTMLInputElement).value;
    
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
    document.getElementById('resume-name')!.textContent = `Name: ${name}` ;
    document.getElementById('resume-email')!.textContent = `Email: ${email}`;
    document.getElementById('resume-phone')!.textContent = `Phone: ${phone}`; 
    
    document.getElementById('resume-school')!.textContent = `School: ${school}`;
    document.getElementById('resume-degree')!.textContent = `Degree: ${degree}`;
    document.getElementById('resume-grad-year')!.textContent = `Graduation Year: ${gradYear}`;
    
    document.getElementById('resume-company')!.textContent = `Company: ${company}`;
    document.getElementById('resume-role')!.textContent = `Role: ${role}`;
    document.getElementById('resume-years')!.textContent = `Years: ${years}`;
    
    document.getElementById('resume-skills-list')!.textContent = `Skills: ${skills}`;
    
    // Show the resume and hide the form
    document.getElementById('resume')!.style.display = 'block';
    document.getElementById('resume-form')!.style.display = 'none';
});
