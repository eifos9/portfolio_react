import Gallery from "./Gallery";
import eva from "../images/eva_2022.jpg";
import enola from "../images/enola_2022.jpg";
import think_pink from "../images/think_pink_2023.jpg";
import profilbillede from "../images/profilbillede_2023.jpg";
import kirk_hammett from "../images/kirk_hammett_2023.jpg";
import moderne_marie_antoinette from "../images/moderne_marie_2022.jpg";
import denim_j from "../images/denim_j_2023.jpg";

export default function Talents() {
  return (
    <section>
      <h2 className="h2_el">særlige talenter</h2>
      <div className="talents_flex_pc">
        <div className="talents_flex">
          <h3 className="h3_skills">maleri</h3>
          <Gallery
            images={[profilbillede, kirk_hammett]}
            captions={[
              "Profilbillede, selvportræt - 2023",
              "Kirk Hammett - 2023",
            ]}
          />
        </div>
        <div className="talents_flex">
          <h3 className="h3_skills">tegning</h3>
          <Gallery
            images={[eva, enola, think_pink]}
            captions={[
              "Eva - 2022",
              "Enola Holmes - 2022",
              "Think Pink - 2023",
            ]}
          />
        </div>
        <div className="talents_flex">
          <h3 className="h3_skills">syning</h3>
          <Gallery
            images={[denim_j, moderne_marie_antoinette]}
            captions={["Denim J - 2023", "Moderne Marie Antoinette - 2022"]}
          />
        </div>
      </div>
    </section>
  );
}
