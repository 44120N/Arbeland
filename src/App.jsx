import Accordion from './components/Accordion'

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f3f3f3] dark:bg-[#121212]">
      <Accordion
        question="What is Neobrutalism?"
        answer="Neobrutalism is a design style characterized by bold colors, strong contrasts, and a minimalistic approach, often with a 'raw' aesthetic."
      />
      <Accordion
        question="Why use React?"
        answer="React is a powerful library for building user interfaces with a component-based approach, enabling efficient updates and scalability."
      />
    </div>
  )
}
