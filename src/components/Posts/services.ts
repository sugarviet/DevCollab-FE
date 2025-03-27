import moment from "moment";
import axios from "axios";

export function timeSince(postDate: string): string {
  return moment(postDate).fromNow();
}

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async(code: string) => {
  const response = await API.post('/execute', {
    "language": "js",
    "version": "18.15.0",
    "files": [
      {
        "content": code
      }
    ]
  })

  return response.data;
}