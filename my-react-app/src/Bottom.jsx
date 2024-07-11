import Cloud from "./assets/icon-upload.svg";
import File from "./assets/icon-document.svg";

import Folder from  "./assets/icon-folder.svg";

// import React from "react";
const Bottom = () => {
  return (
    <div className="bottom">
        <div className="file icon">
<img src={File} alt="File" />

        </div>
           <div className="folder icon">
<img src={Folder} alt="Folder" />

        </div>
           <div className="file icon">
<img src={Cloud} alt="Cloud" />

        </div>
    </div>
  );
};

export default Bottom;