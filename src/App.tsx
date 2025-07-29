import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button';
import ExtensionCard from './components/ExtensionCard';
import pageLogo from './assets/logo.svg';
import normalMode from './assets/icon-sun.svg';
import darkMode from './assets/icon-moon.svg'
import consolePlusIcon from './assets/logo-console-plus.svg';
import linkChecker from './assets/logo-link-checker.svg';
import styleSpy from './assets/logo-style-spy.svg'


function App() {
  const [isDark, setIsDark] = useState(false)
  const [extensions, setExtensions] = useState([
    {
      id: "devlens",
      icon: consolePlusIcon,
      name: "DevLens",
      description: "Quickly inspect page layouts and visualize element boundaries." ,
      isActive: true
    },
    {
      id: "stylespy",
      icon: styleSpy,
      name: "StyleSpy",
      description: "Instantly analyze and copy CSS from any webpage element.",
      isActive: false
    },
    {
      id: "linkchecker",
      icon: linkChecker,
      name: "LinkChecker",
      description: "Scans and highlights broken links on any page.",
      isActive: true
    }
  ])
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');

  useEffect(() => {
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(isDark ? 'dark-theme' : 'light-theme');
  }, [isDark]);

  const handleRemove = (id: string) => {
    setExtensions(prev => prev.filter(ext => ext.id !== id));
  }

  const handleToggle = (id: string) => {
    setExtensions(prev => prev.map(ext => ext.id === id ? { ...ext, isActive: !ext.isActive } : ext));
  }


  const filteredExtensions = extensions.filter(ext => {
    if (filter === 'active') return ext.isActive;
    if (filter === 'inactive') return !ext.isActive;
    return true;
  });

  return (
    <div className='app-container'>
      <div className='header'>
        <img src={pageLogo} alt='Extension Logo' />
        <button className='settings-btn' onClick={() => setIsDark(!isDark)}><img src={isDark ? normalMode : darkMode} alt='Toogle theme'/></button>
      </div>

      <div className='tabs-container'>
        <h2 className='section-title'>Extensions List</h2>
        <div className='filter-buttons'>
          <Button onClick={() => setFilter('all')} text='All' isActive={filter === 'all'}/>
          <Button onClick={() => setFilter('active')} text='Active' isActive={filter === 'active'}/>
          <Button onClick={() => setFilter('inactive')} text='Inactive' isActive={filter === 'inactive'}/>
        </div>
      </div>

      <div className='extensions-grid'>
        {
          filteredExtensions.map(({ id, icon, name, description, isActive }) => (
            <ExtensionCard 
              key={id}
              icon={icon}
              name={name}
              description={description}
              isActive={isActive}
              onRemove={() => handleRemove(id)}
              onToggle={() => handleToggle(id)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
