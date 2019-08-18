import {CREATE_STORY, RESET_STORY_CREATION} from '../actions/actionTypes';
const initialState = {
    id: '',
    title: '',
    description: '',
    items: []
}

export default function createReducer(state = initialState, action) {
    switch (action.type) {
      case CREATE_STORY:
        return {
          ...state,
          items: [...state.items, action.item]
        }
        case RESET_STORY_CREATION: 
        return {
          ...state, items: []
        }
      default: 
        return state
      }
  }


