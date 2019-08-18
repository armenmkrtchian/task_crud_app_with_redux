import axios from 'axios'
import {
  FETCH_STORIES_START, 
  FETCH_STORIES_SUCCESS, 
  FETCH_STORIES_ERROR,

  FETCH_STORY_BY_ID_START,
  FETCH_STORY_BY_ID_SUCCESS,
  FETCH_STORY_BY_ID_ERROR,

  QUIZ_SET_STATE,
 } from './actionTypes';

export function fetchStories() {
  return async dispatch => {
    dispatch(fetchQuizesStart())
      try {
        const response = await axios.get('api/stories')
        const items = []
        const example = response.data.map((val)=> {
              return val['title']
        } )
        // console.log("Example",example)
        // console.log("response.data",response.data)

          example.forEach((item, index) => {
            items.push({
              id: index,
              title:item 
            })
          })
            dispatch(fetchQuizesSuccess(items))
              //console.log(999,items)
        } catch(e) {
            dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchQuizById(quizId) {
  return async dispatch => {
    dispatch(fetchQuizByIdStart())
    
    try {
      const response = await axios.get(`/stories/${quizId}`)
      const quiz = response.data

      dispatch(fetchQuizSuccess(quiz))
    } catch (e) {
      dispatch(fetchQuizError(e))
    }
  }
}


export function fetchQuizByIdStart(){
  return {
      type: FETCH_STORY_BY_ID_START
  }
}

export function fetchQuizSuccess(storyId) {
  return {
    type: FETCH_STORY_BY_ID_SUCCESS,
    storyId
  }
}

export function fetchQuizError(e){
  return {
    type: FETCH_STORY_BY_ID_ERROR,
    error: e
  }
}


export function fetchQuizesStart(){
  return {
      type: FETCH_STORIES_START
  }
}

export function fetchQuizesSuccess(items) {
  return {
    type: FETCH_STORIES_SUCCESS,
    items
  }
}

export function fetchQuizesError(e){
  return {
    type: FETCH_STORIES_ERROR,
    error: e
  }
}

export function quizSetState(answerState, results) {
  return {
    type: QUIZ_SET_STATE,
    answerState, results
  }
}

