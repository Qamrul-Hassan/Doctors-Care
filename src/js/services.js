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

   function generateServiceHTML() {
    return `
    <div class="bg-white shadow-md rounded-lg p-6 hover:scale-105 transform transition-all duration-300 overflow-hidden">
      <h3 class="text-xl font-semibold mb-2 text-secondary-headline">${service.title}</h3>
      <p class="text-gray-600">${service.description}</p>
    </div>
    <div>
    <i class="ri-check-line"></i>
    `
   };