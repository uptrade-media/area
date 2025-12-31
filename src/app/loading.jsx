export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-[#081c3e] border-t-[#b9945a] mb-4"></div>
        <p className="text-xl font-semibold text-[#081c3e]">Loading...</p>
      </div>
    </div>
  )
}
