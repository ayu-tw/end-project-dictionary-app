import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}
        {props.result.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meaning meaning={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
