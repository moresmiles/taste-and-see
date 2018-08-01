export default ( state={ loading: false, beers: [] }, action ) => {
  switch( action.type ) {
    case 'LOADING_BEERS':
      return {...state, loading: true}
    case 'FETCH_BEERS':
      return {...state, beers: action.payload, loading: false}
    case 'CREATE_BEER':
      return {...state, beers: state.beers.concat(action.payload)}
    case 'DELETE_BEER':
      const newBeerState = state.beers.filter(beer => beer.id !== parseInt(action.payload, 10))
      return {...state, beers: newBeerState}
    case 'UPDATE_BEER':
      const beer = action.payload
      return {
        ...state,
          beers: state.beers.map(b => b.id === beer.id ? beer : b)
        }
    default:
      return state
    }
}
