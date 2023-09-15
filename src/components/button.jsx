export default function Button(){
    function handleClick(){
        alert('You have Clicked me!')
    }
    return (
     <div>
        <button onClick={handleClick}>
          Click me
        </button>
     </div>
    );
}