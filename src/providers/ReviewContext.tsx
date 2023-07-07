import { ReactNode, createContext, useContext } from "react";
import { api } from "../services/api";
import { MovieContext } from "./MovieContext";



interface ReviewProviderProps {
    children: ReactNode;
}

interface IReviewContext{
  createReview: (formData: any) => Promise<void>;
  attReview: (formData: any, reviewId: any) => Promise<void>;
  deleteReview: (reviewId: any) => Promise<void>
}

export const ReviewContext = createContext({} as IReviewContext);

export const ReviewProvider = ({ children }: ReviewProviderProps) => {
  
const { setReviews, reviews } = useContext(MovieContext)

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
        const { data } = await api.post(
          `/reviews`,
          {
            movieId: localMovieId,
            userId: userId,
            description: formData.description,
            score: Number(formData.score),
          },
          header
        );
        setReviews(() => [...reviews, data])
        console.log('Sucesso');
      } catch (error) {
        console.log(error);
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
        value={{
          createReview,
          attReview,
          deleteReview
        }}
      >
        {children}
      </ReviewContext.Provider>
    );
  };