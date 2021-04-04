const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
        id: 5,
        name: "firstname lastname",
        job: "developer",
        img:
          "images/profile-icon.jpg",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo, turpis at rutrum ultricies, tortor mi fringilla ipsum, sollicitudin tincidunt neque mauris in turpis. Nullam cursus odio eget metus congue volutpat. In aliquet gravida lacus at tristique. Proin imperdiet vulputate justo, sed aliquam nunc convallis sed. Morbi erat nibh, pretium.",
    },
];

const image = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('info');

const previousButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const randomButton = document.querySelector('.random-btn');

let currentItemOnDisplay = 4;

window.addEventListener('DOMContentLoaded', () => {
    changeDisplayedCard();
});

previousButton.addEventListener('click', ()=> {
    --currentItemOnDisplay;
    if (currentItemOnDisplay < 0) {
        currentItemOnDisplay = reviews.length-1;
    }
    changeDisplayedCard();
});

nextButton.addEventListener('click', ()=> {
    ++currentItemOnDisplay;
    if (currentItemOnDisplay > reviews.length-1) {
        currentItemOnDisplay = 0;
    }
    changeDisplayedCard();
});

randomButton.addEventListener('click', ()=> {
    currentItemOnDisplay = getRandomNumber();
    changeDisplayedCard();
});

function changeDisplayedCard() {
    const item = reviews[currentItemOnDisplay];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

function getRandomNumber() {
    return Math.floor(Math.random()*reviews.length);
}