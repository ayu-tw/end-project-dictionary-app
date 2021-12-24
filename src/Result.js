import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Dictionary.css";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <section>
          <h2>{props.result.word}</h2>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.result.meanings.map(function (meanings, index) {
          return (
            <section key={index}>
              <Meaning meaning={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
