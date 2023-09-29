import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let magicImageUrl = "./magic.png";
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses( (prev) => (
                prev.filter((cid) => (cid!==course.id))
            ));
            toast.warning("Like removed!")
        }else{
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }else{
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-[450px] object-cover" src={course.image || magicImageUrl} />
            <div className="w-[40px] h-[40px] rounded-full bg-white grid place-items-center absolute right-1.5 -bottom shadow-xl">
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id) ? 
                        (<FcLike fontSize="1.75rem"/>) : 
                        (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>
            <div className="p-4 text-white h-[150px]">
                <p className="font-semibold text-lg leading-6">{course.name}</p>
                <p className="text-base mt-2">Species -- {course.species}</p>
                <p className="text-base mt-2">House -- {course.house || "Dunno"}</p>
                <p className="text-base mt-2">Patronus -- {course.patronus || "Dunno"}</p>
            </div>
        </div>
    </div>
  )
}

export default Card