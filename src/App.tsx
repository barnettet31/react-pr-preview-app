function App() {
  //@ts-ignore
  const version = import.meta.env.VITE_PR_VERSION || 'dev';
  console.log(import.meta.env)
  return (
    <main className="flex-1 flex justify-center py-4 flex-col">
      <h1 className="text-3xl text-red-600">Hello from my preview</h1>
      <p className="text-gray-50">Current time {new Date().toLocaleDateString()}</p>
      <p>Build version: {version}</p>
    </main>
  )
}

export default App
