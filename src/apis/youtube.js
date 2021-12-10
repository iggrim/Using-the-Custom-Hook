import axios from "axios";

//const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";
const KEY = "AIzaSyAiu-pYktVd4-0CQ4w2iMvc5lhUOfTm8b0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
