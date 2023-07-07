import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';
import { ReviewContext } from '../../providers/ReviewContext';
import { useForm } from 'react-hook-form';

export const ModalDelete = () => {
  const { setIsOpenDelete } = useContext(UserContext);

  const { deleteReview } = useContext(ReviewContext);

  const { handleSubmit } = useForm<FormData>({});

  const submit = () => {
    console.log('2');
    deleteReview();
    setIsOpenDelete(false);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <button type="submit">deletar</button>
      <button
        type="button"
        onClick={() => {
          setIsOpenDelete(false);
        }}
      >
        sair
      </button>
    </form>
  );
};
