// Speaker data
const speakersData = [
  {
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial ',
    bio: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks, in 2006',
    image: 'Assets/bg/image/spk1.PNG',
  },
  {
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi ',
    bio: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science, technology, humanities, and the arts.',
    image: 'Assets/bg/image/spk2.PNG',
  },
  {
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia',
    bio: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikimedia, freely available in 290 languages and used by nearly half a billion people around the world.',
    image: 'Assets/bg/image/spk3.PNG',
  },
  {
    name: 'Kilnam Chon',
    title: 'Outspoken advocate for the open web',
    bio: "Kilnam Chon helped bring the internet to Asia and was inducted into the inaugural class of the Internet Society's Internet Hall of Fame.",
    image: 'Assets/bg/image/spk4.PNG',
  },
  {
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    bio: 'European integration, political democracy, and youth participation through online platforms are her major focuses.',
    image: 'Assets/bg/image/spk5.PNG',
  },
  {
    name: 'Ryan Merkley',
    title: 'CEO of Creative Commons',
    bio: 'Ryan has been leading open-source projects at the Mozilla Foundation, such as the open-source movement.',
    image: 'Assets/bg/image/spk6.PNG',
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
