import axios from 'axios';
const url = "https://event-booking-app-sheffield.herokuapp.com/event"

export class ApiClient {
    apiCall(method, url, data) {
        return axios({
            method,
            url,
            data,
        }).catch((error) => {
            throw error;
        })
    }
    getEvents() {
        return this.apiCall("get", url)        
    }

    addEvent(name, type, description, date, location) {
        return this.apiCall("post", `${url}/create`, { name, type, description, date, location })
    }

    removeEvent(_id) {
        return this.apiCall("delete", `${url}/${_id}`)
    }

    updateEvent(_id, name, type, description, date, location) {
        console.log(_id)
        return this.apiCall("put", `${url}/${_id}`, { name, type, description, date, location })
    }

}

