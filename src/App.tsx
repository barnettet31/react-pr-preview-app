function App() {
  const version = import.meta.env.VITE_PR_NUMBER || 'dev';
  return (
    <main className="flex-1 flex justify-center py-4 flex-col items-center gap-4">
      <h1 className="text-4xl text-red-600 font-semibold">Hello from my preview</h1>
      <p className="text-gray-50">Current time {new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}</p>
      <p>Build version: {version}</p>
      <p>You're doing your best</p>
    </main>
  )
}

export default App
