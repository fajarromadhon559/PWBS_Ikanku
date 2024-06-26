'use client'
import Footer from "./components/Footer"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import SecondHeader from "./components/SecondHeader"
export default function Home() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-100 py-28">
      <div className="px-28">
      <SecondHeader/>
      </div>
      <main className="p-4">
        <MainContent/>
      </main>
      </div>
      <Footer/>
    </div>
  )
}
