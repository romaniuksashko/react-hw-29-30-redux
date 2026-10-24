import style from "./FormButton.module.css";

function FormButton({ setIsForm }) {
  return (
      <button className={style.button} onClick={() => setIsForm(true)}>
        <svg viewBox="0 0 24 24" className={style.plus}>
          <path
            d="M5 13h6v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v6h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1z"
            fill="#FFFFFF"
          />
        </svg>
      </button>
  );
}

export default FormButton;
