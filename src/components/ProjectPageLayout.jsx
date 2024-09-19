import github from "../images/github.256x249.png";
import arrow from "../images/white_arrow.png";
import wave_pink_small from "../images/wave_pink_contact_small.png";
import wave_pink_large from "../images/wave_pink_contact_large.png";
import waves_large from "../images/waves_project_page_large.png";
import waves_small from "../images/waves_project_page_small.png";
import wave_blue_large from "../images/blue_wave_about_large.png";
import wave_blue_small from "../images/blue_wave_about_small.png";

// Props are passed to the ProjectPageLayout componement
export default function ProjectPageLayout({
  video,
  heading,
  heading_2,
  text_large,
  text_intro,
  repository,
  prototype,
  heading_3,
  video_additional_1,
  text_video_1,
  video_additional_2,
  text_video_2,
  programs,
}) {
  return (
    <main>
      <section>
        <h1 className="h1_project">{heading}</h1>
      </section>
      <picture>
        <source media="(min-width: 768px)" srcSet={waves_large} />
        <img className="waves_top" src={waves_small} alt="" />
      </picture>
      <section className="project_page">
        <div className="project_content_flex">
          <div className="content_pc_inner">
            <video autoPlay muted loop className="video_project" controls>
              <source src={video} />
            </video>
          </div>
          <div>
            <h2 className="h2_project_page">{heading_2}</h2>
            <p className="text_larger">{text_large}</p>
            <p className="text_info">{text_intro}</p>
            <div className="gh_link_pc">
              <a href={repository} target="_blank">
                <div className="gh_mobile">
                  <img
                    className="github_project github_footer"
                    src={github}
                    alt="GitHub ikon"
                  />
                  <p className="p_gh_pc">repository</p>
                </div>
              </a>
              <a href={prototype} target="_blank">
                <div className="link_flex">
                  <p className="p_link">gå til prototype</p>
                  <img className="arrow_white" src={arrow} alt="Pil" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <picture>
          <source media="(min-width: 768px)" srcSet={wave_pink_large} />
          <img className="pink_wave_contact" src={wave_pink_small} alt="" />
        </picture>
        <div className="project_content_flex_pc project_content_flex">
          <h3 className="h3_project">{heading_3}</h3>
          <div className="content_pc">
            <div className="content_pc_inner">
              <video
                autoPlay
                muted
                loop
                className="video_project_info"
                controls
              >
                <source src={video_additional_1} />
              </video>
              <p className="video_text">{text_video_1}</p>
            </div>
            <div className="content_pc_inner">
              <video
                autoPlay
                muted
                loop
                className="video_project_info"
                controls
              >
                <source src={video_additional_2} />
              </video>
              <p className="video_text">{text_video_2}</p>
            </div>
          </div>
          <div>{programs}</div>
        </div>
      </section>
      <picture>
        <source media="(min-width: 768px)" srcSet={wave_blue_large} />
        <img className="waves_bottom" src={wave_blue_small} alt="" />
      </picture>
    </main>
  );
}
