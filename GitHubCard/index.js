import axios from 'axios';


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/fibonacci85')
// .then(response  => {
//   console.log(response.data)
// response.data.forEach(item => {
//   cards.append(myFollowers(item))
// })


// })
// .catch(error => {
//  (console.log("ERROR",error)) 
// })




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ {
  "login": "chrisjcorbin",
  "id": 64340122,
  "node_id": "MDQ6VXNlcjY0MzQwMTIy",
  "avatar_url": "https://avatars2.githubusercontent.com/u/64340122?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/chrisjcorbin",
  "html_url": "https://github.com/chrisjcorbin",
  "followers_url": "https://api.github.com/users/chrisjcorbin/followers",
  "following_url": "https://api.github.com/users/chrisjcorbin/following{/other_user}",
  "gists_url": "https://api.github.com/users/chrisjcorbin/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/chrisjcorbin/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/chrisjcorbin/subscriptions",
  "organizations_url": "https://api.github.com/users/chrisjcorbin/orgs",
  "repos_url": "https://api.github.com/users/chrisjcorbin/repos",
  "events_url": "https://api.github.com/users/chrisjcorbin/events{/privacy}",
  "received_events_url": "https://api.github.com/users/chrisjcorbin/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "saljahmi",
  "id": 67301971,
  "node_id": "MDQ6VXNlcjY3MzAxOTcx",
  "avatar_url": "https://avatars1.githubusercontent.com/u/67301971?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/saljahmi",
  "html_url": "https://github.com/saljahmi",
  "followers_url": "https://api.github.com/users/saljahmi/followers",
  "following_url": "https://api.github.com/users/saljahmi/following{/other_user}",
  "gists_url": "https://api.github.com/users/saljahmi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/saljahmi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/saljahmi/subscriptions",
  "organizations_url": "https://api.github.com/users/saljahmi/orgs",
  "repos_url": "https://api.github.com/users/saljahmi/repos",
  "events_url": "https://api.github.com/users/saljahmi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/saljahmi/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "pvaidehee",
  "id": 66982470,
  "node_id": "MDQ6VXNlcjY2OTgyNDcw",
  "avatar_url": "https://avatars3.githubusercontent.com/u/66982470?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/pvaidehee",
  "html_url": "https://github.com/pvaidehee",
  "followers_url": "https://api.github.com/users/pvaidehee/followers",
  "following_url": "https://api.github.com/users/pvaidehee/following{/other_user}",
  "gists_url": "https://api.github.com/users/pvaidehee/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/pvaidehee/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/pvaidehee/subscriptions",
  "organizations_url": "https://api.github.com/users/pvaidehee/orgs",
  "repos_url": "https://api.github.com/users/pvaidehee/repos",
  "events_url": "https://api.github.com/users/pvaidehee/events{/privacy}",
  "received_events_url": "https://api.github.com/users/pvaidehee/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "mphelps1978",
  "id": 56881040,
  "node_id": "MDQ6VXNlcjU2ODgxMDQw",
  "avatar_url": "https://avatars3.githubusercontent.com/u/56881040?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mphelps1978",
  "html_url": "https://github.com/mphelps1978",
  "followers_url": "https://api.github.com/users/mphelps1978/followers",
  "following_url": "https://api.github.com/users/mphelps1978/following{/other_user}",
  "gists_url": "https://api.github.com/users/mphelps1978/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mphelps1978/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mphelps1978/subscriptions",
  "organizations_url": "https://api.github.com/users/mphelps1978/orgs",
  "repos_url": "https://api.github.com/users/mphelps1978/repos",
  "events_url": "https://api.github.com/users/mphelps1978/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mphelps1978/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "JoelVega97",
  "id": 67379632,
  "node_id": "MDQ6VXNlcjY3Mzc5NjMy",
  "avatar_url": "https://avatars2.githubusercontent.com/u/67379632?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/JoelVega97",
  "html_url": "https://github.com/JoelVega97",
  "followers_url": "https://api.github.com/users/JoelVega97/followers",
  "following_url": "https://api.github.com/users/JoelVega97/following{/other_user}",
  "gists_url": "https://api.github.com/users/JoelVega97/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/JoelVega97/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/JoelVega97/subscriptions",
  "organizations_url": "https://api.github.com/users/JoelVega97/orgs",
  "repos_url": "https://api.github.com/users/JoelVega97/repos",
  "events_url": "https://api.github.com/users/JoelVega97/events{/privacy}",
  "received_events_url": "https://api.github.com/users/JoelVega97/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "Cory-Thomas",
  "id": 29168407,
  "node_id": "MDQ6VXNlcjI5MTY4NDA3",
  "avatar_url": "https://avatars0.githubusercontent.com/u/29168407?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Cory-Thomas",
  "html_url": "https://github.com/Cory-Thomas",
  "followers_url": "https://api.github.com/users/Cory-Thomas/followers",
  "following_url": "https://api.github.com/users/Cory-Thomas/following{/other_user}",
  "gists_url": "https://api.github.com/users/Cory-Thomas/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Cory-Thomas/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Cory-Thomas/subscriptions",
  "organizations_url": "https://api.github.com/users/Cory-Thomas/orgs",
  "repos_url": "https://api.github.com/users/Cory-Thomas/repos",
  "events_url": "https://api.github.com/users/Cory-Thomas/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Cory-Thomas/received_events",
  "type": "User",
  "site_admin": false
},
{
  "login": "maycie-morris",
  "id": 67204638,
  "node_id": "MDQ6VXNlcjY3MjA0NjM4",
  "avatar_url": "https://avatars1.githubusercontent.com/u/67204638?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/maycie-morris",
  "html_url": "https://github.com/maycie-morris",
  "followers_url": "https://api.github.com/users/maycie-morris/followers",
  "following_url": "https://api.github.com/users/maycie-morris/following{/other_user}",
  "gists_url": "https://api.github.com/users/maycie-morris/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/maycie-morris/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/maycie-morris/subscriptions",
  "organizations_url": "https://api.github.com/users/maycie-morris/orgs",
  "repos_url": "https://api.github.com/users/maycie-morris/repos",
  "events_url": "https://api.github.com/users/maycie-morris/events{/privacy}",
  "received_events_url": "https://api.github.com/users/maycie-morris/received_events",
  "type": "User",
  "site_admin": false
}];


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

