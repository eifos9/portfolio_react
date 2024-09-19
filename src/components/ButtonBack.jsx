import btn from "../images/btn_pink.png";

export default function ButtonBack() {
  return (
    <>
      <div className="btn_flex">
        <img className="btn_pink" src={btn} alt="Knap tilbage" />
        <p className="p_btn">tilbage</p>
      </div>
    </>
  );
}
