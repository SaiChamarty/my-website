import "./Research.css";

export default function Research() {
  return (
    <div className="research">
        <h1 className="heading">Welcome to Sai's Research Page</h1>
        {/* <div className="line"></div> */}

        <h2 className="research-1">Model 28 - Ensemble Model for Scenery Classification</h2>


    {/* Abstract Section */}
        <div className="research-section">

            {/* LEFT SIDE (abstract + video) */}
            <div className="left-column">
                <div className="research-abstract">
                    <p><strong>Team:</strong> Sai Chamarty, Thomas Liu, Karen Lui, Taylor Sambajon, Jason Zhao</p>
                    <p><strong>Date Written:</strong> June 2025</p>
                    <p><strong>Abstract:</strong> A brief comparison of Logistic Regression, MLP, and CNN models for classifying six scenery categories using the Intel Image Dataset.</p>
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

            {/* RIGHT SIDE (PDF VIEWER) */}
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