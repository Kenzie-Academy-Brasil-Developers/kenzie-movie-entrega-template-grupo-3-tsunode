import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../providers/UserContext";
import { ReviewContext } from "../../providers/ReviewContext";
import { useForm } from "react-hook-form";
import { StyledModalOverlay } from "../../styles/Overlay";
import { StyledModalForm } from "../Modal/ModalStyle";
import { Title2 } from "../../styles/typography";
import { SmallYellowButton } from "../../styles/Buttons";

export const ModalDelete = () => {
  const { setIsOpenDelete } = useContext(UserContext);

  const { deleteReview } = useContext(ReviewContext);

  const { handleSubmit } = useForm<FormData>({});

  const modalClose = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const ClickOut = (e: any) => {
      if (!modalClose.current?.contains(e.target)) {
        setIsOpenDelete(false);
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
        setIsOpenDelete(false);
      }
    };
    window.addEventListener("keydown", PressOut);

    return () => {
      window.removeEventListener("keydown", PressOut);
    };
  }, []);

  const submit = () => {
    console.log("2");
    deleteReview();
    setIsOpenDelete(false);
  };

  return (
    <StyledModalOverlay>
      <StyledModalForm ref={modalClose} onSubmit={handleSubmit(submit)}>
        <Title2>Deseja mesmo Deletar?</Title2>
        <SmallYellowButton buttonsize={undefined} type="submit">
          deletar
        </SmallYellowButton>
        <SmallYellowButton
          buttonsize={undefined}
          type="button"
          onClick={() => {
            setIsOpenDelete(false);
          }}
        >
          sair
        </SmallYellowButton>
      </StyledModalForm>
    </StyledModalOverlay>
  );
};
