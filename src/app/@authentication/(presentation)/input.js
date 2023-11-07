import style from "@/style/auth.module.css";
export default function Input({
  type,
  name,
  inputText,
  errorState,
  errorMsg,
  changeFunc,
  setPass,
  label,
}) {
  return (
    <div className={style.input}>
      <label className={`${errorState ? style.errorCol : style.labelInput}`}>
        {label}
      </label>
      <div className={`${style.inputDiv} ${errorState ? style.divError : ""}`}>
        <div className={style.error}>
          <input
            name={name}
            className={errorState ? style.colRed2 : ""}
            onChange={({ target: { value } }) => changeFunc(name, value)}
            placeholder={inputText}
            type={type}
          />
        </div>
        {type === "password" && (
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => setPass()}
          >
            <path
              d='M6.50942 3.53012C6.97767 3.40483 7.47493 3.33333 8.00004 3.33333C12.2425 3.33333 14.6667 8 14.6667 8C14.6667 8 14.1141 9.06385 13.0747 10.1757M2.89945 5.85215C1.87684 6.95382 1.33337 8 1.33337 8C1.33337 8 3.75762 12.6667 8.00004 12.6667C8.53476 12.6667 9.04059 12.5925 9.51632 12.463M7.66671 9.97235C6.94392 9.85109 6.35259 9.34215 6.11384 8.66667M8.33337 6.02765C9.17088 6.16816 9.83188 6.82917 9.97239 7.66667M2.00004 2L14 14'
              stroke={errorState ? "#A61D4A" : "#333333"}
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
        {type === "text" && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='#000000'
            viewBox='0 0 256 256'
            onClick={() => setPass()}
          >
            <path d='M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z'></path>
          </svg>
        )}

        {type === undefined && (
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              opacity='0.15'
              d='M14 12V4.00003C14 3.81594 13.9254 3.64927 13.8047 3.52863L13.6667 3.6667L8.94281 8.39055C8.42211 8.91125 7.57789 8.91125 7.05719 8.39055L2.33333 3.6667L2.19526 3.52863C2.07462 3.64927 2 3.81594 2 4.00003V12C2 12.3682 2.29848 12.6667 2.66667 12.6667H13.3333C13.7015 12.6667 14 12.3682 14 12Z'
              fill='#333333'
            />
            <path
              d='M2.33333 3.66665L7.05719 8.3905C7.57789 8.9112 8.42211 8.9112 8.94281 8.3905L13.6667 3.66665M2.66667 12.6666H13.3333C13.7015 12.6666 14 12.3682 14 12V3.99998C14 3.63179 13.7015 3.33331 13.3333 3.33331H2.66667C2.29848 3.33331 2 3.63179 2 3.99998V12C2 12.3682 2.29848 12.6666 2.66667 12.6666Z'
              stroke={errorState ? "#A61D4A" : "#333333"}
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        )}
      </div>
      {errorState && <p className={style.errorP}>{errorMsg}</p>}
    </div>
  );
}
