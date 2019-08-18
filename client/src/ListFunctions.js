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

export const addItem = (title, description) => {
    return axios
        .post(
            '/api/stories',
            {
                title: title,
                description: description
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

export const updateItem = (title, id, description) => {
    return axios
        .put(
            `/api/stories/${id}`,
            {
                title: title,
                description: description
            },
            {
                headers: { 'Content-Type': 'application/json' }
            }
        )
        .then(function(response) {
            console.log(response)
        })
}