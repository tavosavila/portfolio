import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Gustavo_Sebastian_Avila.pdf";
import { React } from 'react';

const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Gustavo-Sebastian-Avila">
        <img
          src={DownloadIcon}
          alt="Resume download button"
        />
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
