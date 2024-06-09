import { Fragment } from 'react'
import logo from "../Assets/GAVAKI PNG-01.png"
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'
import Example from './Popup'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const {t} = useTranslation()

  const navigation = [
    { name: t('home'), href: '/', current: true },
    { name: t('nfraei'), href: '/NFRAI', current: false },
    { name: t('forms'), href: '/Forms', current: false },
    { name: t('contact_us'), href: '/Contact us', current: false },
  ]
  return (
    <Disclosure as="nav" className="bg-green-1000">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-1 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-green-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 ">
                  <a href="/"><img
                    className="h-12 w-auto"
                    src={logo}
                    alt="Your Company"
                  /></a>
                  
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="hidden sm:block">
                  <div className="flex space-x-4 ">
                   
                      <a
                        
                        href='/'
                        id='#nav-links'
                        style={
                          {
                            
                          }
                        }
                      
                          
                         className='rounded-md px-3 py-2 text-sm font-small text-white'
                     
                      
                      >
                        {t('home')}
                      
                      </a>
                      <a
                        
                        href='/NFRAI'
                        id='#nav-links'
                        style={
                          {
                            
                          }
                        }
                      
                          
                         className='rounded-md px-3 py-2 text-sm font-small text-white'
                     
                      
                      >
                      {t('nfraei')}
                      
                      </a>
                      <a
                        
                        href='/Contact us'
                        id='#nav-links'
                        style={
                          {
                            
                          }
                        }
                      
                          
                         className='rounded-md px-3 py-2 text-sm font-small text-white '
                     
                      
                      >
                        {t('contact_us')}
                      
                      </a>
                      <a
                        
                        href='/Forms'
                        id='#nav-links'
                        style={
                          {
                            
                          }
                        }
                      
                          
                         className='rounded-md px-3 py-2 text-sm font-small text-white'
                     
                      
                      >
                        {t('forms')}
                      
                      </a>

             
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-12 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                              <Example/>

                

              </div>
            </div>
          </div>


          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 justify-center items-center">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium Current:bg-[#F7C35F]'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
                
              ))}
              <DisclosureButton>

              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
