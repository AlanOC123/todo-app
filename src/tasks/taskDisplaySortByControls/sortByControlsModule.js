import sortByControlsContainer from "./components/sortByControlsContainer";
import sortByControlsHeader from "./components/sortByControlsHeader";
import sortByControlsDropDown from "./components/sortByControlsDropDown";

export default (function sortByControlsModule() {
  return sortByControlsContainer(
    sortByControlsHeader(),
    sortByControlsDropDown()
  );
})();