function myFollowers(obj) {


const card = document.createElement('div');
card.classList.add('card')

const image = document.createElement('img');
image.src = `${obj.avatar_url}`

const cardInfo = document.createElement('div');
cardInfo.classList.add('card-info')

const name = document.createElement('h3');
name.classList.add('name')
name.textContent = `Name: ${obj.name}`

const userName = document.createElement('p');
userName.classList.add('username')
userName.textContent = `UserName: ${obj.login}`

const location = document.createElement('p');
location.textContent = `Location: ${obj.location}`

const profile = document.createElement('p');
profile.textContent = "Profile:"

const profileLink = document.createElement('a')
profileLink.href = `${obj.url}`
profileLink.textContent = `${obj.url}`

const followers = document.createElement('p')
followers.textContent = `Followers: ${obj.followers}`

const following = document.createElement('p')
following.textContent = `Following: ${obj.following}`

const bio = document.createElement('p')
bio.textContent = `Bio: ${obj.bio}`


card.append(image)
card.append(cardInfo)
cardInfo.append(name)
cardInfo.append(userName)
cardInfo.append(location)
cardInfo.append(profile)
cardInfo.append(profileLink)
cardInfo.append(followers)
cardInfo.append(following)
cardInfo.append(bio)


return card


}

const cards = document.querySelector('.cards')  
console.log(cards)

//my card

axios.get('https://api.github.com/users/fibonacci85')
.then(response  => {
cards.appendChild(myFollowers(response.data))
})

.catch(error => {
 (console.log("ERROR",error)) 
})


//followers

// axios.get('https://api.github.com/users/fibonacci85/followers')
// .then(response  => {
// cards.appendChild(myFollowers(response.data))
// })

console.log(followersArray)
followersArray.forEach(item => {
  cards.append(myFollowers(item))
})





/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
