import { CardBack } from './components/CardBack'
import { CardFront } from './components/CardFront'
import { Form } from './components/Form'

function App () {
  return (
    <main className="flex flex-col">
      <div className="py-10 relative w-full bg-gradient-to-tl from-indigo-900 via-purple-900 to-indigo-900">
        <div className="pl-10">
          <CardBack />
        </div>
        <div className="absolute top-40 -left-5 h-full w-full">
          <CardFront />
        </div>
      </div>
      <section className="relative top-32 right-0 py-10">
        <Form />
      </section>
    </main>
  )
}

export default App
