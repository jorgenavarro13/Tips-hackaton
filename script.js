const tips = [
  {
    title: "1. Study previous experiences and the state of the art",
    text: "You don’t always need to reinvent the wheel. There is plenty of literature and existing projects you can consult and use as a basis before starting."
  },
  {
    title: "2. Keep it simple and practical",
    text: "Use technologies you already know. You don’t need the latest framework or version. Overengineering is common in these competitions; sometimes improving a single process or component is enough to make a significant difference."
  },
  {
    title: "3. Divide responsibilities",
    text: "Having everyone do the same task in a team reduces productivity. Assign specific roles to each member, which will keep them motivated and ensure their part gets done efficiently."
  },
  {
    title: "4. Map and define variables",
    text: "You won’t always be in the same conditions or with the same team. Keep a record of the testing conditions, because even small changes, like battery replacement, can affect the outcome of your strategy."
  },
  {
    title: "5. Don’t program until the last minute",
    text: "Programming at the last minute is inefficient and stressful. You won’t achieve huge improvements and may add unnecessary pressure to your team. Set a clear time limit for coding and testing to prevent last-minute mistakes."
  },
  {
    title: "6. Use development tools",
    text: "Tools like GitHub are not mandatory but can make a huge difference. Having version control allows everyone to collaborate, provides a backup if the project breaks, and helps compare different versions efficiently."
  },
  {
    title: "7. Collaborate with others",
    text: "Other teams are competitors, not enemies. You can rely on them and ask for help if you encounter problems. Also, ask the organizers for guidance; they have experience and knowledge that can be very valuable."
  },
  {
    title: "8. Don’t burn out at the beginning",
    text: "Manage your energy efficiently throughout the competition. Making huge progress on the first day may leave you exhausted for the final presentation, reducing your focus and performance."
  },
  {
    title: "9. Make friends",
    text: "Hackathons are for competing but also for meeting people. Interacting with other developers and researchers is fun and can help you learn from their work to improve yourself."
  },
  {
    title: "10. P.S. Check the guidelines",
    text: "Always read the competition rules and requirements carefully. It can save you from mistakes or surprises during the event."
  }
];

const container = document.getElementById("tips-container");

tips.forEach(tip => {
  const col = document.createElement("div");
  col.className = "col-md-6";

  const card = document.createElement("div");
  card.className = "card h-100";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = tip.title;

  const cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = tip.text;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(cardBody);
  col.appendChild(card);
  container.appendChild(col);
});
