const BASE_URL = 'https://swapi.dev/api/'

// get all the starships resources

export function getStarShips() {
    return fetch(BASE_URL + 'starships/').then(res => res.json()); 
}

export async function getAllPilots(urls) {
    const promises = urls.map(url => fetch(url).then(res => res.json()));
    const pilotObjects = await Promise.all(promises);
    return pilotObjects;
}