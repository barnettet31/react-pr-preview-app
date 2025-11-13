function App() {
  const version = import.meta.env.VITE_PR_NUMBER || 'dev';
  return (
    <main className="flex-1 flex justify-center py-4 flex-col items-center gap-4">
      <div className="divide-y divide-white/10 overflow-hidden rounded-lg bg-gray-800/50 outline -outline-offset-1 outline-white/10">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-4xl font-semibold text-gray-600 dark:text-gray-100 ">React Preview App Card</h1>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="flex gap-2 flex-col text-gray-400 dark:text-gray-50">
            <span className="text-grey-400">Pull Request Number: {version}</span>
            <span>Current Time: {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
