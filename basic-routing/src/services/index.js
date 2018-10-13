export const data = [
  {
    id: 1,
    name: 'Arsalan',
    class: 'A'
  },
  {
    id: 2,
    name: 'Tahir',
    class: 'A'
  },
  {
    id: 3,
    name: 'Waseem',
    class: 'A'
  }
];

export function SaveUserData(obj) {
  const url = 'http://requestbin.fullcontact.com/qlotfyql';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  };
  /**
     * @param fetch(url, {
     * method: 'GET' || 'POST' || 'PUT' || 'DELETE',
     * headers: {
     * 'Accept': 'application/json',
            'Content-Type': 'application/json',
     *  },
     * body: JSON.stringify(data)
     * })
     */
  return fetch(url, options);
}
