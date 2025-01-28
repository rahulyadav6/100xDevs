/* eslint-disable no-unused-vars */
import React from "react"
import { RevenueCard } from "./components/RevenueCard"
function App() {

  return (
    <div className="grid grid-cols-4" >
      <RevenueCard title={"Amount pending"} amount={"92,312.20"} orderCount={13} />
    </div>
  )
}

export default App
