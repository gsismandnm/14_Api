//API -- aplication program interface

// aradaki iletişim JSON veya XML ile sağlanmaktadır.
// JSON = JavaScript Object Notation.

//örnek json

const json = {
    "adi":"Murat",
    "yasi":25,
    "evlimi": true
}

/* JSON içerisinde veriler nasıl saklanır.
    String
    Number
    Array
    Obj
    Boolean (true, false) yazılabilir.

 https://jsonplaceholder.typicode.com/ sitesinde örnek datalar mevcuttur. 
 Buradaki datalar örnek olarak kullanılabilir.
*/ 

/* CRUD
    işlem                   api        sql
    Create (Oluşturma)      post      insert into
    Read (Okuma)            get       select 
    Update (Değiştirme)     put       update
    Delete (Silme)          delete    delete
*/


/*alttaki şekilde yazıldığında adresteki datayı alır.
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(json))
*/

//Read (okuma) get  için örnek:
const users = axios.get (fetch('https://jsonplaceholder.typicode.com/users/');

users.than (responce => console.log(responce));

//Creat yani post için örnek:
const yeniKayit = axios.post(fetch('https://jsonplaceholder.typicode.com/todos/',
    {
        "userId": 1,
        "title": "new todo",
        "completed": true
    }
);

yeniKayit.then(responce => console.log(responce));
console.log(yeniKayit)

//Update yani put için örnek:
const kayitDegis = axios.put(fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        "userId": 4,
        "title": "delectus aut autem",
        "completed": false
    }
);

kayitDegis.then(responce => console.log(responce));
console.log(kayitDegis)

//Delete yani delete için örnek:
const kayitSil = axios.delete(fetch('https://jsonplaceholder.typicode.com/todos/1');

kayitSil.then(responce => console.log(responce));
console.log(kayitSil)


sql
*/


// fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(response => response.json())
//     .then(json => console.log(json))


// const users = axios.get('https://jsonplaceholder.typicode.com/users/');

// users.then(response => console.log(response));


// const yeniKayit = axios.post('https://jsonplaceholder.typicode.com/todos/',
//     {
//         "userId": 10,
//         "title": "yeni todo",
//         "completed": true
//     }
// );

// yeniKayit.then(response => console.log(response));

// console.log(yeniKayit)


// const kayitDegistir = axios.put('https://jsonplaceholder.typicode.com/todos/1',
//     {
//         "userId": 4,
//         "title": "degistirildi",
//         "completed": true
//     }
// );

// kayitDegistir.then(response => console.log(response));


// const kayitSil = axios.delete('https://jsonplaceholder.typicode.com/todos/1');

// kayitSil.then(response => console.log(response));


const kayitKismenDegistir = axios.patch('https://jsonplaceholder.typicode.com/todos/1',
    {
        "title": "kismen degistirildi",
    }
);

kayitKismenDegistir.then(response => console.log(response));