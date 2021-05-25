export const typeActions = {
  SET_LICENSE_PLATE: 'SET_LICENSE_PLATE',
  SET_USER: 'SET_USER'
}

export const setLicensePlate = (licensePlate) => ({
  type: typeActions.SET_LICENSE_PLATE,
  payload: { licensePlate }
})

const setUser = (user) => ({
  type: typeActions.SET_USER,
  payload: { user }
})

export const fetchUser = async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const user = await response.json()
  dispatch(setUser(user))
}
