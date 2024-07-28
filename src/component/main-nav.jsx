import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex lg:flex-1 items-center  justify-center">
            <a href="#" >
              <svg width="40" height="30" viewBox="0 0 123 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1954_2)">
                  <path
                    d="M48.6056 87.9449H4.3205C1.93435 87.9449 0 86.0105 0 83.6244V4.32916C0 0.347559 4.92874 -1.51462 7.56158 1.47224L51.8467 51.7118C52.5423 52.501 52.9261 53.5168 52.9261 54.5687V83.6244C52.9261 86.0105 50.9917 87.9449 48.6056 87.9449Z"
                    fill="black"
                  />
                  <path
                    d="M64.8068 87.9449H109.092C111.478 87.9449 113.413 86.0105 113.413 83.6244V4.32916C113.413 0.347559 108.484 -1.51462 105.851 1.47224L61.5657 51.7118C60.8701 52.501 60.4863 53.5168 60.4863 54.5687V83.6244C60.4863 86.0105 62.4207 87.9449 64.8068 87.9449Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1954_2">
                    <rect width="123" height="90" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <p className=" text-black">Motto</p>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img alt="" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" className="h-8 w-auto" />
              </a>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
}
