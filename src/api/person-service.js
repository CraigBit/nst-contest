export class PersonService {
  _apiBase = 'http://localhost:3001/api/v1';
  _defaultHeaders = {
    'Content-Type': 'application/json',
  };

  async request({ url, method = 'GET', headers = {}, ...options }) {
    const response = await fetch(`${this._apiBase}${url}`, {
      method,
      headers: { ...this._defaultHeaders, ...headers },
      ...options,
    });

    if (!response.ok) {
      throw new Error('Data fetch error');
    }

    return await response.json();
  }

  getPersons() {
    return this.request({ url: `/persons` });
  }

  getPerson(id) {
    return this.request({ url: `/person/${id}` });
  }

  deletePerson(id) {
    return this.request({
      url: `/person/${id}`,
      method: 'DELETE',
    });
  }

  createPerson(data) {
    return this.request({
      url: `/persons`,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  editPerson(data, id) {
    return this.request({
      url: `/person/${id}`,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}
