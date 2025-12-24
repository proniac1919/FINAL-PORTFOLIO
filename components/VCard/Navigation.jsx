'use client';

const Navigation = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'about', label: 'About' },
        { id: 'resume', label: 'Resume' },
        { id: 'portfolio', label: 'Portfolio' },
    ];

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:block absolute top-0 right-0 p-8 z-30">
                <div className="bg-[#2b2b2c] border border-[#383838] p-0 rounded-bl-[20px] rounded-tr-[20px] flex overflow-hidden shadow-lg">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-4 text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                                    ? 'text-[#ffdb70]'
                                    : 'text-white/70 hover:text-white/90'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#2b2b2c] border-t border-[#383838] pb-safe rounded-t-[20px]">
                <div className="flex justify-around items-center p-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === tab.id
                                    ? 'text-[#ffdb70]'
                                    : 'text-white/50'
                                }`}
                        >
                            <span className={`text-sm font-medium ${activeTab === tab.id ? 'font-bold' : ''}`}>
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navigation;
