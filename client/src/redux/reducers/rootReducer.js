import {combineReducers} from 'redux'
import storyReducer from './stories'
import createStoryReducer from './createStory'

export default combineReducers({
    storiesList: storyReducer,
    createReducer: createStoryReducer
})