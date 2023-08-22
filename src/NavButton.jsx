export default function NavButton({ direction, current, setCurrent, blob, quiz, setQuiz }) {
    let label = direction ? ">" : "<";
    
    function handleClick()
    {
      
      if (direction === true && current < blob.length - 1) 
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

    return <button onClick={handleClick}>{label}</button>;
  }
  