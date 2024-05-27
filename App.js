import React,{useState,useEffect} from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
const App = () => {
const [listItems,setListItems]=useState([])
const [item,setItem]=useState("")
let lists=JSON.parse(localStorage.getItem("items"))
useEffect(()=>{
   setListItems(lists)
},[])
console.log(lists)
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
            listItems={listItems}
            handleDelete={handleDelete}/>                   
            <Footer
            length={listItems.length}/>
        </div>
    </section>
  )
}
export default App