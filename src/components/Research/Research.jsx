import "./Research.css";

export default function Research() {
  return (
    <div className="research">
      <h1 className="heading">Welcome to Sai's Research Page</h1>
      <h2 className="research-1">Model 28 - Ensemble Model for Scenery Classification</h2>

      <div className="research-section">
        <div className="left-column">
          <div className="research-abstract">
            <p><strong>Team:</strong> Sai Chamarty, Thomas Liu, Karen Lui, Taylor Sambajon, Jason Zhao</p>
            <p><strong>Date Written:</strong> June 2025</p>
            <p><strong>Abstract:</strong> A brief comparison of Logistic Regression, MLP, and CNN models for classifying six scenery categories using the Intel Image Dataset.</p>

            <div className="research-links" style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <a href="https://model28.junebase.com/" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#8FA9FF" }}>
                <img src="/external-link.png" alt="Live Link" style={{ width: "20px", height: "20px" }} /> Live Website
              </a>

              <a href="https://github.com/Model-28/project" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#8FA9FF" }}>
                <img 
                  src="/git.png" 
                  alt="GitHub Logo" 
                  style={{ width: "18px", height: "18px", verticalAlign: "middle" }}
                /> GitHub
                </a>
                <a className = "download-pdf" href="/model28.pdf" style={{ display: "flex", alignItems: "center", color: "#8FA9FF" }} download>
                    <img 
                    src="/download.png" 
                    alt="Download Logo" 
                    style={{ width: "30px", height: "18px", verticalAlign: "middle" }}
                    /> Research Paper
                </a>
            </div>
          </div>

          <div className="video-placeholder">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/trj_Kn91iGM"
              title="Model 28 Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="pdf-viewer">
          <iframe
            className="pdf-frame"
            src="/model28.pdf"
            title="Model 28 Research Paper"
          ></iframe>
        </div>
      </div>
    </div>
  );
}