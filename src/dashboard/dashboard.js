import dashboardPage from "./shared/components/dashboardPage";
import viewport from "./viewportModule/viewport";
import navigation from "./navigationModule/navigation";

export default function dashboard()
{
  document.body.append
  (
    dashboardPage
    (
      navigation,
      viewport
    )
  );
};