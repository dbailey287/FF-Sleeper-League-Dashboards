/*   STEP 1   */
export const leagueID = "1315037653787246592"; // your league ID
export const leagueName = "Sensitivity Training"; // your league name
export const dues = 50; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>A lively digital war room where a band of self‑proclaimed “shit‑slinging primates” debate roster moves with the confidence of seasoned GMs and the emotional volatility of fans who lost a matchup by 0.3 points. Strategy, smack talk, and questionable decision‑making collide as this chat transforms into a front‑office think tank dedicated to chasing glory, dodging injuries, and arguing over who actually invented PPR scoring.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
  {
    "roster": 1,
    "managerID": "857687668635590656",
    "name": "Crabby",
    "photo": "/managers/crabby.jpg",
  },
  {
    "roster": 2,
    "managerID": "857685649849991168",
    "name": "Wankers",
    "photo": "/managers/wankers.jpg",
  },
  {
    "roster": 3,
    "managerID": "76752500291944448",
    "name": "DB",
    "photo": "/managers/db.jpg",
  },
  {
    "roster": 4,
    "managerID": "857696204497223680",
    "name": "Catfish",
    "photo": "/managers/catfish.jpg",
  },
  {
    "roster": 5,
    "managerID": "857718362388692992",
    "name": "Luber",
    "photo": "/managers/luber.jpg",
  },
  {
    "roster": 6,
    "managerID": "857805033264263168",
    "name": "Brant",
    "photo": "/managers/brant.jpg",
  },
  {
    "roster": 7,
    "managerID": "574435746138640384",
    "name": "Courtney",
    "photo": "/managers/courtney.jpg",
  },
  {
    "roster": 8,
    "managerID": "1389027328994062336",
    "name": "Tom",
    "photo": "/managers/tom.jpg",
  },
  {
    "roster": 9,
    "managerID": "857705507442540544",
    "name": "Sidney",
    "photo": "/managers/sidney.jpg",
  },
  {
    "roster": 10,
    "managerID": "998397666298085376",
    "name": "Steve",
    "photo": "/managers/steve.jpg",
  },
]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    