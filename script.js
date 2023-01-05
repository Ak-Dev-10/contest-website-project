let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v)=>{
  return v.json()
}).then((contests)=>{
  console.log(contests)
  ihtml=""
  for(item in contests){
    console.log(contests[item])
  }
})