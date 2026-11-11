import './globals.css';
import { Analytics } from '@vercel/analytics/next';
export const metadata={title:"Where’s My Grocery? | Make your grocery run count",description:'Compare a sample grocery basket and see whether a second stop is worth your time. Dallas–Fort Worth demo.'};
export default function Layout({children}){return <html lang="en"><body>{children}<Analytics /></body></html>}
