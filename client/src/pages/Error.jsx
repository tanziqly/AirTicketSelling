import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
// import Button from "@mui/material"

export const Error = () => {
  return (
    <section className="h-screen flex items-center flex-col justify-center w-full bg-orange-400">
        <Typography variant="h1" className="text-white">404</Typography>
        <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
        </Typography>
        <Link to="/">
            <button className="bg-black px-5 py-[10px] hover:bg-zinc-900 text-white text-base font-bold rounded-xl mt-5">Back to Home</button>
        </Link>
    </section>
  )
}
