import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import './PlexusBackground.css';

const PlexusBackground = ({ color, absolute = false }) => {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);
    const mouseRef = useRef({ x: null, y: null, radius: 150 });
    const animationFrameRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = particlesRef.current;
        const mouse = mouseRef.current;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleResize = () => {
            const parent = canvas.parentElement;
            canvas.width = absolute ? parent.offsetWidth : window.innerWidth;
            canvas.height = absolute ? parent.offsetHeight : window.innerHeight;
            init();
        };

        if (absolute) {
            canvas.parentElement.addEventListener('mousemove', handleMouseMove);
        } else {
            window.addEventListener('mousemove', handleMouseMove);
        }
        window.addEventListener('resize', handleResize);

        const defaultColor = theme === 'dark' ? '255, 255, 255' : '21, 50, 44';
        const finalColor = color || defaultColor;

        const particleColor = `rgba(${finalColor}, 0.8)`;
        const lineColor = `rgba(${finalColor},`;

        class Particle {
            constructor(x, y, directionX, directionY, size) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = particleColor;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
                if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    this.x += this.directionX;
                    this.y += this.directionY;
                }

                this.draw();
            }
        }

        function init() {
            particles = [];
            let numberOfParticles = (canvas.width * canvas.height) / 8000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = Math.random() * 3 + 1.5;
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                let directionX = (Math.random() * 0.6) - 0.3;
                let directionY = (Math.random() * 0.6) - 0.3;
                particles.push(new Particle(x, y, directionX, directionY, size));
            }
            particlesRef.current = particles;
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));

                    if (distance < (canvas.width * canvas.height) / 40) {
                        opacityValue = 1 - (distance / ((canvas.width * canvas.height) / 40));
                        ctx.strokeStyle = `${lineColor} ${opacityValue * 0.5})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
            animationFrameRef.current = requestAnimationFrame(animate);
        }

        const parent = canvas.parentElement;
        canvas.width = absolute ? parent.offsetWidth : window.innerWidth;
        canvas.height = absolute ? parent.offsetHeight : window.innerHeight;
        init();
        animate();

        return () => {
            if (absolute) {
                canvas.parentElement.removeEventListener('mousemove', handleMouseMove);
            } else {
                window.removeEventListener('mousemove', handleMouseMove);
            }
            window.removeEventListener('resize', handleResize);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [theme, color, absolute]); // Re-run when props change

    return <canvas ref={canvasRef} className={`plexus-canvas ${absolute ? 'is-absolute' : ''}`} />;
};

export default PlexusBackground;
