const hasuraAuthHeader: any = 'XdNjwS3pLvbM0CkQTFVsFu0YVq0nFX0RIR24yRKdvaEePkqqltkd7t6r9e7l7OQA'
const hasuraURL: any = 'https://zeeds-backend.hasura.app/v1/graphql'
// Fetch number
export default async function getFavoriteNumber(email: String) : Promise<number> {
  try {
    let results = await fetch(hasuraURL, {
      method: 'POST',
      headers: new Headers({
        'x-hasura-admin-secret':hasuraAuthHeader,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        query: ` {
            favorite_number(where: {user_id: {_eq: "`+ email + `"}}) {
                fav_number
              }
        }`,
      }),
    });
    let result = await results.json();
    let favNumber =  result.data.favorite_number[0].fav_number;
    return favNumber;
  } catch (error) {
    alert(error);
    return 0;
  }
}


export async function updateNumber(email: String, number: number) {
  try {
  let results = await fetch(hasuraURL, {
    method: 'POST',
    headers: new Headers({
      'x-hasura-admin-secret':hasuraAuthHeader,
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({
      query: ` mutation {
        insert_favorite_number(objects: {fav_number: "${number}", user_id: "`+email+ `"}, on_conflict: {constraint: favorite_number_pkey, update_columns: fav_number}) {
          returning {
            fav_number
          }
        }
      }`,
    }),
  })
  return await results.json()
} catch (error) {
  alert(error);
  return 0;
}
}
