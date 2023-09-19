import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setData] = useState<[{ id: number, name: string, email: string }]>()
  const [dataMongo, setDataMongo] = useState<[{ _id: number, name: string, email: string }]>()
  useEffect(() => {
    axios.get("http://localhost:42069/get-users-json").then(res => {
      if (res.data) {
        setData(res.data);
      }
    }).catch(error => {
      console.error(error);
    })
    axios.get("http://localhost:42069/get-users-mongo").then(res => {
      if (res.data) {
        setDataMongo(res.data.users);
      }
    }).catch(error => {
      console.error(error);
    })
  }, [])
  return (
    <main className='h-screen bg-white text-black flex flex-col'>
      <section className="h-full bg-blue-900">
        <h2 className='text-center font-bold text-white text-xl'>JSON DATA</h2>
        {data && data.map((item, index) => (
          <div className=' text-white text-center' key={index}>
            <p>Id:{" "} <span>{item.id}</span></p>
            <p>Name:{" "} <span>{item.name}</span></p>
            <p>Email:{" "} <span>{item.email}</span></p>
          </div>
        ))}
      </section>
      <section className="h-full bg-red-900">
        <h2 className='text-center font-bold text-white text-xl'>MONGO DATA</h2>
        {dataMongo && dataMongo.map((item, index) => (
          <div className=' text-white text-center' key={index}>

            <p>Id:{" "} <span>{item._id}</span></p>
            <p>Name:{" "} <span>{item.name}</span></p>
            <p>Email:{" "} <span>{item.email}</span></p>
          </div>
        ))}
      </section>
    </main>
  )
}
