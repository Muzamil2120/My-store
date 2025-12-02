import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import "./PageFade.css";

export default function PageTransition({ children }) {
  const location = useLocation();
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        unmountOnExit
      >
        <div className="page-fade">{children}</div>
      </CSSTransition>
    </SwitchTransition>
  );
}
