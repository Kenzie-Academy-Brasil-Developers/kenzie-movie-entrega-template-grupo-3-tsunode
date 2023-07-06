export const Modal = ({setIsOpen}) => {
    return(
      <>
        <h2>Avaliação</h2>
        <form action="">
          <select name="avaliação" id="">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <textarea name="" id="" cols="30" rows="10" placeholder="Deixe um comentário"></textarea>
        </form>
      
        <button onClick={() => setIsOpen(false)}>fechar</button>
      </>
      
    )
  return null;
};
