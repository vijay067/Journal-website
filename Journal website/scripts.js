// Function to show/hide section content
function showSection(sectionId) {
  // Hide all section content
  const sections = document.querySelectorAll('.section-content');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show selected section content
  const selectedSection = document.getElementById(`${sectionId}-content`);
  selectedSection.style.display = 'block';
}

// Toggle visibility of new journal form
function toggleJournalVisibility() {
  const form = document.getElementById('new-journal-form');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

// Save journal entry
function saveJournal() {
  const textarea = document.querySelector('#new-journal-form textarea');
  const journalEntry = textarea.value.trim();
  if (journalEntry !== '') {
    // Add journal entry to user's list
    const myJournalsList = document.getElementById('my-journals-list');
    const entryElement = document.createElement('div');
    entryElement.classList.add('journal-entry');
    entryElement.textContent = journalEntry;
    myJournalsList.appendChild(entryElement);

    // Clear textarea
    textarea.value = '';

    // Hide new journal form
    toggleJournalVisibility();
  }
}

// Add click event listeners to top bar sections
document.querySelectorAll('.section').forEach(section => {
  section.addEventListener('click', function() {
    const sectionId = this.id;
    showSection(sectionId);
  });
});

// Example: Show home section by default
showSection('home');


// Basic script for the "Get Started" button
document.querySelector('.cta-button').addEventListener('click', function() {
  alert('Welcome to Journal Haven! Start your journey now.');
  // Here you can add more functionality, such as redirecting to another page
});


// Function to edit a journal entry
function editJournal(button) {
  // Get the journal content
  var journalContent = button.parentNode.querySelector('.journal-content p').textContent;
  
  // Create a textarea for editing
  var textarea = document.createElement('textarea');
  textarea.value = journalContent;
  
  // Replace the journal content with the textarea
  var journalEntry = button.parentNode;
  journalEntry.querySelector('.journal-content').innerHTML = '';
  journalEntry.querySelector('.journal-content').appendChild(textarea);
  
  // Change the button text and function to save edited journal
  button.textContent = 'Save';
  button.onclick = function() {
    saveEditedJournal(button);
  };
}

// Function to save an edited journal entry
function saveEditedJournal(button) {
  // Get the edited content from the textarea
  var editedContent = button.parentNode.querySelector('textarea').value;
  
  // Replace the textarea with the updated journal content
  var journalEntry = button.parentNode;
  journalEntry.querySelector('.journal-content').innerHTML = '<p>' + editedContent + '</p>';
  
  // Change the button text and function back to edit
  button.textContent = 'Edit';
  button.onclick = function() {
    editJournal(button);
  };
}

function publishJournal() {
  // Display a pop-up message to indicate successful publication
  alert('Journal published successfully');
}

function searchJournals() {
  var input, filter, journals, journal, i, txtValue;
  input = document.getElementById('search-box');
  filter = input.value.toLowerCase();
  journals = document.getElementsByClassName('journal');
  
  for (i = 0; i < journals.length; i++) {
    journal = journals[i];
    txtValue = journal.getAttribute('data-name');
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      journal.style.display = "";
    } else {
      journal.style.display = "none";
    }
  }
}

