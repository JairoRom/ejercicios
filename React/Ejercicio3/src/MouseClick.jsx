
function MouseClick() {
    function handleButtonClick(event) {
        if(event.target.tagName ==='BUTTON'){
            console.log(event.currentTarget.name);
        }
    }
    function handleImgClick(event) {
        console.log(event.currentTarget.src);
        
    }
    return (
    <div>
        <button name='One' onClick={handleButtonClick}>
        Click
        <img src="https://http.cat/images/102.jpg" alt="Image" width={20} height={20} onClick={handleImgClick} />
        </button>
        <button name='Two' onClick={handleButtonClick}>
        <img src="https://http.cat/images/102.jpg" alt="Image" width={20} height={20} onClick={handleImgClick} />
        Click
        </button>
    </div>
  )
}

export default MouseClick