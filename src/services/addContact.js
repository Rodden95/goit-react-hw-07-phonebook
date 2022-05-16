export default function addContact(id, name, phone) {
  
  return fetch('https://620eeca5ec8b2ee2832efb48.mockapi.io/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  })
}