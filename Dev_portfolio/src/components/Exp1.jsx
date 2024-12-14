import React from "react";
import { GrTechnology } from "react-icons/gr";

function Exp1() {
  return (
    <div className="Experiencecard text-yellow-200 text-[15px] bg-[#1B1B1A]  drop-shadow-xl border-[1px] border-[#6e6e6d] rounded-md w-3/5">
      <div className="pt-8 px-2 py-2 pb-2">
        <div className="flex justify-between ">
          <h1 className="text-[22px] font-semibold hover:text-blue-400">
            Machine Learning Intern{" "}
          </h1>
          <GrTechnology className="text-[20px]" />
        </div>
        <div className="flex justify-between p-2 ">
          <h4 className=" text-pretty">Froyo Technologies pvt ltd.</h4>
        </div>
        <div className=" flex gap-2 flex-wrap pt-2">
          <h1 className="border-[1px] border-[#6e6e6d] p-1 rounded-md">
            {" "}
            Regression{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d]  p-1 rounded-md">
            {" "}
            Classification
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d] rounded-md p-1">
            {" "}
            Scikit-Learn{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d] rounded-md  p-1">
            {" "}
            Pandas{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d]  p-1 rounded-md">
            {" "}
            Numpy{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d]  p-1 rounded-md">
            {" "}
            Matplotlib{" "}
          </h1>
          <h1 className="border-[1px] border-[#6e6e6d]  p-1 rounded-md">
            {" "}
            Seaborn{" "}
          </h1>
          <p className="p-2 hover:text-blue-400">
            {" "}
            Contributing expertise to diverse projects for building various
            machine-learning models. Give the prediction Results with an
            Accuracy of 97.77% . Get familiar with using these Libraries:
            Scikit-learn, XGBoost, Numpy, MatplotLib, Seaborn and Pandas , in
            the field of machine learning.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exp1;
