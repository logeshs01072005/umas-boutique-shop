import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { diwaliAudio } from "./DiwaliAudio";

// Vibrant Diwali Festive Palette
const FIREWORK_COLORS = [
  "#FFD700", // Gold
  "#FF5722", // Deep Saffron / Flame Orange
  "#FF1744", // Royal Crimson
  "#00E676", // Emerald Festive Green
  "#00E5FF", // Cyan Sky
  "#E040FB", // Bright Orchid Violet
  "#FFEB3B", // Brilliant Yellow
  "#FF9100", // Warm Amber
  "#F50057", // Deep Rose
  "#FFFFFF", // Pure White Sparkle
];

const GOLD_PALETTE = ["#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFA000", "#FFF8E1"];

export const DiwaliCrackerCanvas = forwardRef(function DiwaliCrackerCanvas(
  {
    autoLaunch = true,
    allowClickToBurst = true,
    sparklerActive = false,
    className = "",
  },
  ref
) {
  const canvasRef = useRef(null);
  const engineRef = useRef({
    particles: [],
    rockets: [],
    anars: [],
    chakras: [],
    ladis: [],
    sparklerTrail: [],
    mouse: { x: -100, y: -100, isDown: false },
    lastAutoTime: 0,
    animId: null,
  });

  // Imperative API for parent components to trigger specific cracker effects
  useImperativeHandle(ref, () => ({
    launchSkyShot: (targetX, targetY) => {
      triggerSkyShot(targetX, targetY);
    },
    launchAnar: (x, y) => {
      triggerAnar(x, y);
    },
    launchChakra: (x, y) => {
      triggerChakra(x, y);
    },
    launchLadi: (x, y) => {
      triggerLadi(x, y);
    },
    burstRandom: () => {
      triggerRandomBurst();
    },
  }));

  const triggerSkyShot = (targetX, targetY) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const startX = targetX !== undefined ? targetX + (Math.random() * 80 - 40) : Math.random() * canvas.width;
    const destX = targetX !== undefined ? targetX : Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
    const destY = targetY !== undefined ? targetY : Math.random() * (canvas.height * 0.45) + canvas.height * 0.08;

    const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
    const type = Math.random() > 0.35 ? "chrysanthemum" : (Math.random() > 0.5 ? "willow" : "ring");

    diwaliAudio.playRocketWhistle();

    engineRef.current.rockets.push({
      x: startX,
      y: canvas.height,
      startX,
      startY: canvas.height,
      targetX: destX,
      targetY: destY,
      speed: Math.random() * 4 + 14,
      color,
      type,
      trail: [],
      trailColor: "#FFA000",
      life: 0,
      exploded: false,
    });
  };

  const triggerAnar = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const posX = x !== undefined ? x : canvas.width * 0.5 + (Math.random() * 200 - 100);
    const posY = y !== undefined ? y : canvas.height - 30;

    diwaliAudio.playAnarFountain();

    engineRef.current.anars.push({
      x: posX,
      y: posY,
      duration: 80, // frames (~1.3s)
      currentFrame: 0,
    });
  };

  const triggerChakra = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const posX = x !== undefined ? x : canvas.width * 0.5 + (Math.random() * 300 - 150);
    const posY = y !== undefined ? y : canvas.height - 50;

    diwaliAudio.playChakraWhir();

    engineRef.current.chakras.push({
      x: posX,
      y: posY,
      angle: 0,
      speed: 0.35,
      radius: 20,
      duration: 120, // frames (~2s)
      currentFrame: 0,
    });
  };

  const triggerLadi = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const posX = x !== undefined ? x : canvas.width * 0.5 + (Math.random() * 200 - 100);
    const posY = y !== undefined ? y : canvas.height * 0.3;

    diwaliAudio.playLadiCracker();

    engineRef.current.ladis.push({
      x: posX,
      y: posY,
      totalCrackers: 18,
      currentCracker: 0,
      spacing: 14,
    });
  };

  const triggerRandomBurst = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const x = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
    const y = Math.random() * (canvas.height * 0.4) + canvas.height * 0.1;
    triggerSkyShot(x, y);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Main animation loop
    let lastTime = performance.now();

    const loop = (time) => {
      const dt = time - lastTime;
      lastTime = time;

      // Subtle fade to produce light trails
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.22)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      const eng = engineRef.current;

      // 1. Auto launch sky shots if enabled
      if (autoLaunch && time - eng.lastAutoTime > 3200) {
        triggerSkyShot();
        if (Math.random() > 0.6) {
          setTimeout(() => triggerSkyShot(), 500);
        }
        eng.lastAutoTime = time;
      }

      // 2. Update and draw Rockets (Sky Shots)
      for (let i = eng.rockets.length - 1; i >= 0; i--) {
        const r = eng.rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 10) r.trail.shift();

        const dx = r.targetX - r.x;
        const dy = r.targetY - r.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist <= r.speed || r.y <= r.targetY) {
          // Detonate!
          r.exploded = true;
          eng.rockets.splice(i, 1);
          explodeSkyShot(r.targetX, r.targetY, r.color, r.type, eng.particles);
          continue;
        }

        const angle = Math.atan2(dy, dx);
        r.x += Math.cos(angle) * r.speed;
        r.y += Math.sin(angle) * r.speed;

        // Draw rocket head & fire trail
        ctx.beginPath();
        ctx.strokeStyle = r.trailColor;
        ctx.lineWidth = 3;
        for (let t = 0; t < r.trail.length; t++) {
          const pt = r.trail[t];
          if (t === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        // Glowing rocket point
        ctx.fillStyle = "#FFF";
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Dropping sparks from rocket tail
        if (Math.random() > 0.3) {
          eng.particles.push({
            x: r.x + (Math.random() * 4 - 2),
            y: r.y + 4,
            vx: (Math.random() - 0.5) * 1.5,
            vy: Math.random() * 2 + 1,
            color: "#FF9100",
            size: Math.random() * 2 + 1,
            alpha: 0.9,
            decay: 0.06,
            gravity: 0.05,
          });
        }
      }

      // 3. Update and draw Anars (Flower Pots)
      for (let i = eng.anars.length - 1; i >= 0; i--) {
        const a = eng.anars[i];
        a.currentFrame++;

        // Draw conical golden pot base
        ctx.fillStyle = "#FFB300";
        ctx.beginPath();
        ctx.moveTo(a.x - 16, a.y);
        ctx.lineTo(a.x + 16, a.y);
        ctx.lineTo(a.x + 8, a.y - 20);
        ctx.lineTo(a.x - 8, a.y - 20);
        ctx.closePath();
        ctx.fill();

        // Spew fountain sparks upward
        const sparkCount = 8;
        for (let s = 0; s < sparkCount; s++) {
          const angle = -Math.PI / 2 + (Math.random() - 0.5) * 0.7; // upwards cone
          const velocity = Math.random() * 9 + 7;
          eng.particles.push({
            x: a.x + (Math.random() * 6 - 3),
            y: a.y - 20,
            vx: Math.cos(angle) * velocity,
            vy: Math.sin(angle) * velocity,
            color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
            size: Math.random() * 2.5 + 1.2,
            alpha: 1,
            decay: 0.025,
            gravity: 0.28,
            sparkle: true,
          });
        }

        if (a.currentFrame >= a.duration) {
          eng.anars.splice(i, 1);
        }
      }

      // 4. Update and draw Chakras (Ground Spinners)
      for (let i = eng.chakras.length - 1; i >= 0; i--) {
        const c = eng.chakras[i];
        c.currentFrame++;
        c.angle += c.speed;

        // Draw center disc
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.angle);
        ctx.fillStyle = "#FF5722";
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Emit tangential sparks from 2 opposing jets
        for (let jet = 0; jet < 2; jet++) {
          const jetAngle = c.angle + jet * Math.PI;
          const jetX = c.x + Math.cos(jetAngle) * c.radius;
          const jetY = c.y + Math.sin(jetAngle) * c.radius;

          const sprayAngle = jetAngle + Math.PI / 2 + (Math.random() - 0.5) * 0.4;
          const speed = Math.random() * 5 + 4;

          eng.particles.push({
            x: jetX,
            y: jetY,
            vx: Math.cos(sprayAngle) * speed,
            vy: Math.sin(sprayAngle) * speed * 0.6, // slightly flattened on ground
            color: Math.random() > 0.4 ? "#FFD700" : "#FF1744",
            size: Math.random() * 2.5 + 1.2,
            alpha: 1,
            decay: 0.04,
            gravity: 0.1,
          });
        }

        if (c.currentFrame >= c.duration) {
          eng.chakras.splice(i, 1);
        }
      }

      // 5. Update and draw Ladis (100-Wala Red String Crackers)
      for (let i = eng.ladis.length - 1; i >= 0; i--) {
        const l = eng.ladis[i];

        // Draw remaining unexploded string
        ctx.strokeStyle = "#888";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x, l.y + l.totalCrackers * l.spacing);
        ctx.stroke();

        // Draw red crackers
        for (let k = l.currentCracker; k < l.totalCrackers; k++) {
          const cy = l.y + k * l.spacing;
          ctx.fillStyle = "#D50000";
          ctx.fillRect(l.x - 4, cy - 3, 8, 6);
        }

        // Burst current cracker
        if (l.currentCracker < l.totalCrackers) {
          const burstY = l.y + l.currentCracker * l.spacing;

          // Flash
          ctx.fillStyle = "#FFF";
          ctx.beginPath();
          ctx.arc(l.x, burstY, 14, 0, Math.PI * 2);
          ctx.fill();

          // Cracker debris & sparks
          for (let p = 0; p < 12; p++) {
            const angle = Math.random() * Math.PI * 2;
            const spd = Math.random() * 5 + 2;
            eng.particles.push({
              x: l.x,
              y: burstY,
              vx: Math.cos(angle) * spd,
              vy: Math.sin(angle) * spd,
              color: Math.random() > 0.5 ? "#FFD700" : "#FF1744",
              size: Math.random() * 2 + 1,
              alpha: 1,
              decay: 0.06,
              gravity: 0.15,
            });
          }

          l.currentCracker++;
        } else {
          eng.ladis.splice(i, 1);
        }
      }

      // 6. Sparkler Trail (following cursor if active)
      if (sparklerActive && eng.mouse.x > 0) {
        const sparkCount = 4;
        for (let s = 0; s < sparkCount; s++) {
          const angle = Math.random() * Math.PI * 2;
          const spd = Math.random() * 4 + 1;
          eng.particles.push({
            x: eng.mouse.x,
            y: eng.mouse.y,
            vx: Math.cos(angle) * spd,
            vy: Math.sin(angle) * spd,
            color: GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)],
            size: Math.random() * 3 + 1,
            alpha: 1,
            decay: 0.035,
            gravity: 0.05,
            sparkle: true,
          });
        }
      }

      // 7. Update and draw Particles
      for (let i = eng.particles.length - 1; i >= 0; i--) {
        const p = eng.particles[i];
        p.vx *= 0.98;
        p.vy += p.gravity || 0.06;
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          eng.particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.sparkle ? 10 : 4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      eng.animId = requestAnimationFrame(loop);
    };

    eng.animId = requestAnimationFrame(loop);

    return () => {
      if (eng.animId) cancelAnimationFrame(eng.animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [autoLaunch, sparklerActive]);

  // Burst Sky Shot particles logic
  const explodeSkyShot = (x, y, baseColor, type, particleList) => {
    diwaliAudio.playSkyShotBoom();
    diwaliAudio.playCrackles();

    const count = type === "willow" ? 110 : (type === "chrysanthemum" ? 90 : 60);

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = type === "willow" ? Math.random() * 4 + 2 : Math.random() * 7 + 2;

      let color = baseColor;
      if (type === "willow") {
        color = GOLD_PALETTE[Math.floor(Math.random() * GOLD_PALETTE.length)];
      } else if (Math.random() > 0.6) {
        color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      }

      particleList.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color,
        size: type === "willow" ? Math.random() * 2.2 + 1.2 : Math.random() * 3 + 1.5,
        alpha: 1,
        decay: type === "willow" ? 0.009 : 0.016, // willow floats longer
        gravity: type === "willow" ? 0.035 : 0.065,
        sparkle: Math.random() > 0.4,
      });
    }

    // Secondary burst ring if ring type
    if (type === "ring") {
      const ringColor = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      for (let i = 0; i < 28; i++) {
        const angle = (i / 28) * Math.PI * 2;
        particleList.push({
          x,
          y,
          vx: Math.cos(angle) * 5.5,
          vy: Math.sin(angle) * 5.5,
          color: ringColor,
          size: 2.2,
          alpha: 1,
          decay: 0.018,
          gravity: 0.05,
          sparkle: true,
        });
      }
    }
  };

  const handlePointerDown = (e) => {
    if (!allowClickToBurst) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    triggerSkyShot(x, y);
  };

  const handlePointerMove = (e) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    engineRef.current.mouse.x = e.clientX - rect.left;
    engineRef.current.mouse.y = e.clientY - rect.top;
  };

  return (
    <canvas
      ref={canvasRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      className={`fixed inset-0 w-full h-full pointer-events-none z-20 ${className}`}
      style={{ touchAction: "none" }}
    />
  );
});
