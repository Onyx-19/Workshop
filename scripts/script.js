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
   
// Insersion de datos en el formulario

const getData = async(id)=>{
   const resp = await fetch(id)
   const data = await resp.json()
   console.log(data)
   return data
   }

const form = document.getElementById('formUser')
const urlUser ="http://localhost:4000/usuarios/"


form.addEventListener('submit', async(e)=>{
   e.preventDefault()

   let nombre = document.getElementById("nombre").value;
   let apellido = document.getElementById("apellido").value;
   let correo = document.getElementById("correo").value;
   let contraseña = document.getElementById("contraseña").value;
   const objetoUsuario = {nombre, apellido, correo, contraseña }

   await fetch(urlUser,{
       method: 'POST',
       body: JSON.stringify(objetoUsuario),
       headers:{
           "Content-Type": "application/json; charset=utf-8"
       } 
   })

   alert("Bienvenido " + nombre + ", el usuario se ha agregado correctamente.")
   console.log(objetoUsuario);    
})


