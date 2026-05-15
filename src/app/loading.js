export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        <div className="mt-4 text-indigo-400 text-center font-medium">
          Loading...
        </div>
      </div>
    </div>
  )
}