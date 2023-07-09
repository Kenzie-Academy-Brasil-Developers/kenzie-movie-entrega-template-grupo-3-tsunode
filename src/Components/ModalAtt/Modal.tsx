import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../providers/UserContext";
import { MovieContext } from "../../providers/MovieContext";
import { ReviewContext } from "../../providers/ReviewContext";
import { useForm } from "react-hook-form";
import { StyledModalOverlay } from "../../styles/Overlay";
import { CloseModal, StyledModalForm, StyledModalTitle } from "../Modal/ModalStyle";
import { Title2 } from "../../styles/Typography";
import { StyledSelect, StyledTextArea } from "../../styles/Inputs";
import { SmallYellowButton } from "../../styles/Buttons";

export const ModalAtt = () => {
  const { register, handleSubmit } = useForm<FormData>({});

  const { setIsOpenAtt } = useContext(UserContext);
  const { userReviewId } = useContext(MovieContext);
  const { attReview } = useContext(ReviewContext);

  const modalClose = useRef(null);

  useEffect(() => {
    const ClickOut = (e: any) => {
      if (!modalClose.current?.contains(e.target)) {
        setIsOpenAtt(false);
      }
    };
    window.addEventListener("mousedown", ClickOut);
    return () => {
      window.removeEventListener("mousedown", ClickOut);
    };
  }, []);

  useEffect(() => {
    const PressOut = (e: any) => {
      if (e.key === "Escape") {
        setIsOpenAtt(false);
      }
    };
    window.addEventListener("keydown", PressOut);

    return () => {
      window.removeEventListener("keydown", PressOut);
    };
  }, []);

  interface FormData {
    score: number;
    description: string;
  }

  const submit = (formData: FormData) => {
    attReview(formData);
  };

  return (
    <StyledModalOverlay>
      <StyledModalForm onSubmit={handleSubmit(submit)} ref={modalClose} >
        <StyledModalTitle>
          <Title2>Editar</Title2>
          <CloseModal onClick={() => setIsOpenAtt(false)}>X</CloseModal>
        </StyledModalTitle>
        <StyledSelect id="" {...register("score")}>
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
        </StyledSelect>
        <StyledTextArea
          cols={30}
          rows={10}
          placeholder="Deixe um comentário"
          {...register("description")}
        ></StyledTextArea>
        <SmallYellowButton buttonsize={undefined} type="submit">editar</SmallYellowButton>
      </StyledModalForm>
    </StyledModalOverlay>
  );
};
