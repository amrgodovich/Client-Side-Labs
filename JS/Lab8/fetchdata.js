export default class DataFetcher {
  async getUser(id) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const jsss= await data.json()
    return jsss;
  }
}