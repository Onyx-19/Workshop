 const createGet = async () => {
        const update = {
            title: 'A blog post by Kingsley', // ejemplo de data que pueden pasar
            body: 'Brilliant post on fetch API', // ejemplo de data que pueden pasar
            userId: 1, // este como los otros dos de arriba solo son ejemplo de data que pueden pasar
            };
            // la constante update es lo que recivo que me la data de moddo ejemplo si fuera post esos quiero decir que abajo cunao sea post envia la linea 12
            const options = {
            method: 'GET', // aca cambian el metodo que quieran pasar
            headers: {
            'Content-Type': 'application/json', // para pasar la data tipo json
            },
            body: JSON.stringify(update), // envian los datos en parametros hacia la peticion en caso del get no es necesario lo coloco solo de ejemplo 
            }; // el JSON.stringify lo que hace es convertmir los parametros en josn
            const url = "https://jsonplaceholder.typicode.com/users"

            const response =   await fetch(url, {options}).then(response => {
               console.log('response >>> ', response)  // handle the response
            })
            .catch(error => {
               console.log('err >>> ', error)  // handle the error
            });

     console.log('response >>> ', response)
    }
   
