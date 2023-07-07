import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { MovieContext } from "../../providers/MovieContext";
import { ReviewContext } from "../../providers/ReviewContext";
import { useForm } from 'react-hook-form';

export const ModalAtt = () => {
  
  const { register, handleSubmit } = useForm<FormData>({});
  
    const {setIsOpenAtt} = useContext(UserContext)  
    const { userReviewId } = useContext(MovieContext)

    const { attReview } = useContext(ReviewContext)

    interface FormData {
      score: number;
      description: string;
    }
  
    const submit = (formData: FormData) => {
      attReview(formData)
    }
  
  return(
      <>
        <h2>Editar</h2>
        <button onClick={() => {console.log(userReviewId)}} > review</button>
        <form onSubmit={handleSubmit(submit)} action="">
          <select  id="" {...register('score')}>
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
          <textarea  id="" cols="30" rows="10" placeholder="Deixe um comentário" {...register('description')}></textarea>
          <button type="submit">editar</button>
        </form>
      
        <button onClick={() => setIsOpenAtt(false)}>fechar</button>
      </>
      
    )
};