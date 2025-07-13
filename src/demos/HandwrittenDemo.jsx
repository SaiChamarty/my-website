import React, { useRef, useState, useEffect } from "react";

/**
 * 28×28 handwritten‑digit demo.
 * – Draw in the square canvas.
 * – “Clear” wipes it.
 * – “Predict” downsamples, POSTs to /predict, shows result.
 */
export default function HandwrittenDemo() {
  const CANVAS_SIZE = 280;          // visible size (10× upscale)
  const GRID        = 28;           // target size for the model
  const canvasRef   = useRef(null);
  const [prediction, setPrediction] = useState(null);

  /* ---------- drawing helpers ---------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    ctx.lineWidth = 12;
    ctx.lineCap   = "round";
    ctx.strokeStyle = "white";
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    let drawing = false;
    const xy = e => {
      const rect = canvas.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const down = e => { drawing = true; ctx.beginPath(); ctx.moveTo(...Object.values(xy(e))); };
    const move = e => { if (!drawing) return; const {x,y}=xy(e); ctx.lineTo(x,y); ctx.stroke(); };
    const up = () => { drawing = false; ctx.closePath(); ctx.beginPath(); };

    canvas.addEventListener("mousedown", down);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup",   up);

    return () => {
      canvas.removeEventListener("mousedown", down);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup",   up);
    };
  }, []);

  const clear = () => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    setPrediction(null);
  };

  /** down‑sample to 28×28 grayscale and POST */
  const predict = async () => {
    // draw the upscale canvas onto a hidden 28×28 canvas
    const tmp   = document.createElement("canvas");
    tmp.width = tmp.height = GRID;
    const tctx = tmp.getContext("2d");
    tctx.imageSmoothingEnabled = false;
    tctx.fillStyle = "black";
    tctx.fillRect(0, 0, GRID, GRID); // ✅ Fill with black first
    tctx.drawImage(canvasRef.current, 0, 0, GRID, GRID);

    // grab grayscale pixels & normalise 0‑1
    const { data } = tmp.getContext("2d").getImageData(0, 0, GRID, GRID);
    const pixels = [];
    for (let i = 0; i < data.length; i += 4) {
      // invert so white stroke → 1, black bg → 0
      pixels.push(1 - data[i] / 255);
    }
    
    console.time("predict-click");
    console.log("Button clicked – firing request");

    try {
      const res  = await fetch("https://ml.junebase.com/predict", {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body   : JSON.stringify({ pixels })
      });
      const { prediction, confidence } = await res.json();
      setPrediction({ prediction, confidence: (confidence * 100).toFixed(1) });
    } catch (err) {
      console.error(err);
      setPrediction({ error: "API error – see console" });
    }
    
    console.timeEnd("predict-click");
    document.body.appendChild(tmp);  // temporary preview
  };

  /* ---------- UI ---------- */
  return (
    <div className="hdemo">
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        className="hdemo-canvas"
      />
      <div className="hdemo-btns">
        <button onClick={clear}>Clear</button>
        <button onClick={predict}>Predict</button>
      </div>

      {prediction && !prediction.error && (
        <p className="hdemo-result">
          I think it's a <strong>{prediction.prediction}</strong>! <br />
          I'm {prediction.confidence}% sure…
        </p>
      )}
      {prediction?.error && <p>{prediction.error}</p>}
    </div>
  );
}