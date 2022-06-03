const express = require( "express" );
const app = express();
const port = 8080; // default port to listen
let users=[
    {
        name:"Elvin",
        surname:"Aliyev",
        age:21
    },
    {
        name:'Gazanfer',
        surname:'Gazanferli',
        age:25
    },
    {
        name:"Aqil",
        surname:"Atakishiyev",
        age:23
    },
    {
        name:'Vusal',
        surname:'Mammadli',
        age:21
    },
    {
        name:"Ülvi",
        surname:"Aliyev",
        age:19
    },
    {
        name:'Ömər',
        surname:'Bashirzada',
        age:21
    }
]
// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );
app.get('/card', function (req, res) {
    res.send('You send request for card route!');
});
app.get('/client', function (req, res) {
    res.send('You send request for client route!');
});
app.get('/users', function (req, res) {
    res.send(
        users.map((user)=>{
            return user
        })
    );
});
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );