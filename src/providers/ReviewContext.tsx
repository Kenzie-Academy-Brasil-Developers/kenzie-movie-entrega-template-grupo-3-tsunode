import { ReactNode, createContext, useContext } from 'react';
import { api } from '../services/api';
import { MovieContext } from './MovieContext';
import { UserContext } from './UserContext';

interface ReviewProviderProps {
  children: ReactNode;
}

interface IReviewContext {
  createReview: (formData: any) => Promise<void>;
  attReview: (formData: any) => Promise<void>;
  deleteReview: () => Promise<void>;
}

export const ReviewContext = createContext({} as IReviewContext);

export const ReviewProvider = ({ children }: ReviewProviderProps) => {
  const { setReviews, reviews, userReviewId } = useContext(MovieContext);

  const { setIsOpenAtt } = useContext(UserContext);

  const localMovieId = localStorage.getItem('@LOCALMOVIEID');

  const token = localStorage.getItem('@TOKEN');

  const userId = localStorage.getItem('@USERID');

  const header = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const createReview = async (formData:any) => {
    try {
      const { data } = await api.post(
        `/reviews`,
        {
          movieId: Number(localMovieId),
          userId: Number(userId),
          description: formData.description,
          score: Number(formData.score),
        },
        header
      );
      setReviews(() => [...reviews, data]);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  const attReview = async (formData:any) => {
    try {
      await api.put(
        `/reviews/${userReviewId}`,
        {
          movieId: Number(localMovieId),
          userId: Number(userId),
          description: formData.description,
          score: Number(formData.score),
        },
        header
      );
      const reviewsAtualizado = reviews.find((item) => item.id == userReviewId);
      reviewsAtualizado!.score = formData.score;
      reviewsAtualizado!.description = formData.description;
      setReviews(() => [...reviews]);
      setIsOpenAtt(false);
    } catch (error) {
      console.log(error);
    }finally {
      window.location.reload();
    }
  };

  const deleteReview = async () => {
    try {
      await api.delete(`/reviews/${userReviewId}`, header);
    } catch (error) {
      console.log(error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        createReview,
        attReview,
        deleteReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
