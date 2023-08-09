// Speaker data
const speakersData = [
  {
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks, in 2006',
    image: 'Assets/feat img/yochai.JPG',
  },
  {
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.',
    image: 'Assets/feat img/noh.JPG',
  },
  {
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    bio: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikimedia, freely available in 290 languages and used by nearly half a billion people around the world every month.',
    image: 'Assets/feat img/lila.JPG',
  },
  {
    name: 'Kilnam Chon',
    title: 'Outspoken advocate for the open web and digital commons',
    bio: "Kilnam Chon helped bring the internet to Asia and was inducted into the inaugural class of the Internet Society's Internet Hall of Fame.",
    image: 'Assets/feat img/kilnam chon.JPG',
  },
  {
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    bio: 'European integration, political democracy, and youth participation through online platforms are her major focuses.',
    image: 'Assets/feat img/julia leda.jpg',
  },
  {
    name: 'Ryan Merkley',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    bio: 'Ryan has been leading open-source projects at the Mozilla Foundation, such as the open-source movement.',
    image: 'Assets/feat img/ryanmerkley.jpg',
  },
];

// Function to create speaker HTML
function createSpeakerHTML(speaker) {
  return `
        <div class="x">
         
            <div>
              <img class="image" src="${speaker.image}" alt="${speaker.name}" />
            </div>
            <div>
              <h3 class="TonicEnd">${speaker.name}</h3>
              <p6 class="Content">${speaker.title}</p6>
              <p class="bio">${speaker.bio}</p>
            </div>
          </div>
        `;
}

// Get the container element
const speakersContainer = document.getElementById('speakersContainer');

// Populate the speakers
speakersData.forEach((speaker) => {
  const speakerHTML = createSpeakerHTML(speaker);
  speakersContainer.innerHTML += speakerHTML;
});
