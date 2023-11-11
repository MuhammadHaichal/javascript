import express from 'express'




// intialisasi
const app = express()
const port = 3000

const endpoint = "https://reqres.in/api/users"


// untuk penggunaan fetching 
// fetch(endpoint)
//     .then(( result ) => result.json())
//     .then(({ data }) => console.log(data))
//     .catch('upps data not found') 


async function HitApi() {

  const api = await fetch(endpoint)
  app.get('/', async (req, res) => {

    if (api.statusText === 'OK') {
      console.log('data found and is result')
      const { data } = await api.json()
      res.send(data)
      // data.map((item) => {
      //   console.log({ id: item.id })
      //   console.log({ first_name: item.first_name })
      //   console.log({ last_name: item.last_name })
      //   console.log({ avatar: item.avatar })
      // })
    } else {
       res.send('data not found or url wrong')
    }
  })

  app.post



  // if (api.statusText === 'OK') {
  //   console.log('data found and is result')
  //   const { data } = await api.json()

  //   data.map((item) => {
  //     console.log({ id: item.id })
  //     console.log({ first_name: item.first_name })
  //     console.log({ last_name: item.last_name })
  //     console.log({ avatar: item.avatar })
  //   })
  // } else {
  //   console.log('data not found or url wrong')
  // }

}


HitApi()



app.listen(port, () => {
  console.log(`server berjalan di localhost:${port}`)
}) 
