export default ( state={ loading: false, beers: [] }, action ) => {
  switch( action.type ) {
    case 'CREATE_BEER':
      return {...state, beers: state.beers.concat(action.payload)}
    default:
      return state
    }
}
