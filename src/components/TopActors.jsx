import { useState } from 'react';
import { SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/outline';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

// Icon components
function SkullIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="9" cy="12" r="1" />
            <circle cx="15" cy="12" r="1" />
            <path d="M8 20v2h8v-2" />
            <path d="m12.5 17-.5-1-.5 1h1z" />
            <path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
        </svg>
    );
}

function FingerprintIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
            <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
            <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
            <path d="M2 12a10 10 0 0 1 18-6" />
            <path d="M2 16h.01" />
            <path d="M21.8 16c.2-2 .131-5.354 0-6" />
            <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
            <path d="M8.65 22c.21-.66.45-1.32.57-2" />
            <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
        </svg>
    );
}

function FlameIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.304 1-3.5.5 1 1.5 2.5 2.5 3.5z" />
        </svg>
    );
}

export default function TopActors() {
    const [filter, setFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('desc');

    // Data to be replaced with real DB data
    const actors = [
        { id: 11, name: 'Vulnerability Researcher Y', description: 'Finds and reports vulnerabilities', score: 4 },
        { id: 1, name: 'APT29', description: 'Russian state-sponsored hacking group', score: -2 },
        { id: 7, name: 'Threat Intel Org A', description: 'Provides valuable threat intelligence', score: 11 },
        { id: 3, name: 'FIN7', description: 'Cybercriminal group targeting financial institutions', score: 3 },
        { id: 4, name: 'Fancy Bear', description: 'Russian state-sponsored hacking group', score: 5 },
        { id: 5, name: 'Cozy Bear', description: 'Russian state-sponsored hacking group', score: 7 },
        { id: 10, name: 'Incident Response Team', description: 'Responds to and mitigates cyber threats', score: 6 },
        { id: 6, name: 'Sandworm', description: 'Russian state-sponsored hacking group', score: 9 },
        { id: 8, name: 'Cybersecurity Inc.', description: 'Offers advanced security solutions', score: 13 },
        { id: 9, name: 'Security Researcher X', description: 'Researches and reports on new threats', score: 15 },
        { id: 2, name: 'Lazarus Group', description: 'North Korean state-sponsored hacking group', score: 1 },
    ];

    const filteredActors = actors
        .filter(actor => (filter === 'good' ? actor.score > 7 : filter === 'bad' ? actor.score <= 7 : true))
        .sort((a, b) => sortOrder === 'asc' ? a.score - b.score : b.score - a.score)
        .slice(0, 10);

    const getScoreColor = (score) => {
        if (score >= 10) return 'bg-green-100 text-green-800';
        if (score >= 5) return 'bg-orange-100 text-orange-800';
        return 'bg-red-100 text-red-800';
    };

    const getIcon = (score) => {
        if (score < 5) return SkullIcon;
        if (score <= 10) return FingerprintIcon;
        return FlameIcon;
    };

    return (
        <div className='flex gap-2 justify-between items-center'>
            <div className="md:w-1/3 p-4" >
                <h1 className="text-3xl font-bold text-white mb-4">Top Threat Actors</h1>
                <p className="text-lg text-gray-300 mb-2">
                    This section provides insights into the most significant threat actors, categorized by their impact levels. The threat actors are filtered based on their scores and can be sorted in ascending or descending order.
                </p>
                <p className="text-lg text-gray-300">
                    Use the buttons to filter and sort the threat actors by their scores. High-score actors represent more severe threats, while low-score actors are less impactful.
                </p>
            </div>
    
            <Card className="w-full max-w-3xl bg-[#020817] text-white">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Threat Actor List</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mt-4">
                        <div className="flex flex-wrap justify-start">
                            <button
                                onClick={() => setFilter('good')}
                                className={`px-4 py-2 mr-2 rounded-2xl ${filter === 'good' ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
                            >
                                Good Actors
                            </button>
                            <button
                                onClick={() => setFilter('bad')}
                                className={`px-4 py-2 mr-2 rounded-2xl ${filter === 'bad' ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
                            >
                                Bad Actors
                            </button>
                            <button
                                onClick={() => setFilter('all')}
                                className={`px-4 py-2 mr-2 rounded-2xl ${filter === 'all' ? 'bg-blue-400 text-white' : 'bg-gray-200 text-black'}`}
                            >
                                All Actors
                            </button>
                            <button
                                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                                className="ml-2 px-4 py-2 rounded-2xl bg-gray-200 text-black"
                            >
                                {sortOrder === 'asc' ? <SortAscendingIcon className="w-5 h-5 inline" /> : <SortDescendingIcon className="w-5 h-5 inline" />}
                            </button>
                        </div>
                    </div>
                    <div className="h-[350px] mt-6 overflow-y-auto p-4">
                        <div className="flex flex-col space-y-6">
                            {filteredActors.map(actor => {
                                const Icon = getIcon(actor.score);
                                return (
                                    <div key={actor.id} className="flex items-center gap-4 bg-card rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1 flex items-center justify-between">
                                            <div>
                                                <h3 className="text-lg font-semibold">{actor.name}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {actor.description}
                                                </p>
                                            </div>
                                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(actor.score)}`}>
                                                Score: {actor.score}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );    
}
