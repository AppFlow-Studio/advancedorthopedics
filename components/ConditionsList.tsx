import Link from 'next/link';
import React, { useState } from 'react';
import { Conditions } from './data/conditions';
import { ConditionInfoProp } from './ConditionCard';
import ConditionsSearchBar from './ConditionsSearchBar';
// Your data - replace with your actual list items


// Number of items to show initially on small screens
const INITIAL_VISIBLE_COUNT = 4; // Adjust as needed

function ConditionList({currentCondition} : { currentCondition: string }) {
  const [ data, setData ] = useState(Conditions)

  const [isExpanded, setIsExpanded] = useState(false);
  const [ VisibilityCount, setVisibilityCount] = useState(INITIAL_VISIBLE_COUNT);
  const handleShowMore = () => {
    setIsExpanded(true);
    setVisibilityCount(VisibilityCount + 4); // Show all items
    if(VisibilityCount + 4 < Conditions.length) {
      setIsExpanded(false);
    }
  };

  // --- Handler function for when a condition is selected in the search bar ---
  const handleConditionSelect = (condition: ConditionInfoProp) => {
    console.log("Parent: Condition selected - ", condition.title);
    setData([condition]); // Update state to show only the selected condition
  };

  // --- Handler function for when the search bar is cleared ---
  const handleSearchClear = () => {
    console.log("Parent: Search cleared - Resetting data to full list");
    setData(Conditions); // Reset state to the original full list of conditions
  };


  return (
    <div className="w-full max-w-lg mx-auto space-y-10"> {/* Optional: Container styling */}
      <ConditionsSearchBar conditions={Conditions} onSelect={handleConditionSelect} onClear={handleSearchClear} />
       <div className=' flex flex-col space-y-[20px] hover:cursor-pointer mt-[32px]'>
        {data.map((condition, index) => {
          // Determine if this item is beyond the initial visible count
          const isInitiallyHidden = index >= VisibilityCount;

          // Determine visibility classes using Tailwind:
          // - Base: 'flex' (or 'block' if you prefer) to display the item
          // - If it's initially hidden:
          //   - On small screens (<md): 'hidden' if not expanded, 'flex' (or 'block') if expanded
          //   - On medium screens (md+): Always 'md:flex' (or 'md:block') regardless of expansion state
          const visibilityClasses = isInitiallyHidden
            ? `${isExpanded ? 'flex' : 'hidden'} lg:flex` // Show if expanded OR screen is md+, hide otherwise on small screens
            : 'flex'; // Always show if it's within the initial count

          return (
            <Link href={`/area-of-speciality/${condition.slug}`} className={`${currentCondition == condition.title ? 'bg-[#022968] text-white' : 'bg-[#FAFAFA] text-[#111315]'} p-[16px] w-full flex flex-row justify-between items-center rounded-[10px] ${visibilityClasses}`} key={condition.title}>
                <h1
                style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
                }}  
                className='text-lg '
                >{condition.title}</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M0.55723 12.3964C0.718604 12.2745 1.20035 11.9106 1.47806 11.6939C2.03427 11.2598 2.77336 10.6667 3.51025 10.0269C4.25087 9.38385 4.97216 8.70833 5.50241 8.10822C5.76829 7.80731 5.97032 7.54297 6.10182 7.32484C6.22549 7.11969 6.25121 6.99851 6.25121 6.99851C6.25121 6.99851 6.22549 6.88088 6.10182 6.67574C5.97032 6.45761 5.76829 6.19328 5.50241 5.89236C4.97217 5.29225 4.25087 4.61674 3.51024 3.9737C2.77334 3.3339 2.03424 2.74079 1.47802 2.30671C1.20031 2.08998 0.719248 1.72658 0.557872 1.6047C0.224349 1.35906 0.152413 0.889059 0.398046 0.555536C0.643678 0.222013 1.11318 0.150764 1.4467 0.396397L1.44924 0.398315C1.6185 0.526155 2.11751 0.903056 2.40086 1.12419C2.96965 1.56806 3.73055 2.17849 4.49365 2.84105C5.25303 3.50037 6.03173 4.22604 6.62649 4.89916C6.9231 5.23486 7.18982 5.57515 7.38645 5.90131C7.57066 6.20689 7.75195 6.59379 7.75194 7.0003C7.75194 7.40681 7.57066 7.7937 7.38644 8.09927C7.18982 8.42544 6.9231 8.76573 6.62648 9.10143C6.03173 9.77454 5.25304 10.5002 4.49367 11.1595C3.73058 11.8221 2.96968 12.4325 2.40091 12.8764C2.11735 13.0977 1.61832 13.4746 1.44941 13.6022L1.44723 13.6038C1.11371 13.8495 0.643732 13.7786 0.398097 13.4451C0.152471 13.1115 0.223736 12.642 0.55723 12.3964Z" fill="#5B5F67"/>
                </svg>
            </Link>
          );
        })}
      </div>

      {/* Show the "More" button only if:
          1. The list is not currently expanded.
          2. There are more items than initially shown. */}
      {!isExpanded && Conditions.length > VisibilityCount && (
        <button
          onClick={handleShowMore}
          // Button is visible by default ('block'), but hidden on medium screens and up ('md:hidden')
          className="flex items-center space-x-4 justify-center lg:hidden text-white w-full mt-1 p-4 hover:from-gray-200 hover:to-gray-400 rounded-b-lg font-semibold text-center cursor-pointer transition-colors duration-200  flex-row"
          style={{
            background : 'linear-gradient(0deg, #022968 8.81%, #FFF 92.42%)',
          }} 
        >
          <p>More</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
            <path d="M12.4697 7.96918C12.7625 7.67645 13.2373 7.67645 13.5302 7.96918C13.8231 8.26203 13.823 8.73682 13.5302 9.02973L7.5302 15.0297C7.23731 15.3226 6.76255 15.3226 6.46966 15.0297L0.469656 9.02973C0.17691 8.73682 0.176815 8.26203 0.469656 7.96918C0.762512 7.67648 1.23735 7.67648 1.5302 7.96918L6.99993 13.4389L12.4697 7.96918ZM12.4697 0.96918C12.7625 0.676288 13.2373 0.676289 13.5302 0.96918C13.8231 1.26207 13.8231 1.73683 13.5302 2.02973L7.5302 8.02973C7.23731 8.3226 6.76254 8.32261 6.46966 8.02973L0.469656 2.02973C0.176788 1.73683 0.176774 1.26207 0.469656 0.96918C0.762543 0.676319 1.23732 0.676318 1.5302 0.96918L6.99993 6.43891L12.4697 0.96918Z" fill="white"/>
          </svg>
        </button>
      )}
    </div>
  );
}

export default ConditionList;