import { useEffect, useRef, useState } from "react";
import "./Research.css";

const RESEARCH_ITEMS = [
  {
    id: "model28",
    title: "Model 28 — Ensemble Model for Scenery Classification",
    description: "Comparison of Logistic Regression, MLP, and CNN models on the Intel Image Dataset.",
    team: "Sai Chamarty, Thomas Liu, Karen Lui, Taylor Sambajon, Jason Zhao",
    dateWritten: "June 2025",
    abstract:
      "A brief comparison of Logistic Regression, MLP, and CNN models for classifying six scenery categories using the Intel Image Dataset.",
    links: [
      { label: "Live Website", href: "https://model28.junebase.com/", icon: "/external-link.png" },
      { label: "GitHub", href: "https://github.com/Model-28/project", icon: "/git.png" },
      { label: "Research Paper", href: "/model28.pdf", icon: "/download.png", download: true },
    ],
    youtubeEmbed: "https://www.youtube.com/embed/trj_Kn91iGM",
    pdfSrc: "/model28.pdf",
  },
  {
    id: "unet", // stable id (no spaces)
    title: "U-Net Segmentation — Modern Optimizers and Modified Architecture",
    description: "Comparison of the original U-Net vs a modified U-Net using modern optimizers and normalization.",
    team: "Sai Chamarty, Jonathan Levitsky, Sambhav Agarwal",
    dateWritten: "December 2025",
    abstract:
      "Implemented the original 2015 U-Net and compared it against a modified U-Net using modern optimizations (Adam, BatchNorm). Evaluated and cross-validated performance on the PHC dataset and the Data Science Bowl 2018 cell-segmentation dataset.",
    links: [
      { label: "GitHub", href: "https://github.com/JonathanPLev/Unet-ReImplementation", icon: "/git.png" },
      { label: "Research Paper", href: "/unet.pdf", icon: "/download.png", download: true },
    ],
    youtubeEmbed: "https://www.youtube.com/embed/fpBJSmlubyg",
    pdfSrc: "/unet.pdf",
  },

  // Add your next research item here (example template)
  // {
  //   id: "unet",
  //   title: "U-Net Segmentation — ...",
  //   description: "...",
  //   team: "...",
  //   dateWritten: "...",
  //   abstract: "...",
  //   links: [{ label: "...", href: "...", icon: "/external-link.png" }],
  //   youtubeEmbed: "", // optional
  //   pdfSrc: "", // optional
  // },
];

export default function Research() {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    // update heights after first paint (so animation is smooth)
    const t = setTimeout(() => {
      RESEARCH_ITEMS.forEach((item) => {
        const el = contentRefs.current[item.id];
        if (el) el.style.setProperty("--content-h", `${el.scrollHeight}px`);
      });
    }, 0);

    // also update on resize
    const onResize = () => {
      RESEARCH_ITEMS.forEach((item) => {
        const el = contentRefs.current[item.id];
        if (el) el.style.setProperty("--content-h", `${el.scrollHeight}px`);
      });
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="research">
      <h1 className="heading">Welcome to Sai's Research Page</h1>

      <div className="research-list">
        {RESEARCH_ITEMS.map((item, index) => {
          const open = openId === item.id;

          return (
            <div
              key={item.id}
              className={`research-item ${open ? "open" : ""} enter`}
              style={{ animationDelay: `${0.12 * index}s` }}
            >
              <button
                type="button"
                className="research-summary"
                onClick={() => toggle(item.id)}
                aria-expanded={open}
              >
                <div className="research-summary-left">
                  <div className="research-title">{item.title}</div>
                  <div className="research-desc">{item.description}</div>
                </div>
                <div className="research-chevron" aria-hidden="true">
                  {open ? "×" : "+"}
                </div>
              </button>

              <div
                ref={(el) => {
                  if (el) contentRefs.current[item.id] = el;
                }}
                className={`research-details ${open ? "open" : ""}`}
              >
                <div className="research-meta">
                  <p><strong>Team:</strong> {item.team}</p>
                  <p><strong>Date Written:</strong> {item.dateWritten}</p>
                  <p><strong>Abstract:</strong> {item.abstract}</p>

                  <div className="research-links">
                    {item.links?.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="research-link"
                        download={l.download ? true : undefined}
                      >
                        {l.icon ? <img src={l.icon} alt="" className="link-icon" /> : null}
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="research-media">
                  {item.youtubeEmbed ? (
                    <div className="video-placeholder">
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.youtubeEmbed}
                        title={`${item.title} Demo Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : null}

                  {item.pdfSrc ? (
                    <div className="pdf-viewer">
                      <div className="pdf-actions">
                        <a className="open-pdf" href={item.pdfSrc} target="_blank" rel="noopener noreferrer">
                          Open PDF ↗
                        </a>
                      </div>

                      <iframe className="pdf-frame" src={item.pdfSrc} title={`${item.title} PDF`}></iframe>
                    </div>
                  ) : null}
                </div>

                {/* Mobile-only PDF download (if a download link exists) */}
                <div className="download-row">
                  {item.links?.find((x) => x.download)?.href ? (
                    <a className="download-pdf" href={item.links.find((x) => x.download).href} download>
                      <img src="/download.png" alt="" className="link-icon" />
                      Download PDF
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}