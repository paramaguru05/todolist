import React,{useState,useEffect} from 'react'
import Header from './Header'
import Content from './Content'
// import apirequest from './apirequest'
import api from './api/item'

const App = () => {
// const API_URL="http://localhost:3500/listItems"
const [listItems,setListItems]=useState([])
const [item,setItem]=useState("")
useEffect(()=>{
   async function featchData(){
    try{
      let respons= await api.get('/listItems')
      setListItems(respons.data)

    }catch(err){
      console.log(err.Message)
    }
   }
   (async()=>await featchData())()
},[])
function handleChecked(id){
  console.log(typeof(id))
}
async function addItem(){
  try{
    let id=null
    let todo=null
    if(item!==""){
      id=listItems.length
      todo={id,item}
       await api.post('/listItems',todo)
      setListItems(listItems.concat(todo))
      console.log(listItems)
      setItem("")
    }

  }catch(err){
    console.log(err.message)
  }
}
async function handleDelete(id){
  let deletedItem=listItems.filter((val,index)=>id!==index)
  setListItems(deletedItem)
  try{
    await api.delete(`listItems/${id}`)

  }catch(err){
    console.log(err.message)
  }
} 
  return (
    <section className='p-2 ' >
        <div className=' h-screen relative container mx-auto z-20 bg-purple-100 pt-5 rounded-2xl'>
            <Header
            title={"TO DO LIST"}
            item={item}
            setItem={setItem}
            addItem={addItem}
            />
            <Content
            listItems={listItems}
            handleDelete={handleDelete}
            handleChecked={handleChecked}/>
                               
            
        </div>
    </section>
  )
}
export default App