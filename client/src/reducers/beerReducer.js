export default ( state={ loading: false, beers: [] }, action ) => {
  switch( action.type ) {
    case 'LOADING_BEERS':
      return {...state, loading: true}
    case 'FETCH_BEERS':
      return {...state, beers: action.payload, loading: false}
    case 'CREATE_BEER':
      return {...state, beers: state.beers.concat(action.payload)}
    default:
      return state
    }
}
