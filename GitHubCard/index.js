/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):    ✅
           https://api.github.com/users/<your name>
*/ 
axios
  .get('https://api.github.com/users/donutwizard666') //using get to retrieve the api data
  .then(response => {  //I have retrieved data, so THEN, do this (method)
    const cards = document.querySelector('.cards'); //assigning cards to .card
    cards.appendChild(createCard(response.data)); //putting cards onto the .cards (the DOM)
    return response.data.followers_url; //we want to give the next THEN something to work with. Whatever the next THEN's response is, is what this return is (response.data.followers_url)
  })

  .then(response => { //chained the above .then
    axios
      .get(`${response}`) //another get command getting the RESPONSE above (response.data.followers_url)
      .then(response => {
        const cards = document.querySelector('.cards'); //assigning cards to .card
        console.log(response); //this response is MY followers api --> "https://api.github.com/users/donutwizard666/followers"
        response.data.forEach(element => { //going through the followers api 
        console.log(element.url); //each on of my followers profile api link

        axios //we need to get the data that is inside their api link
          .get(`${element.url}`) //getting the element (api link)
          .then(response => { // the response is data that is inside the api
            cards.appendChild(createCard(response.data));  //taking that data (inside the api) and creating cards for my people
        })
    });
  })
})

.catch(error => {
  console.log('the data was not returned');
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this   ✅
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards ✅
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['mmcdermott011', 'viewgo', 'primelos', 'adamwinzdesign', 'Sara-DLC'];


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element: ✅

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createCard(data) {
console.log(data);
const card = document.createElement('div');
const img = document.createElement('img')
const cardInfo = document.createElement('div');
const name = document.createElement('h3');
const username = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const profileLink = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');

card.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
username.classList.add('username');

card.appendChild(img);
card.appendChild(cardInfo);
cardInfo.appendChild(name);
cardInfo.appendChild(username);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);


img.src = data.avatar_url;
name.textContent = data.name;
username.textContent = data.login;
location.textContent = data.location;
profile.textContent = 'profile: ';
profileLink.textContent = data.html_url;
followers.textContent = "Followers: " + data.followers;
following.textContent = "Following: " + data.following;
bio.textContent = "Bio: " + data.bio;


profile.appendChild(profileLink);
return card;
  
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

