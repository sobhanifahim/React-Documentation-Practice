function Button({onClick,children}){
    return(
     <button onClick={e=>{e.stopPropagation();
     onClick();}}>
       {children}
     </button>

    );
}


export default function Toolbar(){
    return(
     <div className='toolbar' onClick={()=>{alert('You have clicked on the toolbar')}}>
      <Button onClick={()=>{alert('Playing')}}>
        Play Button 
      </Button>
      <Button onClick={()=>{alert('Uploading')}}>
       Upload Button
      </Button>
     </div>
    );
}