function showJournal(person) 
{
  var title = "";
  var text = "";
  
  switch(person) 
  {
    case 'elonmusk':
      title = "Elon Musk's Journal";
      text = "Reflecting on today's advancements and discussions, it is evident that AI holds transformative potential, presenting both unprecedented opportunities and significant ethical and safety challenges. Our meetings with the Neuralink team highlighted the immense possibilities of brain-machine interfaces, emphasizing the need for ethical AI development that enhances human capabilities without compromising autonomy. Collaborations with OpenAI reinforced our commitment to creating AI that aligns with human values, underscoring the importance of transparency and robust safety measures. Reviewing Tesla's autonomous systems further illustrated the delicate balance between innovation and user trust, necessitating foolproof systems and proactive regulatory compliance. As we navigate this uncharted territory, the focus remains on ensuring that AI serves as a powerful ally to humanity. The commitment to guiding AI development responsibly, maintaining public trust, and prioritizing safety is not just a professional duty but a profound moral responsibility. This journey, much like the mission to Mars, is an exciting frontier filled with both challenges and immense potential, requiring cautious, ethical, and visionary leadership.\n\nContact Information \nCEO, SpaceX and Tesla \nEmail: elonmusk@spacex.com \nTwitter: @elonmusk \n";
      break;
    case 'markzuckerberg':
      title = "Mark Zuckerberg's Journal";
      text = "Today begins quietly in Palo Alto, the morning sun casting a gentle glow through my office window. This peaceful moment allows me to collect my thoughts before diving into the day's challenges. Stepping into the bustling atmosphere of our headquarters, the energy of my team fuels my determination to innovate and improve our platforms. Reflecting on recent developments, I draw strength from the resilience of our community and feel gratitude for their ongoing support. As the day progresses, I find joy in collaborating with colleagues, each interaction a reminder of our shared mission. Every day presents new opportunities to make a positive impact, and I am grateful for the chance to pursue our vision with steadfast dedication.\n\nContact Information \nCEO  \nEmail: mark@juventus.com \nTwitter: @markzukerberg \n Instagram: @mark";
      break;
    case 'viratkohli':
      title = "Virat Kohli's Journal";
      text = "Today dawns peacefully in Mumbai, the city waking up outside my window. This tranquil moment allows me to collect my thoughts before diving into a day of training. Stepping onto the familiar cricket grounds, the camaraderie with my teammates ignites my determination to surpass boundaries and refine my skills. Reflecting on recent challenges, I draw strength from adversity and feel immense gratitude for the unwavering support of fans and loved ones. Throughout the day, I relish moments of joy with my teammates, each instance reinforcing my deep love for the sport. Every day presents a new opportunity, and I am thankful for the chance to pursue my passion with relentless dedication. \n\nContact Information \nProfessional cricketer \nEmail: virat.com \nTwitter: @virat \n Instagram: @virat ";
      break;
    case 'cristianoronaldo':
      title = "Cristiano Ronaldo's Journal";
      text = "Today, I return to Madrid with a mix of nostalgia and determination. Training under the intense sun reminds me of the relentless dedication needed to excel. Amidst the chaos, moments of solitude bring clarity. Each match presents unique challenges, but the victories are a testament to perseverance. Grateful for this journey, I embrace each day with renewed passion and purpose, ready for whatever lies ahead. \n\nContact Information \nProfessional Footballer \nEmail: cr7@juventus.com \nTwitter: @Cristiano \n Instagram: @cristiano";
      break;
    case 'lionelmessi':
      title = "Lionel Messi's Journal";
      text = "Today begins quietly in Barcelona, the city stirring gently outside my window. This peaceful moment allows me to gather my thoughts before training begins. Stepping onto the familiar training grounds, the camaraderie with teammates fuels my determination to push beyond limits and refine my skills. Reflecting on recent challenges, I find strength in adversity and gratitude for the support of fans and loved ones. As the day unfolds, I cherish moments of joy with teammates, reminding me of the pure love I have for this game. Each day is a privilege, and I am grateful for the opportunity to pursue my passion with unwavering dedication. \n\nContact Information \nProfessional Footballer \nEmail: messi@barcelona.com \nTwitter: @TeamMessi \n Instagram: @leomessi";
      break;
    case 'billgates':
      title = "Bill Gate's Journal";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.\n\nContact Information \nCEO  \nEmail: @billgatesfoundation.org \nTwitter: @bill \n Instagram: @billgates";
      break;
    case 'stevejobs':
      title = "Stevejobs's Journal";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.\n\nContact Information \nCEO  \nEmail: @stevejobsfoundation.org \nTwitter: @steve \n Instagram: @stevejobs";
      break;
    case 'david':
      title = "David Goggins's Journal";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.\n\nContact Information \nEmail: @davidgoggins.org \nTwitter: @davidgoggins \n Instagram: @goggins";
      break;
    case 'dhoni':
      title = "Dhoni's Journal";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.\n\nContact Information  \nEmail: @dhoni.org \nTwitter: @Mahi \n Instagram: @dhoni";
      break;
    case 'sunil':
      title = "Sunil Chetri's Journal";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.\n\nContact Information  \nEmail: @sunilchetri.org \nTwitter: @sunil \n Instagram: @sunilchetri";
      break;
    case 'nambinarayanan':
      title = "Nambi Narayanan's Research Papers";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.\n\nContact Information. \nEmail: @nambinarayanan.org \nTwitter: @Nambi \n Instagram: @nambinarayanan";
      break;
    case 'viswanathan anand':
      title = "Viswanathan Anand's Journal";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.\n\nContact Information  \nEmail: @viswanathan.org \nTwitter: @anand \n Instagram: @vishwanathananand";
      break;
    case 'srinivasa ramanujan':
      title = "Srinivasa Ramanujan's Journal";
      text = "Today dawns quietly in Seattle, the gentle hum of the city outside my window. This tranquil moment allows me to collect my thoughts before diving into the day's tasks. Stepping into familiar offices, the collaboration with my team fuels my determination to innovate and solve complex challenges. Reflecting on recent projects, I draw strength from overcoming obstacles and am grateful for the unwavering support of colleagues and partners. Throughout the day, I treasure moments of insight and progress, reaffirming my passion for technology and philanthropy. Each opportunity to make a difference is a privilege, and I am thankful for the chance to contribute to a brighter future.";
      break;



    default:
      title = "Journal not found";
      text = "";
  }
  
  document.getElementById('journal-title').innerText = title;
  document.getElementById('journal-text').innerText = text;
  
  document.getElementById('explore-content').style.display = 'none';
  document.getElementById('journal-content').style.display = 'block';
}

function backToExplore() {
  document.getElementById('journal-content').style.display = 'none';
  document.getElementById('explore-content').style.display = 'block';
}


let isPlaying = false;
const musicButton = document.getElementById('music-button');
const backgroundMusic = document.getElementById('background-music');

function toggleMusic() {
  if (isPlaying) {
    backgroundMusic.pause();
    musicButton.innerText = '🎵';
  } else {
    backgroundMusic.play();
    musicButton.innerText = '🔊';
  }
  isPlaying = !isPlaying;
}


document.getElementById("profile-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Perform form submission logic (e.g., update profile data)
  // For demonstration, we'll just show an alert message
  alert("Profile updated successfully!");
});


document.getElementById('logout-btn').addEventListener('click', function() {
  logout();
});

// Function to handle logout
function logout() {
  alert('Logged out successfully');
  // Add additional logout logic here, such as clearing session data or redirecting
}



