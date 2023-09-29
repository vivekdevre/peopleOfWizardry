import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        //save the data in a variable
        // console.log(data);
        setCourses(data);
      } catch (error) {
        toast.error("Something Went Wrong!");
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2 min-h-screen">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        {/* <div><Cards courses = {courses}/></div> */}

        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
          {loading ? (
            <Spinner />
          ) : (
            <Cards
              courses={courses}
              category={category}
              setCategory={setCategory}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
