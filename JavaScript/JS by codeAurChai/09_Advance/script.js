const requestURL = 'https://api.github.com/users/nishfit'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestURL)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        console.log(typeof data);
        console.log(data.followers);
        console.log(data.company);

    }
    
}
xhr.send();
console.log('hello');