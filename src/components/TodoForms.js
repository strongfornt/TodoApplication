"use client";
import React, { useState } from "react";
import Container from "./Container";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Add_Todo, deletTodo, removeTodo } from "@/reduxStore/todoSlice";
import toast, { Toaster } from 'react-hot-toast';

const TodoForms = () => {
  const todosValue = useSelector((state) => state.todos.todosValue);
  console.log(todosValue);
  const dispatch = useDispatch();
  const [change, setChange] = useState("");
  const valueChange = (e) => {
    setChange(e.target.value);
  };
  const saveTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: change,
    };
    if(change === ''){
      toast.error('Enter your todo')
    }else{
      dispatch(Add_Todo(newTodo));
    setChange("");
    toast.success('Todo added successfully')
    }
    
  };
  return (
    <>
      <Container>
        <div className="w-full flex items-center justify-center py-2">
          <h1 className="text-xl">DROP YOUR TODO HERE.</h1>
        </div>
        <div className="flex items-center justify-center max-w-xl mx-auto relative py-2">
          <input
            className="flex-1 py-0.5 px-1 rounded-lg outline-none bg-gradiant bg-[#0d3837] text-white"
            type="text"
            placeholder="write anything here.."
            onChange={valueChange}
            value={change}
          />

          <button
            onClick={saveTodo}
            className="absolute right-1 top-1/2-translate-y-1/2 rounded-full p-0.5
        hover:text-green-800 duration-500"
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
        <div className=" max-w-xs mx-auto  items-center justify-center   py-3 ">
          {todosValue.length > 0 &&
            todosValue.map((item) => (
              <p
                key={item.id}
                className="my-2 flex bg-[#0d3837] py-1 rounded-lg justify-between px-2"
              >
                {item?.text}

                <button
                  className="mt-1 hover:text-red-500 duration-500 "
                  onClick={() => dispatch(deletTodo(item.id))}
                >
                  <RiDeleteBin3Line />
                </button>
              </p>
            ))}
        </div>
        <div className="flex items-center justify-center w-24 mx-auto">
        {
          todosValue.length >0 &&
          todosValue.map((item) =>(  <button onClick={() =>dispatch(removeTodo(item.id))}
          className="flex-1 bg-[#0d3837] hover:bg-red-600 rounded duration-700">
           Remove all
         </button>
         )) }
       
        </div>
      
      </Container>
      <Toaster 
        position="bottom-center"
        reverseOrder ={false}
      />
    </>
  );
};

export default TodoForms;
