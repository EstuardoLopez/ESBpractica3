module.exports  = {
    urlAdmin :"http://127.0.0.1:3000",
    urlUser: "http://127.0.0.1:3001",
    urlEditorial: "http://127.0.0.1:3005",
    root : {
        host: 'http://0.0.0.0',
        //host: 'http://localhost',
        puerto: '3010',
    },
    services : {
        admin: {
            raiz:  '/',
            registro : '/Users/'
        },
        user : {
            raiz: '/',
            login: '/login/',
            registro: '/crearusuario'
        },
        editorial : {
            raiz: '/',
            obtenerLibros: '/libro/get-libros',
            insertarLibro: '/libro/crear-libro'
        }
    }
}