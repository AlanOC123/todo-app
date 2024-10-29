import page from '../../../shared/components/page'

export default function dashboardPage(...modules) 
{
  const dashboard = page
  (
    'dashboard',
    ...modules
  )

  dashboard.classList.remove('page');

  return dashboard;
};
