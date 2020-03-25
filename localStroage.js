const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');
const userId = 'u123';
const user = {
    name: 'Max',
    age: 30,
    hobbies: ["Sports", "Cooking"]
}
storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uid',userId);
    localStorage.setItem('user',JSON.stringify(user));

});
retrBtn.addEventListener('click', () => {
    const extractId = sessionStorage.getItem('uid');
    const extractUser= JSON.parse(localStorage.getItem('user'));
    console.log(extractUser);
    extractId?console.log('Get the id - ' + extractId): console.log('Could not find it.')
});