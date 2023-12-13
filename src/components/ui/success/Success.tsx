import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const Success: FC = (): JSX.Element => {
  const navigate = useNavigate();
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(!show);
    const navigationTimeout = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => {
      clearTimeout(navigationTimeout);
    };
  }, []);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      timeout={3000}
      classNames="main-animation-scale"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className="sm-max:text-[16px] w-full rounded-[30px] bg-[white] shadow-shadow p-[40px] text-center font-bold bg-block-color-bg border-[1px]"
      >
        Номер вашего заказа №123123, с Вами свяжется наш менеджер.
      </div>
    </CSSTransition>
  );
};

export default Success;
