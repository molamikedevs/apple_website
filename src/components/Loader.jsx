import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html>
  <div className="grid items-center justify-center absolute inset-0 bg-slate-200/20 backdrop-blur-sm">
			<div className="flex flex-col items-center">
				<div className="w-16 h-16 border-4 border-t-transparent border-primary-200 rounded-full animate-spin"></div>
				<p className="text-lg text-primary-200 mt-4">Loading...</p>
			</div>
		</div>
    </Html>
  )
}

export default Loader