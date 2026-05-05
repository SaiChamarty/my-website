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
    id: "unet",
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
];

export default function Research() {
  const [openId, setOpenId] = useState(null);
  const contentRefs = useRef({});

  useEffect(() => {
    const update = () => {
      RESEARCH_ITEMS.forEach((item) => {
        const el = contentRefs.current[item.id];
        if (el) el.style.setProperty("--content-h", `${el.scrollHeight}px`);
      });
    };
    const t = setTimeout(update, 0);
    window.addEventListener("resize", update);
    return () => { clearTimeout(t); window.removeEventListener("resize", update); };
  }, []);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="research-page">

      {/* ── PAGE HEADING ── */}
      <div className="research-eyebrow">PAPERS &amp; WRITEUPS</div>
      <h1 className="research-h1">
        Research <span className="research-accent">&amp;</span>{" "}
        <span className="research-serif">Findings</span>
      </h1>
      <p className="research-lead">
        Academic papers, reimplementations, and comparative analyses from coursework and independent study.
      </p>

      {/* ── PAPER LIST ── */}
      <div className="research-list">
        {RESEARCH_ITEMS.map((item, index) => {
          const open = openId === item.id;
          return (
            <div
              key={item.id}
              className={`paper ${open ? "paper-open" : ""} paper-enter`}
              style={{ animationDelay: `${0.12 * index}s` }}
            >
              {/* ── PAPER HEADER ── */}
              <button
                type="button"
                className="paper-head"
                onClick={() => toggle(item.id)}
                aria-expanded={open}
              >
                <div className="paper-head-left">
                  <div className="paper-title">{item.title}</div>
                  <div className="paper-sub">{item.description}</div>
                  <div className="paper-meta-row">
                    <span>
                      <strong>Team:</strong> {item.team}
                    </span>
                    <span>
                      <strong>Date:</strong> {item.dateWritten}
                    </span>
                  </div>
                </div>
                <div className="paper-head-right">
                  {item.pdfSrc && (
                    <a
                      href={item.pdfSrc}
                      className="open-pdf-btn"
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ↗ PDF
                    </a>
                  )}
                  <div className="paper-chevron" aria-hidden="true">
                    {open ? "×" : "+"}
                  </div>
                </div>
              </button>

              {/* ── PAPER BODY (expanded) ── */}
              <div
                ref={(el) => { if (el) contentRefs.current[item.id] = el; }}
                className={`paper-body ${open ? "paper-body-open" : ""}`}
              >
                <p className="paper-abstract">
                  <strong>Abstract:</strong> {item.abstract}
                </p>

                <div className="paper-links">
                  {item.links?.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="paper-link"
                      download={l.download ? true : undefined}
                    >
                      {l.icon ? <img src={l.icon} alt="" className="paper-link-icon" /> : null}
                      {l.label}
                    </a>
                  ))}
                </div>

                <div className="paper-media">
                  {item.youtubeEmbed ? (
                    <div className="paper-frame paper-frame-video">
                      <div className="paper-frame-label">DEMO VIDEO</div>
                      <iframe
                        width="100%"
                        height="100%"
                        src={item.youtubeEmbed}
                        title={`${item.title} Demo Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : null}

                  {item.pdfSrc ? (
                    <div className="paper-frame paper-frame-pdf">
                      <div className="paper-frame-label">PAPER</div>
                      <iframe
                        className="pdf-frame"
                        src={item.pdfSrc}
                        title={`${item.title} PDF`}
                      />
                    </div>
                  ) : null}
                </div>

                {/* Mobile-only PDF download */}
                <div className="paper-mobile-download">
                  {item.links?.find((x) => x.download)?.href ? (
                    <a
                      className="paper-link"
                      href={item.links.find((x) => x.download).href}
                      download
                    >
                      <img src="/download.png" alt="" className="paper-link-icon" />
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
