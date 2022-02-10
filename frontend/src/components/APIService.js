const API_URL = process.env.REACT_APP_API_URL || '/api'


export default class APIService {
  static UpdateArticle(id, body) {
    return fetch(`${API_URL}/advertisement?id=${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static InsertArticle(body) {
    return fetch(`${API_URL}/advertisement`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json())
        .catch((error) => console.log(error))
  }

  static DeleteArticle(id) {
    return fetch(`${API_URL}/advertisement?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
