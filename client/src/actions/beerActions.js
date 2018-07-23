import fetch from 'isomorphic-fetch';

const API_URL = "http://localhost:3001"

export function fetchBeers() {
    return (dispatch) => {
        dispatch({type: 'LOADING_BEERS'})
        return fetch(`${API_URL}/beers.json`)
        .then(response => response.json())
        .then(beers => dispatch({ type: 'FETCH_BEERS', payload: beers }));
    }
}

export function createBeer(beerDetails) {
    return dispatch => {
        return fetch(`${API_URL}/beers`, {
            method: 'POST',
            body: JSON.stringify({beer: beerDetails}),
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(resp => resp.json())
            .then(jresp => {
                dispatch({
                    type: 'CREATE_BEER',
                    payload: jresp
                })
            })
            .catch((errors) => {
                console.log(errors)
            })
    }
}
export function deleteBeer(beerId) {
    return dispatch => {
        return fetch(`${API_URL}/beers/${beerId}`, {
            method: 'DELETE',
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(() => {
                dispatch({
                    type: 'DELETE_BEER',
                    payload: beerId
                })
            })
            .catch((errors) => {
                console.log(errors)
            })
    }
}
