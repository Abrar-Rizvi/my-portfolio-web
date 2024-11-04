

const Form = () => {
  return (
    <div className="container  rounded shadow-lg  shadow-slate-950 min-w-full mx-auto bg-[#3D5300] 
     text-black flex flex-col items-center  p-4 py-48 ">
    <h2 className="text-center text-5xl font-bold text-white">Contact Us</h2>
    <form action="" className="p-10 mt-5 w-[80%] lg:w-[100%] bg-[#d1d5db] rounded">
     
      <label  htmlFor="name ">Name:</label> <br />
       <input className="mb-5 p-2 w-full rounded" type="text" id="name" /> <br />

       <label htmlFor="phone">Phone no:</label> <br />
       <input  className=" mb-5 p-2 w-full  rounded" type="phone" id="phone" /> <br />

       <label htmlFor="contact">Contact:</label><br />
       <input  className="mb-5  p-2 w-full  rounded" type="contact" id="contact "  /> <br />
   

      
       <div className="w-full mt-5 text-black bg-white hover:bg-blue-600 rounded-md hover:text-white text-xl font-bold flex justify-center items-center ">  
       <input  className="p-3  rounded m-auto   w-full" type="submit"  /></div>



    </form>
   
</div>
  )
}

export default Form