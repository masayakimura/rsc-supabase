import NotesList from './components/notes-list'

export default function Page() {
  return (
    <main>
      <div className="m-10 text-center">
        Hello World
        {/* @ts-ignore */}
        <NotesList />
      </div>
    </main>
  )
}
