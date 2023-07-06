import { ReactNode, createContext } from "react";
import { api } from "../services/api";

export const ReviewContext = createContext({});

interface ReviewProviderProps {
    children: ReactNode;
}


export const ReviewProvider = ({ children }: ReviewProviderProps) => {
    
const localMovieId = localStorage.getItem('@LOCALMOVEID')

const token = localStorage.getItem('@TOKEN')

const userId = localStorage.getItem('@USERID')

const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };




const createReview = async (formData) => {
    try {
        await api.post(
          `/reviews`,
          {
            movieId: localMovieId,
            userId: userId,
            description: formData.description,
            score: Number(formData.score),
          },
          header
        );
        console.log('Sucesso');
      } catch (error) {
        console.log(error);
      } finally {
        location.reload();
      }
};


const attReview = async (formData,reviewId) => {
    try {
        await api.put(
          `/reviews/${reviewId}`,
          {
            movieId: localMovieId,
            userId: userId,
            description: formData.description,
            score: Number(formData.score),
          },
          header
        );
        console.log('Sucesso');
      } catch (error) {
        console.log(error);
      } finally {
        location.reload();
      }
};

const deleteReview = async (reviewId) => {
    try {
        await api.delete(
          `/reviews/${reviewId}`,
          header
        );
        console.log('Sucesso');
      } catch (error) {
        console.log(error);
      } finally {
        location.reload();
      }
}
  
    return (
      <ReviewContext.Provider
        value={{createReview}}
      >
        {children}
      </ReviewContext.Provider>
    );
  };