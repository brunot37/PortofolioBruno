const translateBtn = document.getElementById('translate-btn');
const translateText = document.getElementById('translate-text');

const contentPT = {
  headerTitle: "Olá, sou o Bruno Cunha!",
  headerSubtitle: "Engenheiro Informático / Desenvolvedor Web",
  aboutTitle: "Sobre mim",
  aboutText: `Licenciado em Engenharia Informática, com interesse no desenvolvimento de plataformas web e móveis. No projeto final da licenciatura, desenvolvi uma plataforma web completa com React e Django REST Framework, consolidando competências em frontend, backend e integração de serviços.
Participei em diversos projetos académicos, adquirindo experiência prática em várias áreas da programação, trabalhando com diferentes linguagens e metodologias de desenvolvimento.
Tenho interesse em explorar novas tecnologias e enfrentar desafios, mantendo-me sempre aberto a novas oportunidades de crescimento e desenvolvimento profissional.`,
  degreeTitle: "Licenciatura",
  degreeCourse: "Curso:",
  degreeCourseName: "Engenharia Informática",
  degreePeriod: "Período:",
  degreePeriodValue: "2022–2025",
  degreeGrade: "Nota Final:",
  degreeGradeValue: "65%",
  degreeInstitute: "Instituto Politécnico de Bragança",
  experienceTitle: "Experiência Professional",
  experienceText: "Embora ainda não tenha experiência profissional formal, os meus projetos proporcionaram-me uma base sólida para enfrentar desafios, aplicando boas práticas de programação e de trabalho em equipa.",
  certificatesTitle: "Certificados",
  certificate1Name: "Introdução à Cibersegurança",
  certificate1Desc: "Aprendi conceitos básicos de cibersegurança, aprendi a identificar e prevenir ataques, e aprendi a utilizar ferramentas de cibersegurança para proteger sistemas e dados.",
  certificate2Name: "Microsoft Office Specialist: Excel Certification",
  certificate2Desc: "Aprendi conceitos básicos sobre Excel.",
  skillsTitle: "Tecnologias e Ferramentas",
  contactTitle: "Contacto",
  footerText: "© 2025 Bruno Cunha. Todos os direitos reservados."
};

const contentEN = {
  headerTitle: "Hello, I'm Bruno Cunha!",
  headerSubtitle: "Computer Engineer / Web Developer",
  aboutTitle: "About me",
  aboutText: `Graduated in Computer Engineering, with interest in developing web and mobile platforms. For my final degree project, I developed a full web platform with React and Django REST Framework, consolidating skills in frontend, backend, and service integration.
I participated in several academic projects, acquiring practical experience in various programming areas, working with different languages and development methodologies.
I am interested in exploring new technologies and facing challenges, always staying open to new opportunities for growth and professional development.`,
  degreeTitle: "Degree",
  degreeCourse: "Course:",
  degreeCourseName: "Computer Engineering",
  degreePeriod: "Period:",
  degreePeriodValue: "2022–2025",
  degreeGrade: "Final Grade:",
  degreeGradeValue: "65%",
  degreeInstitute: "Polytechnic Institute of Bragança",
  experienceTitle: "Professional Experience",
  experienceText: "Although I still don't have formal professional experience, my projects have provided me with a solid foundation to face challenges, applying best programming practices and teamwork.",
  certificatesTitle: "Certificates",
  certificate1Name: "Introduction to Cybersecurity",
  certificate1Desc: "I deepened my knowledge of cybersecurity, learning how to identify and prevent attacks.",
  certificate2Name: "Microsoft Office Specialist: Excel Certification",
  certificate2Desc: "I acquired fundamental knowledge of Excel, including basic functions and data formatting.",
  skillsTitle: "Skills and Tools",
  contactTitle: "Contact",
  footerText: "© 2025 Bruno Cunha. All rights reserved."
};

let isPortuguese = true;

translateBtn.addEventListener('click', () => {
  isPortuguese = !isPortuguese;
  const content = isPortuguese ? contentPT : contentEN;

  document.querySelector('header h1').textContent = content.headerTitle;
  document.querySelector('header .subtitle').textContent = content.headerSubtitle;

  document.querySelector('.about-me h2').innerHTML = `<i class="fas fa-user"></i> ${content.aboutTitle}`;
  document.querySelector('.about-me-content p').textContent = content.aboutText;

  const degreeSection = document.querySelectorAll('.card')[1];
  degreeSection.querySelector('h2').innerHTML = `<i class="fas fa-university"></i> ${content.degreeTitle}`;
  const paragraphs = degreeSection.querySelectorAll('p');
  paragraphs[0].innerHTML = `<strong>${content.degreeCourse}</strong> ${content.degreeCourseName}`;
  paragraphs[1].innerHTML = `<strong>${content.degreePeriod}</strong> ${content.degreePeriodValue}`;
  paragraphs[2].innerHTML = `<strong>${content.degreeGrade}</strong> ${content.degreeGradeValue}`;
  degreeSection.querySelector('a').innerHTML = `<i class="fas fa-external-link-alt"></i> ${content.degreeInstitute}`;

  const expSection = document.querySelectorAll('.card')[2];
  expSection.querySelector('h2').innerHTML = `<i class="fas fa-briefcase"></i> ${content.experienceTitle}`;
  expSection.querySelector('ul p').textContent = content.experienceText;

  const certSection = document.querySelectorAll('.card')[3];
  certSection.querySelector('h2').innerHTML = `<i class="fas fa-certificate"></i> ${content.certificatesTitle}`;
  const certItems = certSection.querySelectorAll('ul li');
  certItems[0].querySelector('a').innerHTML = `${content.certificate1Name} <i class="fas fa-external-link-alt"></i>`;
  certItems[0].querySelector('p').textContent = content.certificate1Desc;
  certItems[1].querySelector('a').innerHTML = `${content.certificate2Name} <i class="fas fa-external-link-alt"></i>`;
  certItems[1].querySelector('p').textContent = content.certificate2Desc;

  document.querySelectorAll('.card')[4].querySelector('h2').innerHTML = `<i class="fas fa-laptop-code"></i> ${content.skillsTitle}`;

  const contactSection = document.getElementById('contacto');
  contactSection.querySelector('h2').innerHTML = `<i class="fas fa-share-alt"></i> ${content.contactTitle}`;

  document.querySelector('footer p').textContent = content.footerText;

  translateText.textContent = isPortuguese ? 'Português' : 'English';
});
