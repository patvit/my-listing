import './App.css';
import { Listing } from './components/Listing';
import { data as items } from './assets/data.ts';

export default function App() {
  return <Listing items={items} />;
}