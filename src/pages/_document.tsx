import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
            </Head>
            <body className="antialiased bg-body text-body font-body">
                <Main />
                <NextScript />
                    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
    <script src="js/charts-demo.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.3/dist/cdn.min.js"></script>

            </body>
        </Html>
    )
}
