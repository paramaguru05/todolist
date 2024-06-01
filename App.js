import React,{useState,useEffect} from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
const App = () => {
const [listItems,setListItems]=useState([])
const [item,setItem]=useState("")
useEffect(()=>{
   setListItems(JSON.parse(localStorage.getItem("items")))

},[])
const featchData=async()=>{
  try{
    let respons=await fetch('http://localhost:3500/listItems')
    if(!respons.ok) throw Error("Data not resived")
    let data=await respons.json()
  console.log(data[0].item)

  }catch(err){
    console.log(err.message)
  }
}

featchData()
function addItem(){
  if(item!==""){
    let ids=listItems.length
    let todo={ids,item}
    setListItems(listItems.concat(todo))
    localStorage.setItem("items",JSON.stringify(listItems))
    console.log(listItems)
    setItem("")
  }
}
function handleDelete(id){
  let deletedItem=listItems.filter((val,index)=>id!==index)
  console.log(deletedItem)
  setListItems(deletedItem)
  localStorage.setItem("items",JSON.stringify(deletedItem))
}
  return (
    <section className='p-1 sm:p2 rounded-lg ' >
        <div className=' h-screen container mx-auto z-20 bg-purple-100 pt-5'>
            <Header
            title={"TO DO LIST"}
            item={item}
            setItem={setItem}
            addItem={addItem}
            />
            <Content
            listItems={listItems.reverse()}
            handleDelete={handleDelete}/>                   
            <Footer
            length={listItems.length}/>
        </div>
    </section>
  )
}
export default App