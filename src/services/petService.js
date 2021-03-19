export const getAll = (category = '') => {
    let url = 'http://localhost:5000/pets'
    url += (category && category!='all') ?  `?category=${category}` : ''

   return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}
