const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
 
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = search.value

  fetch(`/weather?address=${location}`)
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        console.log(data.error)
      } else {
        console.log(data.location, data.forecast)
      }
    })
})