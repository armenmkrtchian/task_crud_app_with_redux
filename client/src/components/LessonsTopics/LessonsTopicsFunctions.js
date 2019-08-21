import axios from 'axios'

export const getList = () => {
    return axios
        .get('/api/stories', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        })
}

export const addItem = (lessons, topics, link) => {
    return axios
        .post(
            '/api/stories',
            {
                lessons: lessons,
                topics: topics,
                link: link,
                
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            
            console.log(response)
        })
}

export const deleteItem = id => {
    axios
        .delete(`/api/stories/${id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}

export const updateItem = (lessons, id, topics, link) => {
    return axios
        .put(
            `/api/stories/${id}`,
            {
                lessons: lessons,
                topics: topics,
                link: link,
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}