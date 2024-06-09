import { Fragment } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'
import langlogo from '../Assets/languages.png'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const { i18n } = useTranslation(); // Access the i18n object directly
    function handleSub(lng) {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng); // Save the selected language
    }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <img src={langlogo} alt=""  className='w-5'/>
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-black" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 pl-3">
            <MenuItem>
              {({ focus }) => (
                <a
                onClick={() => handleSub('en')}
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  English
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                  onClick={() => handleSub('hi')}
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                हिंदी
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ focus }) => (
                <a
                onClick={() => handleSub('mr')}
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm '
                  )}
                >
                  मराठी
                </a>
              )}
            </MenuItem>
            <form method="POST" action="#">
              
            </form>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
