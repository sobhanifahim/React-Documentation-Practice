

function Alertbutton({message,children}){
    return (
      <button onClick= {()=>{
        alert(message)
      }}>
          {children}
      </button>
    );
}




export default function Toolbar(){
return (
    <>
   <Alertbutton message={"Playing Music"}>
     Music 
   </Alertbutton>
   <Alertbutton message={"Uploading"}>
    Upload
   </Alertbutton>
   </>
);
}