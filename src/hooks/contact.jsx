import axios from "axios";
import { API_URL } from "../const";

export default function contactForm(name, email, subject, msg) {
  axios
    .post(`${API_URL}/api-urls/contact/`, {
      name,
      email,
      subject,
      msg,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
