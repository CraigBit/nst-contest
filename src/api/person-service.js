export class PersonService {
  static async getPersons() {
    const url = `http://localhost:3001/api/v1/persons`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  static async getPersonsById(id) {
    const url = `http://localhost:3001/api/v1/person/${id}`;
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

  static async createPerson(data) {
    const url = `http://localhost:3001/api/v1/persons`;
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  static async editPerson(data, id) {
    const url = `http://localhost:3001/api/v1/person/${id}`;
    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  static async deletePerson(id) {
    const url = `http://localhost:3001/api/v1/person/${id}`;
    await fetch(url, {
      method: 'DELETE',
    });
  }
}
