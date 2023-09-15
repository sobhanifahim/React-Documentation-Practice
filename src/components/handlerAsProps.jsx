function Button({onClick,children}){
   return (
    <button onClick={onClick}>
      {children}
    </button>
   );
}
function PlayButton({movieName}){
    function handleClick(){
        alert(`Playing ${movieName}`)
    }
   return(
    <Button onClick={handleClick}>
     Playing "{movieName}"
    </Button>
   )
}
function UploadButton(){
    return(
        <Button  onClick={()=>{alert('Uploading')}}>
           Upload Button
        </Button>
    )
}

export default function Toolbar(){
    return(
    <>
    <PlayButton movieName={'Jawan'}></PlayButton>
    <UploadButton></UploadButton>
    </>
    );
}