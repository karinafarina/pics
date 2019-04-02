import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6a59fbda1b739263bfc6d171642963354cab3d082ccc04d3ac2ccab209f3a62b'
  }
});
