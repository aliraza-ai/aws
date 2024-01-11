import React from 'react'

const Scripts = () => {
    return (
        <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-1S9VKDRTK8"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1S9VKDRTK8');
            `,
            }} />
        </>
    )
}

export default Scripts