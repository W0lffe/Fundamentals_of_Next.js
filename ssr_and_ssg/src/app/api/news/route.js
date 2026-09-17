import { NextResponse } from 'next/server';

const mockNews = [
    {
        title: "New Web Technology Makes Development Faster",
        description: "Developers are exploring new tools that make building modern web applications easier and more efficient."
    },
    {
        title: "AI Continues to Change the Tech Industry",
        description: "Artificial intelligence is becoming increasingly common in software development and everyday applications."
    },
    {
        title: "Next.js Releases New Performance Improvements",
        description: "The latest updates bring improvements to application performance, rendering, and developer experience."
    },
     {
        title: "Next.js is a powerful framework built on React",
        description: "The Foundations of Next.js is all about learning fundamentals of Next.js."
    }
];

export async function GET(){
    return NextResponse.json(mockNews);
}