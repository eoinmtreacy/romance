export default function NavButton({ direction, current, setCurrent, blob, quiz, setQuiz, urlArr}) {
    let label = direction ? ">" : "<";
    
    function handleClick()
    {
      
      if (direction === true && current < blob.length - 1 && current < urlArr.length - 1) 
      {
          setCurrent(current + 1)
          if (quiz == true)
          {
            setQuiz(false)
          }
      } else if (direction === false && current > 0)
              {
                setCurrent(current - 1)
                if (quiz == true)
                {
                  setQuiz(false)
                }
              }
    } 

    return <button
    onClick={handleClick}
    className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 transition-all px-3 py-2"
  >
    {label}
  </button>
  
  
  
  ;
  }
  