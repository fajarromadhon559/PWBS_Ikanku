'use client'
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import SecondHeader from "./components/SecondHeader"
export default function Home() {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-100 py-28">
      <SecondHeader/>
      <main className="p-4">
        <MainContent/>
      </main>
      </div>
    </div>
  )
}
