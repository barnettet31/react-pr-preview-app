function App() {
  //@ts-ignore
  const version = import.meta.VITE_PR_VERSION || 'dev';
  return (
    <main className="flex-1 flex justify-center py-4">
      <h1 className="text-3xl text-red-600">Hello from my preview</h1>
      <p>Current time {new Date().toLocaleDateString()}</p>
      <p>Build version: {version}</p>
    </main>
  )
}

export default App
