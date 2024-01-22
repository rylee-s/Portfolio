export default function NavBar({ name }: { name: string }) {
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 py-6">
        <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
          <nav className="relative flex w-full justify-between gap-6">
            <div className="relative m-auto inline-flex min-w-max lg:m-0">
              <a className="relative flex items-center gap-3">
                <div className="relative flex h-7 w-7 overflow-hidden rounded-xl">
                  <span className="absolute -right-1 -top-1 h-4 w-4 rotate-45 rounded-md bg-green-500"></span>
                  <span className="absolute -bottom-1 -right-1 h-4 w-4 rotate-45 rounded-md bg-[#FCDC58]"></span>
                  <span className="absolute -bottom-1 -left-1 h-4 w-4 rotate-45 rounded-md bg-blue-600"></span>
                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900"></span>
                </div>
                <div className="inline-flex text-lg font-semibold text-white">
                  {name}
                </div>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
