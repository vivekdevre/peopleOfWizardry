import React, { useState } from 'react'
import Card from "./Card"

const Cards = (props) => {
    let courses = props.courses; 
    let allCourses = courses ? Object.values(courses) : [];
    const [likedCourses, setLikedCourses] = useState([]);
    let category = props.category;

    function getCourses(){
      if(category === 'All'){
        return allCourses;
      }else{
        let newCourses = allCourses.filter((course) => course.house === category);
        return newCourses;
      }
    }
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">{getCourses().map((course) => {
        return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>);
    })}</div>
    
  )
}

export default Cards;
