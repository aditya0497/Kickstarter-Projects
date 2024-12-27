import "@/styles/globals.css";
import Header from "@/components/Header";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
