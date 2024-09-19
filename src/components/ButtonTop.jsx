import btn from "../images/btn_pink.png";

export default function ButtonTop() {
  return (
    <>
      <div className="btn_flex">
        <img className="btn_pink" src={btn} alt="Knap til toppen" />
        <p className="p_btn">til tops!</p>
      </div>
    </>
  );
}
