require('isomorphic-fetch');

const userIds = [
  "linkedin|S34fr_HZMt", // sam
  "google-oauth2|105185353310588248092", // neil
  "auth0|58fea4e17aaf0b57bfa10868", // list
  "google-oauth2|106436901932826660869", // julian
  "google-oauth2|104233771172288623590", // ash
  "google-oauth2|109330708277633287686", // danielle
  "google-oauth2|106155446558891816398", // john mckim
  "google-oauth2|112046709939650429168", // dale
  "google-oauth2|113082051004004723025", // peter
  "auth0|56423a4eed40b21c524eef26", // russell
  "auth0|5872c3eea6bf4c620df2a276", // erik
  "google-oauth2|115779441025712164232", // mattias
  "google-oauth2|102119997820328928014", // drew
  "auth0|582e5b027015fdea0785c8b4", // sanjay
  "facebook|10153673857599680", // tait
  "linkedin|9k1sAi8dfa" // ryan
];
const url = 'https://prod-api.acloud.guru/bff/graphql/public';
const query = `
  query myQuery($userIds: [String!]!) {
    getUserCertificationsCount(userIds: $userIds) {
      userId
      count
    }
    getUserProfileBatch(userIds: $userIds) {
      userId
      displayname
      jobTitle
      employer
      picture
      voteSum
    }
  }
  `;
  
/////////////////////////////////////

export function getData() {

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      query: query,
      variables: { userIds: userIds },
    }),
    headers: {
      'Authorization': "''",
      'Content-Type': 'application/json',
      "Accept": "application/json"
    },
  })
    .then((response) => response.json())

}
