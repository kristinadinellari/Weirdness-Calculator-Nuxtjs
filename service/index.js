import axios from 'axios'

export default {
  get (name) {
    return axios.get(`http://api.giphy.com/v1/gifs/search?api_key=fEoiWDnP8fCJs2kzwe0rB0XQIUcKDK2q&q=${name}&limit=20`)
  }
}
