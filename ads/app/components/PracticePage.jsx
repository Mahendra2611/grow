'use client'
import { useState ,useEffect} from "react";
export default function PracticePage() {
    const [showChild, setShowChild] = useState(false);
   
    return (
      <div>
        <button onClick={() => setShowChild(!showChild)}>
          Toggle Child Component
        </button>
        {showChild && <ChildComponent />}
      </div>
    );
  }
  
  function ChildComponent() {
    useEffect(() => {
      console.log("Mounted");
      return () => console.log("Unmounted");
    }, []);
  
    return <div>I'm the Child Component</div>;
  }
  