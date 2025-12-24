'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Minus, Square, Terminal as TerminalIcon } from 'lucide-react';

const Terminal = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        "Initialize v2.0.4...",
        "Loading Data Engineer Profile...",
        "Type 'help' for available commands."
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [output, input]); // Scrill on input change too to keep cursor in view

    const handleCommand = (cmd) => {
        const cleanCmd = cmd.trim().toLowerCase();
        let response = "";

        switch (cleanCmd) {
            case 'help':
                response = "Available commands: about, skills, projects, education, contact, socials, github, linkedin, resume, clear, whoami, sudo";
                break;
            case 'about':
                response = "Abhishek Das | Data Architect | Transforming chaos into clarity.";
                break;
            case 'skills':
                response = "Python, SQL, AWS, Airflow, Tableau, PowerBI, Next.js, React...";
                break;
            case 'projects':
                response = "Checking projects... Found: Portfolio v2, Data Pipelines, ETL Frameworks. Type 'ls projects' for more (simulated).";
                break;
            case 'education':
                response = "MCA (Cloud Computing & DevOps) | BSc (Cloud Tech & Info Security)";
                break;
            case 'socials':
                response = "GitHub, LinkedIn, StackOverflow, HackerRank, CodeChef.";
                break;
            case 'contact':
                response = "Email: abhishek.das1359x@gmail.com | Status: Open for opportunities.";
                break;
            case 'github':
                response = "Opening GitHub... (https://github.com/theAbhishekDas/)";
                window.open('https://github.com/theAbhishekDas/', '_blank');
                break;
            case 'linkedin':
                response = "Opening LinkedIn... (https://www.linkedin.com/in/abhishekdas09/)";
                window.open('https://www.linkedin.com/in/abhishekdas09/', '_blank');
                break;
            case 'resume':
                response = "Downloading Resume...";
                window.open('https://drive.google.com/file/d/1HbeMppJmMVljPfdM7i_07HbhmM1y3NLy/preview', '_blank');
                break;
            case 'whoami':
                response = "User: Guest | Permissions: Read-Only | Context: Portfolio Visitor";
                break;
            case 'sudo':
                response = "Permission denied: You are not root. Nice try!";
                break;
            case 'clear':
                setOutput([]);
                return;
            case '':
                return;
            default:
                response = `Command not found: ${cleanCmd}. Type 'help' for assistance.`;
        }

        setOutput(prev => [...prev, `> ${cmd}`, response]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="w-full max-w-lg mx-auto bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-700 font-mono text-sm z-20">
            {/* Title Bar */}
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex gap-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors cursor-pointer"></div>
                </div>
                <div className="flex items-center gap-x-2 text-gray-400 text-xs select-none">
                    <TerminalIcon size={12} />
                    <span>abhishek@portfolio: ~</span>
                </div>
                <div className="w-14"></div> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-[300px] overflow-y-auto text-green-400 selection:bg-green-900 selection:text-white">
                {output.map((line, i) => (
                    <div key={i} className="mb-1 leading-relaxed animate-in fade-in slide-in-from-left-1 duration-300">
                        {line.startsWith(">") ? <span className="text-blue-400 mr-2">$</span> : <span className="text-gray-500 mr-2">{`>`}</span>}
                        <span className={line.startsWith(">") ? "text-white" : "text-green-400"}>{line.startsWith(">") ? line.substring(2) : line}</span>
                    </div>
                ))}

                {/* Input Line */}
                <div className="flex items-center mt-2">
                    <span className="text-blue-400 mr-2">$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-transparent border-none outline-none text-white w-full font-mono placeholder-gray-600"
                        placeholder="Type command..."
                        autoFocus
                    />
                </div>
                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default Terminal;
