const SET_AUTH = 'SET_AUTH';

let initialState = {
  id: null,
  name: null,
  randomId: null,
  secret: null,
  isAuth: false 
}

const authReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_AUTH: {
      return { 
        ...state,
        ...action.data
      }
    }

    default: {
      return state;
    }
  }
}

export const setUserAC = (id, name, randomId, secret, isAuth) => ({type: SET_AUTH, data: {id, name, randomId, secret, isAuth}})

export default authReducer;