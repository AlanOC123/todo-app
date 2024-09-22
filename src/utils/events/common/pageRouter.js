import EventsManager from './EventsManager';
import events from './events';

export default function pageRouter() {

  function resetPage() {
    const icons = [
      document.querySelector('#home-card'),
      document.querySelector('#tasks-card'),
      document.querySelector('#projects-card'),
      document.querySelector('#stats-card'),
      document.querySelector('#calendar-card'),
      document.querySelector('#settings-card'),
    ];

    const pages = [
      document.querySelector('.home'),
      //document.querySelector('.tasks'),
      //document.querySelector('.projects'),
      //document.querySelector('.stats'),
      //document.querySelector('.calendar'),
      document.querySelector('.settings'),
    ];

    icons.forEach(icon => icon.classList.remove('icon-active'));
    pages.forEach(page => page.classList.remove('page-active'));
  }

  function routeHome() {
    resetPage();
    const page = document.querySelector('.home');
    const icon = document.querySelector('#home-card');
    page.classList.add('page-active');
    icon.classList.add('icon-active');
  }
  function routeTasks() {
    resetPage()
    const page = document.querySelector('.tasks');
    const icon = document.querySelector('#tasks-card');
    //page.classList.add('page-active');
    icon.classList.add('icon-active');
  }
  function routeProjects() {
    resetPage()
    const page = document.querySelector('.projects');
    const icon = document.querySelector('#projects-card');
    //page.classList.add('page-active');
    icon.classList.add('icon-active');
  }
  function routeStats() {
    resetPage()
    const page = document.querySelector('.stats');
    const icon = document.querySelector('#stats-card');
    //page.classList.add('page-active');
    icon.classList.add('icon-active');
  }
  function routeCalendar() {
    resetPage()
    const page = document.querySelector('.calendar');
    const icon = document.querySelector('#calendar-card');
    //page.classList.add('page-active');
    icon.classList.add('icon-active');
  }
  function routeSettings() {
    resetPage()
    const page = document.querySelector('.settings');
    const icon = document.querySelector('#settings-card');
    page.classList.add('page-active');
    icon.classList.add('icon-active');
  }

  EventsManager.on(events.renderHome, routeHome);
  EventsManager.on(events.renderTasks, routeTasks);
  EventsManager.on(events.renderProjects, routeProjects);
  EventsManager.on(events.renderStats, routeStats);
  EventsManager.on(events.renderCalendar, routeCalendar);
  EventsManager.on(events.renderSettings, routeSettings);
};