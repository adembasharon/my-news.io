import React from 'react';
import Login from '@/public/Components/Login';
import Head from 'next/head';

export default function Home(){
return(
    <div>
<Head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>;
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>;
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap" rel="stylesheet"/>;
</Head>

<Login/>
</div>
)}
