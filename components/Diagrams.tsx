/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Heart, Users, Sparkles, Clock, PenTool, LucideIcon } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
    book: BookOpen,
    heart: Heart,
    users: Users,
    sparkles: Sparkles,
    clock: Clock,
    pencil: PenTool,
};

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    const Icon = iconMap[icon] || Sparkles;
    
    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-teal-100 transition-all duration-300 group"
        >
            <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                <Icon className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="font-serif text-xl font-semibold text-slate-800 mb-3">{title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{description}</p>
        </motion.div>
    );
};

interface ExperienceItemProps {
    year: string;
    role: string;
    org: string;
    desc: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ year, role, org, desc }) => {
    return (
        <div className="relative pl-8 border-l-2 border-slate-200 hover:border-teal-300 transition-colors duration-300">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
            <span className="text-sm font-bold text-teal-600 tracking-wider uppercase mb-1 block">{year}</span>
            <h3 className="text-xl font-serif text-slate-800">{role}</h3>
            <div className="text-slate-500 font-medium mb-2">{org}</div>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
    );
};

interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
    return (
        <div className="bg-teal-800/50 p-8 rounded-xl border border-teal-700 backdrop-blur-sm relative">
             <span className="text-6xl font-serif text-teal-500/20 absolute top-4 left-4 leading-none">"</span>
             <p className="text-teal-50 text-lg italic leading-relaxed relative z-10 mb-6">
                {quote}
             </p>
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center font-bold text-teal-200">
                    {author[0]}
                </div>
                <div>
                    <div className="font-bold text-white text-sm">{author}</div>
                    <div className="text-teal-300 text-xs uppercase tracking-wider">{role}</div>
                </div>
             </div>
        </div>
    );
};
