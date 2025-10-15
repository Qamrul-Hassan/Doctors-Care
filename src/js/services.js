console.log("Services JS loaded");

const serviceContainers = [
    {
        id: 1,
        title: "Problemas digestivos",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
        id: 2,
        title: "Saúde Hormonal",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
        id: 3,
        title: "Bem-estar mental",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
        id: 4,
        title: "Cuidados pediátricos",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
        id: 5,
        title: "Autoimune e Inflamação",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    },
    {
        id: 6,
        title: "Saúde do Coração",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    }
   
]
 console.log("Service Containers: ", serviceContainers);

 const servicesContainer = document.getElementById("services-container");
 console.log("Services Container Element: ", servicesContainer.innerHTML);

    servicesContainer.innerHTML = serviceContainers.map(service => generateServiceHTML(service)).join("");
 
 function generateServiceHTML(service) {
    return `
    <div class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition-all duration-300 overflow-hidden">
    <div class="p-6 text-left mb-2 ">
    <i class="ri-check-line p-2 border-2 border-primary rounded-full bg-primary-light01 text-primary"></i>
      <h4 class="text-xl font-semibold mb-2 mt-6 text-secondary-headline">${service.title}</h4>
      <p class="text-gray-600">${service.description}</p>
    </div>
    
     
    
    </div>`
   };