export default function role(state = '', action) {
  switch (action.type) {
    case 'ROLE-SET':
      return {
        ...state,
      role : state.role}
    default:
      return state
  }
}

