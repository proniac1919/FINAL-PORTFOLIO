'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const ParticleNetwork = () => {
    const canvasRef = useRef(null);
    const { theme, resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Configuration
        const particleCount = 80;
        const connectionDistance = 140;
        const mouseDistance = 200;
        const moveSpeed = 0.4;

        // Mouse State
        let mouse = { x: null, y: null };

        const handleMouseMove = (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseLeave);

        // Resize handling
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Determine Colors based on Theme
        const getThemeColors = () => {
            // Use resolvedTheme to handle system preference
            const isDark = resolvedTheme === 'dark';
            return isDark
                ? { particle: '#00e1ff', line: '0, 225, 255' } // Cyan for Dark
                : { particle: '#3b82f6', line: '59, 130, 246' }; // Blue for Light
        };

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * moveSpeed;
                this.vy = (Math.random() - 0.5) * moveSpeed;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse Interaction
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.hypot(dx, dy);

                    if (distance < mouseDistance) {
                        // Gentle attraction/connection force logic can go here
                        // For now, let's just let lines connect, maybe slight push/pull?
                        // Let's implement slight attraction
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouseDistance - distance) / mouseDistance;
                        const directionX = forceDirectionX * force * 0.05;
                        const directionY = forceDirectionY * force * 0.05;

                        this.vx += directionX;
                        this.vy += directionY;
                    }
                }
            }

            draw(colors) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = colors.particle;
                ctx.fill();
            }
        }

        // Initialize
        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
        initParticles();

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const colors = getThemeColors();

            // Update and Draw Particles
            particles.forEach(particle => {
                particle.update();
                particle.draw(colors);
            });

            // Draw Connections
            particles.forEach((a, index) => {
                // Connect to other particles
                for (let j = index + 1; j < particles.length; j++) {
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < connectionDistance) {
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = `rgba(${colors.line}, ${opacity * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                // Connect to Mouse
                if (mouse.x != null) {
                    const dx = a.x - mouse.x;
                    const dy = a.y - mouse.y;
                    const distance = Math.hypot(dx, dy);

                    if (distance < mouseDistance) {
                        const opacity = 1 - (distance / mouseDistance);
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.strokeStyle = `rgba(${colors.line}, ${opacity * 0.4})`; // Stronger connection to mouse
                        ctx.lineWidth = 1.5;
                        ctx.stroke();
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, resolvedTheme]); // Re-run when theme changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none transition-opacity duration-500"
        />
    );
};

export default ParticleNetwork;
