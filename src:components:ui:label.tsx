{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import * as React from 'react'\
\
export function Card(\{ className='', ...props \}: React.HTMLAttributes<HTMLDivElement>) \{\
  return <div className=\{`rounded-2xl border border-slate-200 bg-white $\{className\}`\} \{...props\} />\
\}\
export function CardHeader(\{ className='', ...props \}: React.HTMLAttributes<HTMLDivElement>) \{\
  return <div className=\{`p-4 border-b border-slate-200 $\{className\}`\} \{...props\} />\
\}\
export function CardTitle(\{ className='', ...props \}: React.HTMLAttributes<HTMLHeadingElement>) \{\
  return <h3 className=\{`text-lg font-semibold $\{className\}`\} \{...props\} />\
\}\
export function CardContent(\{ className='', ...props \}: React.HTMLAttributes<HTMLDivElement>) \{\
  return <div className=\{`p-4 $\{className\}`\} \{...props\} />\
\}}
