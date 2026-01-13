import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './WaveBackground.css';

const WaveBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        // Wave parameters
        const waves = [
            { amplitude: 50, frequency: 0.01, speed: 0.02, color: 'rgba(240, 147, 43, 0.2)', offset: 0 },
            { amplitude: 70, frequency: 0.008, speed: 0.015, color: 'rgba(255, 179, 71, 0.15)', offset: 100 },
            { amplitude: 40, frequency: 0.012, speed: 0.025, color: 'rgba(255, 159, 67, 0.1)', offset: 200 },
            { amplitude: 90, frequency: 0.005, speed: 0.01, color: 'rgba(240, 147, 43, 0.08)', offset: 300 }
        ];

        // Particle parameters
        const particles = [];
        const particleCount = 15;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 80 + 20,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.1 + 0.02
            });
        }

        const drawWave = (wave, time) => {
            ctx.beginPath();
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 1.5;

            for (let x = 0; x < width; x += 5) {
                const y = Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude + height / 2;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        const drawVerticalWave = (wave, time) => {
            ctx.beginPath();
            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 1;

            for (let y = 0; y < height; y += 5) {
                const x = Math.sin(y * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude + width / 2;
                if (y === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        };

        const render = (time) => {
            time *= 0.001;
            ctx.clearRect(0, 0, width, height);

            // Draw particles (glowing orbs)
            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < -p.size) p.x = width + p.size;
                if (p.x > width + p.size) p.x = -p.size;
                if (p.y < -p.size) p.y = height + p.size;
                if (p.y > height + p.size) p.y = -p.size;

                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                gradient.addColorStop(0, `rgba(240, 147, 43, ${p.opacity})`);
                gradient.addColorStop(1, 'rgba(240, 147, 43, 0)');

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw waves
            waves.forEach((wave) => {
                drawWave(wave, time);
                drawVerticalWave(wave, time * 0.8);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="wave-background-canvas" />;
};

export default WaveBackground;
